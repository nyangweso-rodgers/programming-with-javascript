// the images will be changed using 'Next' and 'Prev' buttons

// define our sample images in an array
var images = ["image_1.jpg", "image_2.jpg", "image_3.jpg", "image_4.jpg", "image_5.jpg"];

var num = 0;

function next() {
    var slider = document.getElementById('Slider');
    num++;

    if (num >= images.length) {
        num = 5;
    }
    slider.src = images[num];
};
// the num variable holds the current image.
// the next and preious button clicks are handled gy their corresponding functions, which change the source of the image to next/previous image in the array