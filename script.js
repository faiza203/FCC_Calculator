const outPutScreenEl = document.querySelector(".outputScreen");
const formulaScreenEl = document.querySelector(".formulaScreen");

let outPutScreen = "";
let formulaScreen = "";
let result = "";

function changeOutPutScreen(e) {
  if (result !== "") {
    outPutScreen = e.value;
    formulaScreen = e.value;
    result = "";
  } else {
    outPutScreen += e.value;
    formulaScreen += e.value;
  }
  outPutScreenEl.value = outPutScreen;
  formulaScreenEl.value = formulaScreen;
}

function changeFormulaScreen(e) {
  formulaScreen += e.value;
  formulaScreenEl.value = formulaScreen;
  emptyOutPut();
}

function clearOutPut() {
  emptyOutPut();
  emptyFormula();
}

function getResult() {
  result = eval(formulaScreen);
  typeof result === "number"
    ? (formulaScreenEl.value = `${formulaScreen} = ${result}`)
    : alert("Please check your input");
  emptyOutPut();
}

function checkResult() {
  if (formulaScreen !== "") {
    const regex = /[1-9]$/g;
    if (regex.test(formulaScreen) !== true) {
      while (regex.test(formulaScreen) !== true) {
        formulaScreen = formulaScreen.slice(0, -1);
      }
    } else {
      try {
        getResult();
      } catch (err) {
        emptyOutPut();
        alert("Check your statement");
      }
    }
  }
}

function emptyOutPut() {
  outPutScreen = "";
  outPutScreenEl.value = "0";
}
function emptyFormula() {
  formulaScreen = "";
  formulaScreenEl.value = "";
}
