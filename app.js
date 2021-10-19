const currentImage = document.querySelector("#image");

const images = ["images/Bread.jpg", "images/Lehed.jpg", "images/Lumi.jpg"];

function changeImage() {
    
    let randomNumber = Math.floor(Math.random() * images.length);
    console.log(randomNumber);
    currentImage.src = images[randomNumber];
}