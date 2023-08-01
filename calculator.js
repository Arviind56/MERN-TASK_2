"use strict";
// alert(`enter the input the input variables`);
document.querySelector(".check").addEventListener("click", function () {
  let result;
  const input1 = Number(document.querySelector(".inputs1").value);
  const input2 = Number(document.querySelector(".inputs2").value);
  const input3 = document.querySelector(".inputs3").value;
  console.log(input1);
  console.log(input3);
  if (input1 == 0 || (input2 == 0 && input3 == "/")) {
    alert("The answer will be undefined");
  } else if (input1 == 0 || (input2 == 0 && input3 == "/") || input2 == 0) {
    alert("The answer will be undefined");
  } else {
    switch (input3) {
      case "+": {
        result = input1 + input2;
        console.log(
          (document.querySelector(".message").textContent = `${result}`)
        );
        console.log(`${result}`);
        break;
      }
      case "-": {
        result = input1 - input2;
        console.log(
          (document.querySelector(".message").textContent = `${result}`)
        );
        break;
      }
      case "*": {
        result = input1 * input2;
        console.log(
          (document.querySelector(".message").textContent = `${result}`)
        );
        break;
      }
      case "/": {
        result = input1 / input2;
        console.log(
          (document.querySelector(".message").textContent = `${result}`)
        );
        break;
      }
      default:
        console.log(
          (document.querySelector(
            ".message"
          ).textContent = `enter the correct variable`)
        );
    }
  }
});
