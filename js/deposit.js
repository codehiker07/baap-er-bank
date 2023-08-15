

/* const initialWithdraw = document.getElementById('initial-withdraw');
const withdraw = initialWithdraw.innerText;

const initialBalance = document.getElementById('initial-balance');
const balance = initialBalance.innerText;

// console.log(deposit, withdraw, balance); */

document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('clicked');
    const deposit = document.getElementById('deposit-id');
    const depositAmount = deposit.value;

    const initialDeposit = document.getElementById('initial-deposit');
    const depositTotal = initialDeposit.innerText;
    initialDeposit.innerText = depositAmount;


})







/* // Withdraw section
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('clicked');
    const withdraw = document.getElementById('withdraw-id');
    const withdrawAmount = withdraw.value;
    // console.log(withdrawAmount);
}) */