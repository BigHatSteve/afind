<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import logo from "$lib/assets/afind-logo.webp";
</script>

<header class="flex flex-row justify-between items-center p-4">
    <a href="/" class="flex flex-row items-center gap-2">
        <img class="w-10 h-10" src={logo} width="132" height="132" alt="Afind logo" />
        <span class="text-2xl font-semibold">Afind</span>
    </a>
    <nav>
        <Button variant="secondary" href="/about">About us</Button>
    </nav>
</header>
