document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("user-input");
  const buttons = document.querySelectorAll(".calc-keys button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = this.innerText;

      switch (buttonText) {
        case "AC":
          userInput.innerText = "0";
          break;
        case "DEL":
          userInput.innerText = userInput.innerText.slice(0, -1);
          if (userInput.innerText === "") {
            userInput.innerText = "0";
          }
          break;
        case "=":
          try {
            userInput.innerText = eval(userInput.innerText);
          } catch (error) {
            userInput.innerText = "Error";
          }
          break;
        default:
          if (userInput.innerText === "0" || userInput.innerText === "Error") {
            userInput.innerText = buttonText;
          } else {
            userInput.innerText += buttonText;
          }
          break;
      }
    });
  });
});
