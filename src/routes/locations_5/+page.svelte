<script>
    export let data;
</script>

<!-- The HTML content of the page-->

<div class="container">
  <div class="row">
    <!-- Page Header -->
    <h2 class="mt-5">Locations from Supabase</h2>
  </div>
  {#if data.categories && data.locations}
    {#each data.locations as location }
    <p>{location.id} | {location.name} | {location.longitude} | {location.latitude}</p>
    {/each}
  <div class="row">
    <div class="col-sm-2">
      <!-- Page Body Left Column (menu) -->
      <div id="categories" class="list-group">
        <!-- placeholders - replace with real category links -->
        <button class="list-group-item list-group-item-action">
            All Locations
        </button>
        {#each data.categories as cat }
        <button class="list-group-item list-group-item-action">
            {cat.name}
        </button>
        {/each}
      </div>
    </div> <!-- End category col -->
    <div class="col-sm-10">
      <!-- Page Body Right Side (Content goes here) -->
      <div id="locations">
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>category</th>
              <th>name</th>
              <th>description</th>
              <th>Location (lat, long)</th>
            </tr>
          </thead>
          <tbody>
            {#each data.locations as location }
            <tr>
                <td>{location.id}</td>
                <td>{location.category_id}</td>
                <td>{location.name}</td>
                <td>{location.description}</td>
                <td><a href="https://www.openstreetmap.org/search?query={location.latitude}%2C{location.longitude}#map=17/{location.latitude}/{location.longitude}" target="_blank">{location.latitude}, {location.longitude}</a></td>
            </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div> <!-- End locations col -->
  </div> <!-- End Row -->
  {:else}
  <p> No data to display</p>
{/if}
</div> <!-- End Main Content-->
