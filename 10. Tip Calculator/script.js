const amount = document.getElementById('amount');
const guests = document.getElementById('guests');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');

function calculate(){
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
    amount.value = '';
    guests.value = '';
    quality.value = '';
    if(isNaN(tip)){
        tipAmount.innerHTML = 'Tip $0 each';
    } else {
        tipAmount.innerHTML = 'Tip $' + tip + ' each';
    }
    showTipAmount();
}

function showTipAmount(){
    tipAmount.className = 'show'; 
    setTimeout(function(){
        tipAmount.className = tipAmount.className.replace('show', '')
    }, 2000);
};