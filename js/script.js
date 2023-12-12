// W3 Slideshow

let slide = 1;
showSlides(slide);

function plusSlides(n) {
  showSlides(slide += n);
}

function currentSlide(n) {
  showSlides(slide = n);
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
    slides[i].styleIndex.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide-1].styleIndex.display = "block";  
  dots[slide-1].className += " active";
}