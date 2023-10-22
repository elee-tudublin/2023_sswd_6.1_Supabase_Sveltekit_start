<script>
// Get data returned by load()
// The products are included in 'data'
export let data;
</script>

<!-- The HTML content of the page-->

<style>
    .apod {
        max-width: 80%;
        margin: 2em;
    }
</style>

<div class="apod">
    <h1>{data.apod.title}</h1>
    <figure class="figure">
        <img src="{data.apod.hdurl}" class="img-fluid" alt="NASA Astronomy">
        <figcaption class="figure-caption">{data.apod.explanation}</figcaption>
    </figure>
</div>