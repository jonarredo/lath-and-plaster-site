// slideshow.js

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); // returns an array of all the elements with className mySlides
  var dots = document.getElementsByClassName("demo"); // returns array of all the elements in row.columns / have alt names
  var captionText = document.getElementById("caption"); // grabs caption div to change the text in it

  if (n > slides.length) {
      // n can not be greater than the size of the list of photos
      // if the size is greater, that means you have reached end of 
      // list, reset
      slideIndex = 1;
    }

  if (n < 1) {
      // list goes from 1- n
      // cannot have negative photos,
      // go to end of list which is the list length
      slideIndex = slides.length;
    }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // make all elements with class mySlides invisible
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    // active just makes the photo hazy, opacity is at .8
  }

  slides[slideIndex-1].style.display = "block"; // displays the photo 
  dots[slideIndex-1].className += " active";    // makes the photo in the column not hazy
  captionText.innerHTML = dots[slideIndex-1].alt;   // adds alt from caption to captionText element
}