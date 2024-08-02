let count = 0;

function changeCount(num, operation){
    if (operation == 'multiply') {
        count *= 2;
    } else if (operation == 'divide') {
            count /= 2;
    } else if (operation == 'clear') {
        count = 0;
    } else {
        count += num;
    }
    document.getElementById("count").innerHTML = count;
}