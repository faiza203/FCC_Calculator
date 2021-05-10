const outPutScreenEl = document.querySelector(".outputScreen");
const formulaScreenEl = document.querySelector(".formulaScreen");

let outPutScreen = "";
let formulaScreen = "";

function changeOutPutScreen(e) {
  outPutScreen += e.value;
  outPutScreenEl.value = outPutScreen;
}

function changeFormulaScreen(e) {
  formulaScreen += outPutScreen + e.value;
  outPutScreen = "";
  formulaScreenEl.value = formulaScreen;
  outPutScreen.value = "";
}
