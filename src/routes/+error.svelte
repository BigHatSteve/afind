<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="flex flex-col justify-center items-center gap-4 py-32">
    <h1 class="text-4xl font-semibold">{$page.status}</h1>
    <h2 class="text-2xl">{$page.error?.message}</h2>
</div>
