import type { PageServerLoad, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { waitlistFormSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";

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
        
        return {
            waitlistForm,
        };
    },
};
