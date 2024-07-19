<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
    import { waitlistFormSchema, type WaitlistFormSchema } from "./schema";
    import {
        type SuperValidated,
        type Infer,
        superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import { toast } from "svelte-sonner";
    import LoaderCircle from "lucide-svelte/icons/loader-circle";

    export let data: SuperValidated<Infer<WaitlistFormSchema>>;

    const waitlistForm = superForm(data, {
        validators: zodClient(waitlistFormSchema),
        onUpdated ({ form: f }) {
            if (f.valid) {
				toast.success("Thanks for signing up!");
			} else {
				toast.error("Please fix the errors in the form.");
			};
        },
        onError ({ result }) {
            if (result.error.message === "You are already on the waitlist!") {
                toast.info(result.error.message);
            } else {
                toast.error("Something went wrong. Try again later.");
            };
        },
        delayMs: 10,
    });

    const { form: formData, enhance, delayed } = waitlistForm;
</script>

<form method="POST" use:enhance class="flex flex-row gap-4">
    <Form.Field form={waitlistForm} name="email">
        <Form.Control let:attrs>
            <!-- <Form.Label>Email</Form.Label> -->
            <Input {...attrs} bind:value={$formData.email} type="email" placeholder="Email" />
        </Form.Control>
        <!-- <Form.Description>This is your email.</Form.Description> -->
        <Form.FieldErrors />
    </Form.Field>
    <Form.Button disabled={$delayed}>
        {#if $delayed}
            <LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
        {/if}
        Sign up
    </Form.Button>
</form>
