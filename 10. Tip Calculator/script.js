const amount = document.getElementById('amount');
const guests = document.getElementById('guests');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');
const waiters = document.getElementById('waiters');
const tipWaitersAmount = document.getElementById('tip-waiters-amount');

function calculate(){
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
    if(isNaN(tip)){
        tipAmount.innerHTML = 'Tip $0 each';
    } else {
        tipAmount.innerHTML = 'Tip $' + tip + ' each';
    }
    showTipAmount();
}

function calculateWaiters(){
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
    const tipPerWaiter = Math.floor((tip / waiters.value) * 100) / 100;
    if(isNaN(tipPerWaiter)){
        tipWaitersAmount.innerHTML = 'Tip $0 based on Waiter';
    } else {
        tipWaitersAmount.innerHTML = 'Tip $' + tipPerWaiter + ' for each Waiter';
    }
    showTipAmountperWaiter();
}


function showTipAmount(){
    tipAmount.className = 'show'; 
    setTimeout(function(){
        tipAmount.className = tipAmount.className.replace('show', '')
    }, 3500);
};

function showTipAmountperWaiter(){
    tipWaitersAmount.className = 'show2';
    setTimeout(function(){
        tipWaitersAmount.className = tipWaitersAmount.className.replace('show2', '')
    }, 3500)
}