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
  outPutScreen = "";
  formulaScreenEl.value = formulaScreen;
  outPutScreenEl.value = "";
}

function clearOutPut() {
  formulaScreen = "";
  outPutScreen = "0";
  formulaScreenEl.value = formulaScreen;
  outPutScreenEl.value = "0";
}

function getResult() {
  result = eval(formulaScreen);
  formulaScreenEl.value = `${formulaScreen} = ${result}`;
}

function checkResult() {
  if (formulaScreen !== "") {
    const regex = /[1-9]$/g;
    if (regex.test(formulaScreen) !== true) {
      while (regex.test(formulaScreen) !== true) {
        formulaScreen = formulaScreen.slice(0, -1);
      }
    } else {
      getResult();
    }
  }
}
