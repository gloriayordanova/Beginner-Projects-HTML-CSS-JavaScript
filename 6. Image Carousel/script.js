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
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if(index > images.length - 1){
        index = 0;
    }

    if(index < 0){
        index = images.length - 1;
    }

    images[index].style.display = "block";
    dots[index].className += " active";
}

let index2 = 0;

show_imageFerrari(index2);

function show_imageFerrari(j){
    index2 += j;

    let images2 = document.getElementsByClassName("image2");
    let dots2 = document.getElementsByClassName("dot2");

    for(let j = 0; j < images2.length; j++){
        images2[j].style.display = "none";
    }

    for(let j = 0; j < dots2.length; j++){
        dots2[j].className = dots2[j].className.replace(" active2", "");
    }

    if(index2 > images2.length - 1){
        index2 = 0;
    }

    if(index2 < 0){
        index2 = images2.length - 1;
    }

    images2[index2].style.display = "block";
    dots2[index2].className += " active2";
}




// let index = 0;

// show_image(index);

// function show_image(i){
//     index += i;

//     let images = document.getElementsByClassName("image");
//     let dots = document.getElementsByClassName("dot");

//     for(let i = 0; i < images.length; i++){
//         images[i].style.display = "none";
//     }

//     for(let i = 0; i < dots.length; i++){
//         dots[i].className = dots[i].className.replace(" active", "");
//     }

//     if(index > images.length - 1){
//         index = 0;
//     }

//     if(index < 0){
//         index = images.length - 1;
//     }

//     images[index].style.display = "block";
//     dots[index].className += " active";
// }