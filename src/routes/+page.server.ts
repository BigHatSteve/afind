import type { PageServerLoad, Actions } from "./$types";
import { fail, error } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { waitlistFormSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";

// mailchimp
import { API_KEY, SERVER_PREFIX, AUDIENCE_ID } from "$env/static/private";
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
        const response = await fetch(`https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${btoa(`anystring:${API_KEY}`)}`,
            },
            body: JSON.stringify({
                email_address: waitlistForm.data.email,
                status: "subscribed",
            }),
        });
        const result = await response.json();
        if (!response.ok) {
            if (result.title === "Member Exists") {
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
