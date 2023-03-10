// 1 - calculate
const inputCalc1 = document.getElementById('first_value');
const inputCalc2 = document.getElementById('second_value');
const opt = document.querySelectorAll("option");
const resField = document.getElementById('res_calc');

function calc() {
    if (inputCalc1.value === '' || inputCalc2.value === ''){
        return resField.textContent = 'Enter a number';
    }
    let res, operator;
    const a = +inputCalc1.value, b = +inputCalc2.value;
    for (let i in opt) {
        if (opt[i].selected)
            operator = opt[i].value
    }
    switch (operator) {
        case ('+'):
            res = a + b;
            break;
        case ('-'):
            res = a - b;
            break;
        case ('/'):
            res = a / b;
            break;
        case ('*'):
            res = a * b;
            break;
    }
    resField.textContent = res;
}

// 2 - summary
const inputItem = document.getElementById('item_input');
const sumField = document.getElementById('sum_item');
const arrField = document.getElementById('array_result');
const storage = [];

function isNumber(x) {
    return !((x === '') || (isNaN(+x)));
}

function addItem() {
    if (isNumber(inputItem.value))
        storage.push(+inputItem.value);
    else
        return alert('Not a number');
    let sum = 0;
    for (let item of storage) {
        sum += (+item);
    }
    sumField.textContent = sum;
    arrField.textContent = JSON.parse(JSON.stringify(storage));
}

function clearStorage() {
    storage.length = 0;
    sumField.textContent = 0;
    arrField.textContent = JSON.parse(JSON.stringify(storage));
}

// 3 - reverse number
const inputNum = document.getElementById('number_input');
const reverseField = document.getElementById('reverse_result');

function mathReverse(num) {
    let rev = 0, isNegative = false;
    if ((+num) < 0) {
        isNegative = true;
        num = Math.abs(num);
    }
    while (num !== 0) {
        rev = rev * 10 + num % 10;
        num = Math.trunc(num / 10);
    }
    if (isNegative) {
        rev *= (-1);
    }
    return rev;
}

function reverseNumber1() {
    reverseField.textContent = isNumber(inputNum.value) ?
        mathReverse(inputNum.value) : 'Enter a number';
}

function reverseNumber2() {
    if (!isNumber(inputNum.value)) {
        return reverseField.textContent = 'Enter a number';
    }
    reverseField.textContent = (+inputNum.value) < 0 ?
        (inputNum.value.split('').slice(1).reverse().join('')) * (-1) :
        inputNum.value.split('').reverse().join('');
}