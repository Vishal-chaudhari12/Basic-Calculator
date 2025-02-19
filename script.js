function getInputValues() {
    const firstValue = parseFloat(document.getElementById("firstValue").value);
    const secondValue = parseFloat(document.getElementById("secondValue").value);
    return { firstValue, secondValue };
}

function add() {
    const values = getInputValues();
    if (values) {
        const result = values.firstValue + values.secondValue;
        displayResult(result);
    }
}

function sub() {
    const values = getInputValues();
    if (values) {
        const result = values.firstValue - values.secondValue;
        displayResult(result);
    }
}

function mul() {
    const values = getInputValues();
    if (values) {
        const result = values.firstValue * values.secondValue;
        displayResult(result);
    }
}


function displayResult(result) {
    document.getElementById("result").textContent = "Result: " + result;
}