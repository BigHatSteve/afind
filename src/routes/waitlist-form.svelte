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

    export let data: SuperValidated<Infer<WaitlistFormSchema>>;

    const waitlistForm = superForm(data, {
        validators: zodClient(waitlistFormSchema),
    });

    const { form: formData, enhance } = waitlistForm;
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
    <Form.Button>Sign up</Form.Button>
</form>
