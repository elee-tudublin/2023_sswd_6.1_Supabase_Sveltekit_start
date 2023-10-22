<script>
// Get data returned by load()
// The users are included in 'data'
export let data;
</script>

<!-- The HTML content of the page-->

<div class="m-4">

    <!-- A Bootstrap styled table -->
    <table class="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th>id</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            <!-- Iterate trough the users array, adding a new table row for each user -->
            {#each data.users as user}
            <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td> 
                <td>{user.email}</td> 
                <td>{user.phone}</td>                   
            </tr>
            {/each} <!-- end the 'each' loop-->
        </tbody>
    </table>
</div>