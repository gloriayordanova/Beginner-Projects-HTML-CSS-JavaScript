// const amount = document.getElementById('amount');
// const guests = document.getElementById('guests');
// const quality = document.getElementById('quality');
// const tipAmount = document.getElementById('tip-amount');

// // calculate = () => {

// // }

// // this is same as 
// // function calculate(){

// // }

// calculate = () => {
//     const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
//     amount.value = '';
//     guests.value = '';
//     quality.value = '';
//     if(tip == 'NaN'){
//         tipAmount.innerHTML = 'Tio $0 each';
//         showTipAmount();
//     } else {
//         tipAmount.innerHTML = 'Tip $' + tip + ' each';
//         showTipAmount();
//     }
// }

// showTipAmount = () =>{
//     let x = tipAmount;
//     x.className = 'show'; //look at style.css for show
//     setTimeout(function(){x.className = x.className.replace('show', '');}, 3000);
// };