const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown", function(event) {
    if(event.key == "Enter") {
        getMessageUpperCase();
    }
});

function getMessageUpperCase() {
    document.getElementById("message-output-upper-case").innerHTML = messageInput.value;
    document.getElementById("message-output-lower-case").innerHTML = ""; 
    messageInput.value = '';
}

messageInput.addEventListener("keydown", function(event) {
    if(event.key == "Escape") {
        getMessageLowerCase();
    }
});

function getMessageLowerCase() {
    document.getElementById("message-output-lower-case").innerHTML = messageInput.value;
    document.getElementById("message-output-upper-case").innerHTML = ""; 
    messageInput.value = '';
}