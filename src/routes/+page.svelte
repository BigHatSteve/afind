<script lang="ts">
    import type { PageData } from "./$types";
    import WaitlistForm from "./waitlist-form.svelte";
    export let data: PageData;
</script>

<svelte:head>
    <title>Afind</title>
    <meta name="description" content="Discover, engage, and explore with Afind - your personalized guide to local adventures." />
</svelte:head>

<div class="flex flex-col items-center gap-4 py-32">
    <h1 class="text-5xl text-center font-semibold">Afind</h1>
    <h2 class="text-lg text-center">Discover, engage, and explore with Afind - your personalized guide to local adventures.</h2>
    <p class="text-sm pt-4">Join our waitlist to be notified when Afind releases!</p>
    <WaitlistForm data={data.waitlistForm} />
</div>

<h2 class="text-2xl text-center font-semibold pb-2">How it works</h2>
<p class="text-center">Afind is a cutting-edge mobile application designed to revolutionize the way users discover local businesses and attractions. Our unique approach leverages short-form, AI-driven video recommendations tailored to your preferences and location.</p>
