<script>

let inputA = 0;
let inputB = 0;
let answer = 0;
let message = '';

/**
 * @param {string} op
 */
function calc(op) {


  switch (op) {
    case '+':
      answer = inputA + inputB;
      break;
    case '-':
      answer = inputA - inputB;
      break;       
    case '*':
      answer = inputA * inputB;
      break;  
      case '/':
        answer = inputA / inputB;
        break; 
      default:
        answer = 0;   
  }

  message = `${inputA} ${op} ${inputB} = ${answer}`

}

</script>


<div class="container">
    <h2 class="mb-4">Calculator</h2>

    <!-- Start Form -->
    <form>
      <div class="form-group mb-4">
        <label for="inputA">Number 1: </label>

        <!-- input field: inputA -->
        <input bind:value={inputA} id="inputA" type="number" step="any" class="form-control" placeholder="Enter a number">
      </div>
      <div class="form-group mb-4">
        <label for="inputB">Number 2:</label>

        <!-- input field: inputB -->
        <input bind:value={inputB} id="inputB" type="number" step="any" class="form-control" placeholder="Enter a number">
      </div>

      <!-- Calculator Buttons -->
      <div class="form-group mb-4">
        <button on:click={() => {calc('+')}} id="btnAdd" type="button" class="btn btn-primary"><span class="bi bi-calculator"></span>Add</button>
        <button on:click={() => {calc('-')}} id="btnSubtract" type="button" class="btn btn-primary"><span class="bi bi-calculator"></span>Subtract</button>
        <button on:click={() => {calc('*')}} id="btnMultiply" type="button" class="btn btn-primary"><span class="bi bi-calculator"></span>Multiply</button>
        <button on:click={() => {calc('/')}} id="btnDivide" type="button" class="btn btn-primary"><span class="bi bi-calculator"></span>Divide</button>
      </div>
    </form>
    <!-- End Form -->
    <h6>Answer:</h6>
    <div class="well pb-4 answer" id="answer">{message}</div>
  </div>

  <style>
        .answer {
        color: red;
        font-size: 2rem;
        }
  </style>