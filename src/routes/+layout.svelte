<script lang="ts">
    import "../app.css";
    import Header from "./Header.svelte";

    import { Toaster } from "$lib/components/ui/sonner";
</script>

<Toaster richColors />

<div class="max-w-[64rem] mx-auto">
    <Header />

    <main class="px-4">
        <slot />
    </main>
</div>
