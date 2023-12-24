const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertNum = (num) => {
  if (!num) {
    output.innerText = "Please enter a valid number";
    return;
  }
  if (num < 1) {
    output.innerText = "Please enter a number grater than or equal to 1";
    return;
  }
  if (num > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  let outputText = "";

  while (num >= 1000) {
    outputText += "M";
    num -= 1000;
  }
  while (num >= 900) {
    outputText += "CM";
    num -= 900;
  }
  while (num >= 500) {
    outputText += "D";
    num -= 500;
  }
  while (num >= 400) {
    outputText += "CD";
    num -= 400;
  }
  while (num >= 100) {
    outputText += "C";
    num -= 100;
  }
  while (num >= 90) {
    outputText += "XC";
    num -= 90;
  }
  while (num >= 50) {
    outputText += "L";
    num -= 50;
  }
  while (num >= 40) {
    outputText += "XL";
    num -= 40;
  }
  while (num >= 10) {
    outputText += "X";
    num -= 10;
  }
  while (num >= 9) {
    outputText += "IX";
    num -= 9;
  }
  while (num >= 5) {
    outputText += "V";
    num -= 5;
  }
  while (num >= 4) {
    outputText += "IV";
    num -= 4;
  }
  while (num >= 1) {
    outputText += "I";
    num -= 1;
  }

  output.innerText = outputText;
  return;
};

convertBtn.addEventListener("click", () => {
  convertNum(numberInput.value);
});
