const resultsArray = []

function getFirstData() {
    numero = document.getElementById('firstNumber').value
    console.log(numero)
    console.log(parseInt(numero))
    if (parseInt(numero) != numero || numero < 0)
    {
        alert("Numero no valido tonto")
    } else {
    return parseInt(document.getElementById('firstNumber').value);
    }
}
function getSecondData() {
    numero = document.getElementById('secondNumber').value
    if (parseInt(numero) != numero || numero < 0)
    {
        alert("Numero no valido tonto")
    } else {
        return parseInt(document.getElementById('secondNumber').value);
    }
}
function add(){
    x = getFirstData()
    y = getSecondData()
    result = x+y

    console.log(result)
    writeToWindow(result)
    addResult(result)
    return result
}
function subtract(){
    x = getFirstData()
    y = getSecondData()
    result = x-y

    writeToWindow(result)
    addResult(result)
    return result
}

function multiply(){
    x = getFirstData()
    y = getSecondData()
    result = x*y
    writeToWindow(result)
    addResult(result)
    return result
}
function divide(){
    x = getFirstData()
    y = getSecondData()
    result = x/y
    writeToWindow(result)
    addResult(result)
    return result
}

function power(){
    x = getFirstData()
    y = getSecondData()
    result = Math.pow(x,y)

    writeToWindow(result)
    addResult(result)
    return result
}

function squareRoot(){
    x = getFirstData()
    result = Math.sqrt(x)

    writeToWindow(result)
    addResult(result)
    return result
}

function percentage(){
    x = getFirstData()
    result = x*(y/100)
    writeToWindow(result)
    addResult(result)
    return result
}

function binary(){
    x = getFirstData()
    result =(x >>> 0).toString(2)

    writeToWindow(result)
    addResult(result)
    return result;
}

function hexadecimal() {
    x = getFirstData()
    result = x.toString(16)

    writeToWindow(result)
    addResult(result)
    return result
}

function octal() {
    x = getFirstData()
    result = x.toString(8)

    writeToWindow(result)
    addResult(result)
    return result
}

function backspace() {
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
}

function addResult(result) {
    return resultsArray.push(result)
}

function writeToWindow(result) {
    newwindow = open()
    console.log(resultsArray)
    newwindow.document.write(result)
}



