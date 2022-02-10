
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('input-amount');
    const newDepositeText = depositInput.value;
    if (newDepositeText == '') {
        alert("please enter value")
    }
    else if (parseFloat(newDepositeText) <= 0) {
        alert('please enter a valid value')
    }
    else {
        let depositedAmount = document.getElementById('deposited')
        const previousDepositedText = depositedAmount.innerText;
        const newDepositeAmount = parseFloat(newDepositeText)
        const previousDepositedAmount = parseFloat(previousDepositedText)
        const totalDeposite = previousDepositedAmount + newDepositeAmount;

        depositedAmount.innerText = totalDeposite;
        const previousBalance = document.getElementById("balance-total");
        const previousBalanceText = previousBalance.innerText;

        const previousBalanceAmount = parseFloat(previousBalanceText);

        const totalBalance = previousBalanceAmount + newDepositeAmount;

        previousBalance.innerText = totalBalance;

        document.getElementById('input-amount').value = '';

    }
})

// handle withdraw

document.getElementById("withdraw-button").addEventListener('click', function () {
    const withdarwInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdarwInput.value;
    if (newWithdrawText == '') {
        alert('please enter value')
    }
    else if (parseFloat(newWithdrawText) <= 0) {
        alert('please enter a valid value')
    }

    else {
        const newWithdrawAmount = parseFloat(newWithdrawText);
        const getWithdraw = document.getElementById('total-withdraw')
        const previousWithdrawText = getWithdraw.innerText;
        const previousWithdrawAmount = parseFloat(previousWithdrawText);
        const totalWithdraw = newWithdrawAmount + previousWithdrawAmount;
        getWithdraw.innerText = totalWithdraw;


        // decreasing available balance


        const previousBalance = document.getElementById("balance-total");
        const previousBalanceText = previousBalance.innerText;
        const previousBalanceAmount = parseFloat(previousBalanceText);
        const totalBalance = previousBalanceAmount - totalWithdraw;
        previousBalance.innerText = totalBalance;
        withdarwInput.value = '';
    }

})