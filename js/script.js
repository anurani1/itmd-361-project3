// W3 Slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(num) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0)
    return;
  let dots = document.getElementsByClassName("dot");
  if (num > slides.length) {slide = 1}    
  if (num < 1) {slide = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide-1].style.display = "block";  
  dots[slide-1].className += " active";
}