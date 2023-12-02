let index = 1;
theslides(index);

// Function for controlling image
function currentslide(n) {
  theslides(index = n);
  }

// Function for the next and previous buttons
function buttons(n) {
theslides(index += n);
}


function theslides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow"); // apply code to html code under this class
  if (n > slides.length) {index = 1} // keep code valid
  if (n < 1) {index = slides.length} // 
  for (i = 0; i < slides.length; i++) { // loop through each image
    slides[i].style.display = "none";
  }
  
  slides[index-1].style.display = "block";
}