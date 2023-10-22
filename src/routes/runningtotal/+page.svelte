<script>
    // variables to keep track of value entered (num) and the running total (total)
    let num = 0
    let total = 0;

    // A function to add num to total
    function addToTotal() {
        total += num;
    }
    function reset() {
        total = 0;
    }

</script>

<!-- Display running total-->
<div class="m-5 w-50">
    <h1>Total = {total}</h1>

<!-- The form -->
<form >
    <div class="mb-3">
      <label for="input_value" class="form-label">Enter value</label>
      <!-- value of num variable is bound to this input field-->
      <input bind:value={num} type="number" class="form-control" id="input_value">
    </div>
    <!-- on:click calls addToTotal when the button is clicked-->
    <button on:click={addToTotal} type="button" class="btn btn-primary">Add to total</button>
    <button on:click={reset} type="button" class="btn btn-primary">Reset total</button>
  </form>
</div>
