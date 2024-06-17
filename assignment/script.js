

const movieImages = [
    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4LDAE5xnLp-5esFozydIRN7fV69WdD7kWhg&s

    
   
];


const slideshowImage = document.getElementById('slideshow-image');


let currentIndex = 0
function updateImage() {
    slideshowImage.src = movieImages[currentIndex];
    currentIndex = (currentIndex + 1) % movieImages.length;
}


updateImage();


setInterval(updateImage, 2000);