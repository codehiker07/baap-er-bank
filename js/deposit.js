//Deposit Side
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Please Deposit Section
    const pleaseDeposit = document.getElementById('deposit-id');
    const depositAmount = pleaseDeposit.value;
    const parseDepositAmount = parseFloat(depositAmount);
    // console.log(typeof parseDepositAmount);


    //Total Deposit Section (Previous)
    const initialDeposit = document.getElementById('initial-deposit');
    const initialDepositTotal = initialDeposit.innerText;
    const parsePreviousDepositTotal = parseFloat(initialDepositTotal);
    //Total Deposit Section (Current)
    const currentDepositTotal = parsePreviousDepositTotal + parseDepositAmount;
    initialDeposit.innerText = currentDepositTotal;

})


//Withdraw Side
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Please Withdraw Section
    const pleaseWithdraw = document.getElementById('withdraw-input');
    const withdrawAmount = pleaseWithdraw.value;
    const parseWithdrawAmount = parseFloat(withdrawAmount);
    // console.log(typeof parseWithdrawAmount);

    //Total Withdraw Section (Previous)
    const initialWithdraw = document.getElementById('initial-withdraw');
    const initialWithdrawTotal = initialWithdraw.innerText;
    const parsePreviousWithdrawTotal = parseFloat(initialWithdrawTotal);
    //Total Withdraw Section (Current)
    const currentWithdrawTotal = parsePreviousWithdrawTotal - parseWithdrawAmount;
    initialWithdraw.innerText = currentWithdrawTotal;
})

//Total Balance Section After Withdraw
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Please Withdraw Section
    const pleaseWithdraw = document.getElementById('withdraw-input');
    const withdrawAmount = pleaseWithdraw.value;
    const parseWithdrawAmount = parseFloat(withdrawAmount);
    //Current Balance
    const initialBalance = document.getElementById('initial-balance');
    const initialBalanceAmount = initialBalance.innerText;
    const parseInitialBalanceAmount = parseFloat(initialBalanceAmount);
    //Balance Calculation
    const balanceAfterWithdraw = parseInitialBalanceAmount - parseWithdrawAmount;
    initialBalance.innerText = balanceAfterWithdraw;
    pleaseWithdraw.value = '';
})

//Total Balance Section After Deposit
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Please Deposit Section
    const pleaseDeposit = document.getElementById('deposit-id');
    const depositAmount = pleaseDeposit.value;
    const parseDepositAmount = parseFloat(depositAmount);
    //Current Balance
    const initialBalance = document.getElementById('initial-balance');
    const initialBalanceAmount = initialBalance.innerText;
    const parseInitialBalanceAmount = parseFloat(initialBalanceAmount);
    //Balance Calculation
    const balanceAfterDeposit = parseInitialBalanceAmount + parseDepositAmount;
    initialBalance.innerText = balanceAfterDeposit;
    pleaseDeposit.value = '';
})


