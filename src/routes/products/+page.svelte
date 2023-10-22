<script>
// Get data returned by load()
// The products are included in 'data'
export let data;
</script>

<!-- The HTML content of the page-->

<div class="m-4">

    <!-- A Bootstrap styled table -->
    <table class="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>decription</th>
                <th>price</th>
                <th>stock</th>
            </tr>
        </thead>
        <tbody>
            <!-- Iterate trough the products array, adding a new table row for each product -->
            {#each data.products as product}
            <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td> 
                <td>{product.price}</td> 
                <td>{product.stock}</td>                   
            </tr>
            {/each} <!-- end the 'each' loop-->
        </tbody>
    </table>
</div>