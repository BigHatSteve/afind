<script lang="ts">
    import "../app.css";
    import Header from "./Header.svelte";
</script>

<div class="max-w-[64rem] mx-auto">
    <Header />

    <slot />
</div>
