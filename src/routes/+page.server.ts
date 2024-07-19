import type { PageServerLoad, Actions } from "./$types";
import { fail, error } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { waitlistFormSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";

// mailchimp
import { API_KEY, SERVER_PREFIX, AUDIENCE_ID } from "$env/static/private";
import mailchimp from "@mailchimp/mailchimp_marketing";
// mailchimp

export const load: PageServerLoad = async () => {
    return {
        waitlistForm: await superValidate(zod(waitlistFormSchema)),
    };
};

export const actions: Actions = {
    default: async (event) => {
        const waitlistForm = await superValidate(event, zod(waitlistFormSchema));
        if (!waitlistForm.valid) {
            return fail(400, {
                waitlistForm,
            });
        };

        // mailchimp
        try {
            mailchimp.setConfig({
                apiKey: API_KEY,
                server: SERVER_PREFIX,
            });
            const response = await mailchimp.lists.addListMember(AUDIENCE_ID, {
                email_address: waitlistForm.data.email,
                status: "subscribed",
            });
        } catch (err: any) {
            if (err.response.body.title === "Member Exists") {
                error(400, {
                    message: "You are already on the waitlist!"
                });
            } else {
                error(500);
            };
        };
        // mailchimp

        return {
            waitlistForm,
        };
    },
};
