<script lang="ts">
    export let title: string;
    export let description: string;
</script>

<div class="flex flex-row gap-4">
    <slot name="icon" />
    <div>
        <h3 class="text-xl text-primary font-semibold pb-2">{title}</h3>
        <p>{description}</p>
    </div>
</div>
