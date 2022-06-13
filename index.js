const numberButtons = document.querySelectorAll("[data-attribute='number']");
const operatorButtons = document.querySelectorAll(
   "[data-attribute='operation']"
);
let currentTextButton = document.getElementById("current");
let operandValue = document.getElementById("answer");
const clearData = document.getElementById("clear");
const deleteData = document.getElementById("delete");
const decimal = document.getElementById("dot");
const equal = document.getElementById("equal");

let data = [];

let currentNumber = "";
let operand = "";
let prevNumber = "";

const appendNumber = (number) => {
   currentNumber = currentNumber.toString() + number.toString();
};

const updateDisplay = () => {
   currentTextButton.innerText = currentNumber;
   if (operand !== null) {
      operandValue.innerText = `${prevNumber} ${operand}`;
   }
};

const chooseOperation = (operation) => {
   // if (currentNumber === "") return;
   // if (prevNumber !== "") {
   //    compute();
   // }
   // operand = operation;
   // prevNumber = currentNumber;
   // currentNumber = "";

   if (operand === "") {
      prevNumber = currentNumber;
   }
   if (prevNumber !== "") {
      compute();
   }
   operand = operation;
   currentNumber = "";
};

const compute = () => {
   let computation;
   const prev = parseFloat(prevNumber);
   const current = parseFloat(currentNumber);
   if (isNaN(prev) || isNaN(current)) return;
   switch (operand) {
      case "+":
         computation = prev + current;
         break;
      case "-":
         computation = prev - current;
         break;
      case "*":
         computation = prev * current;
         break;
      case "÷":
         computation = prev / current;
         break;
      case "%":
         computation = prev % current;
         break;
      default:
         return;
   }
   currentNumber = computation;
   operand = "";
   // prevNumber = "";
   prevNumber = computation;
};

const deleted = () => {
   currentNumber = currentNumber.toString().slice(0, -1);
   // const prev = prevNumber.toString();
   // const curr = currentNumber.toString();
   // let val = curr.concat(prev).slice(0, -1);
   // console.log(val);
   // currentNumber = val;
   // console.log(currentNumber);
};

clearData.addEventListener("click", () => {
   currentNumber = "";
   operand = "";
   prevNumber = "";
   updateDisplay();
});

decimal.addEventListener("click", (e) => {
   if (currentNumber.includes(".")) {
      return;
   } else {
      appendNumber(e.target.value);
      updateDisplay();
   }
});

numberButtons.forEach((button) => {
   button.addEventListener("click", (e) => {
      appendNumber(e.target.value);
      updateDisplay();
   });
});

operatorButtons.forEach((button) => {
   button.addEventListener("click", (e) => {
      chooseOperation(e.target.value);
      updateDisplay();
   });
});

equal.addEventListener("click", () => {
   compute();
   prevNumber = "";
   updateDisplay();
});

deleteData.addEventListener("click", () => {
   deleted();
   updateDisplay();
});

// buttons.forEach((button) => {
//    button.addEventListener("click", () => {
//       // if (data.includes(".")) {
//       //    const x = button.id
//       // }

//       if (
//          button.dataset.attribute == "number" ||
//          button.dataset.attribute == "operation"
//       ) {
//          data.push(button.value);
//          console.log(data);
//          current.textContent = data.join("");

//          if (button.value) {
//             answer.innerText = eval(data.join(""));
//          }
//       }

//       // when delete button click
//       if (button.id == "delete") {
//          data.pop(button.value);
//          current.textContent = data.join("");
//          answer.innerText = data.join("");
//       }

//       // When erase button click
//       if (button.id == "clear") {
//          data.length = 0;
//          current.textContent = data.join("");
//          answer.innerText = data.join("");
//       }
//    });
// });
