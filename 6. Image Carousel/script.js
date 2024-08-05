let index = 0;

show_image(index);

function show_image(i){
    index += i;

    let images = document.getElementsByClassName("image");
    let dots = document.getElementsByClassName("dot");
    
    for(let i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }

    for(let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", ""); //This loop removes the " active" class from all dots.
        //AlsoWhen the code dots[index].className += " active"; executes, it appends " active" to the current class name of the dot at the specified index. 
        //The space ensures that "active" is added as a separate class and not concatenated with the existing class names. For example:
        //This ensures that only one dot will be highlighted at a time. By replacing "active" with an empty string, it effectively removes the active class if it exists.;
    }

    if(index > images.length - 1){
        index = 0
    }

    if(index < 0){
        index = images.length - 1;
    }

    images[index].style.display = "block"; //This line sets the display property of the image at the current index to "block", 
    //making it visible. In CSS, display: block is used to display an element as a block-level element, which means it will take up the full width available
    //and start on a new line.;
    dots[index].className += " active"; //After determining which image should be shown (based on the index variable),
    //this line adds the " active" class to the corresponding dot. The += operator appends the " active" class to the current class list of that dot, which highlights it.
}