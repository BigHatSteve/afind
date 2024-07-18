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
    <WaitlistForm data={data.waitlistForm} />
</div>
