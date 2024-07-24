<script lang="ts">
    import "../app.css";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";

    import { ModeWatcher } from "mode-watcher";
    import { Toaster } from "$lib/components/ui/sonner";
</script>

<ModeWatcher />

<Toaster richColors />

<div class="max-w-[64rem] mx-auto">
    <Header />

    <main class="px-4">
        <slot />
    </main>

    <Footer />
</div>
