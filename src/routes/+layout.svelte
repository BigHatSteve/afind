<script lang="ts">
    import "../app.css";
    import Header from "./Header.svelte";

    import { Toaster } from "$lib/components/ui/sonner";
</script>

<Toaster />

<div class="max-w-[64rem] mx-auto">
    <Header />

    <slot />
</div>
