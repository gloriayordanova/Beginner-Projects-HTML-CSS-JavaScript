function generate(){
    const quotes = {
        "- Confucius" : '"It does not matter how slowly you go as long as you do not stop."',
        "- Thomas A. Edison" : '"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."',
        "- Tony Robbins" : '"Setting goals is the first step in turning the invisible into the visible."',
        "- George Herbert" : '"Do not wait; the time will never be \'just right.\' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along."',
        "- Samuel Beckett" : '"Opportunity does not knock, it presents itself when you beat down the door."',
        "- Kyle Chandler" : '"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better."',
        "- St. Jerome" : '"Good, better, best. Never let it rest. \'Til your good is better and your better is best."',
        "- Aristotle" : '"Quality is not an act, it is a habit."'
    }

    const authors = Object.keys(quotes);

    const author = authors[Math.floor(Math.random() * authors.length)];

    const quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}

function clearContent(){
    document.getElementById("quote").innerHTML = "Hello World";
    document.getElementById("author").innerHTML = "Codeboxx";
}