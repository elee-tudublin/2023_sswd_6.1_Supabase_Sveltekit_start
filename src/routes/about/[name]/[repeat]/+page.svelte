<script>
    export let data;
</script>
<div class="m-5">
    {#each Array(data.repeat) as _, i}
    <h1>Welcome to the About Page {i}: <span class="name">{data.name}</span></h1>
    {/each}
</div>

<style>
    .name {
        color: red;
    }

</style>
