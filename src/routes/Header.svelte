<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import logo from "$lib/assets/afind-logo.webp";

    import Sun from "lucide-svelte/icons/sun";
    import Moon from "lucide-svelte/icons/moon";

    import { resetMode, setMode } from "mode-watcher";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
</script>

<header class="flex flex-row justify-between items-center p-4">
    <a href="/" class="flex flex-row items-center gap-2">
        <img class="w-10 h-10" src={logo} width="132" height="132" alt="Afind logo" />
        <span class="text-2xl font-semibold">Afind</span>
    </a>
    <div class="flex flex-row gap-4">
        <nav>
            <Button variant="outline" href="/about">About</Button>
        </nav>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild let:builder>
                <Button builders={[builder]} variant="outline" size="icon">
                    <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span class="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
                <DropdownMenu.Item on:click={() => setMode("light")}>Light</DropdownMenu.Item>
                <DropdownMenu.Item on:click={() => setMode("dark")}>Dark</DropdownMenu.Item>
                <DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </div>
</header>
