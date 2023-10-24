'use strict'
const billInput = document.querySelector('#bill-input');
const numOfppl = document.querySelector('.numOfppl');
const personTip = document.querySelector('.person-tip');
const totalTip = document.querySelector('.total-tip');
const tipBtn = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.reset--btn');
const custopTip = document.querySelector('.custopTip');

numOfppl.value = "1";
billInput.value = "0.0"
personTip.innerHTML = '$0.0'
totalTip.innerHTML = "$0.0"
let billValue = 0.0;
let people = 1;
let tip = 0

billInput.addEventListener('input', billValueFun)
numOfppl.addEventListener('input', peopleInputFun)
tipBtn.forEach(btn => {
    btn.addEventListener('click', toogleBtn);
})
custopTip.addEventListener('input', customTipFun);
resetBtn.addEventListener('click', resetFun);

// bill input function
function billValueFun() {
    billValue = parseFloat(billInput.value);
    if (billValue !== 0.0) {
        resetBtn.classList.remove('resetBtnDeact')
    } else {
        resetBtn.classList.add('resetBtnDeact')
    }
    calcFnc()
}
//  number of people functions
function peopleInputFun() {
    people = parseFloat(numOfppl.value);
    calcFnc();
}
// button tip function
function toogleBtn(event) {
    tipBtn.forEach(btn => btn.classList.remove('active--btn'));
    custopTip.value = "";
    event.target.classList.add('active--btn');
    tip = parseFloat(event.target.innerHTML) / 100;
    calcFnc();
}
// custom tip function
function customTipFun() {
    tip = 0;
    tipBtn.forEach(btn => btn.classList.remove('active--btn'))
    tip = parseFloat(custopTip.value) / 100;
    calcFnc();
}
// calculation function
function calcFnc() {
    if (people >= 1) {
        let personTipValue = (billValue * tip) / people;
        personTip.innerHTML = `$${Math.round(personTipValue * 100) / 100}`;
        let totalCost = billValue + (billValue * tip);
        totalTip.innerHTML = `$${totalCost}`;
        console.log()
    }
}
// reset btn function 
function resetFun() {
    numOfppl.value = "1";
    billInput.value = "0.0"
    personTip.innerHTML = '$0.0'
    totalTip.innerHTML = "$0.0"
    billValue = 0.0;
    people = 1;
    tip = 0;
    custopTip.value = "";
    tipBtn.forEach(btn => btn.classList.remove('active--btn'))
    resetBtn.classList.add('resetBtnDeact')
}