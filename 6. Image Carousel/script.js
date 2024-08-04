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
        //This ensures that only one dot will be highlighted at a time. By replacing "active" with an empty string, it effectively removes the active class if it exists.;
    }

    if(index > images.length - 1){
        index = 0
    }

    if(index < 0){
        index = images.length - 1;
    }

    images[index].style.display = "block";
    dots[index].className += " active"; //After determining which image should be shown (based on the index variable),
    //this line adds the " active" class to the corresponding dot. The += operator appends the " active" class to the current class list of that dot, which highlights it.
}