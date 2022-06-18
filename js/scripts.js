document.getElementById("outer3").addEventListener("click", toggleState3);
    
function toggleState3() {
  let galleryView = document.getElementById("galleryView")
  let tilesView = document.getElementById("tilesView")
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";
     
    for (let i = 0; i < imgObject.length - 1; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background =  "url(" + imgObject[i] + ")";
      tileItem.style.backgroundSize = "cover";  
      tilesContainer.appendChild(tileItem);      
    }
  };
}

let imgObject = [
  "./assests/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg",
  "./assests/brooke-lark-oGCF9yywFCM-unsplash.jpg",
  "./assests/mariana-medvedeva-fk6IiypMWss-unsplash.jpg",
  "./assests/henry-be-5PRQsEGkE10-unsplash.jpg",
  "./assests/tobias-reich-hI6Rz4N8vBI-unsplash.jpg",
  "./assests/monika-grabkowska-ayiC5NMcMhU-unsplash.jpg",
  "./assests/food-photographer-jennifer-pallian-gw78G_i7GYo-unsplash.jpg",
  "./assests/nathan-dumlao-zTZRZV86GhE-unsplash.jpg",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";
  mainView.style.backgroundSize = 'cover'

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ")";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ")";
  
  let linkTag = document.getElementById("linkTag")
  linkTag.href = imgObject[mainImg];

};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();


// Top fade in
const observerLeft = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    console.log(entry)
    const square = entry.target.querySelector('#bookingImg'); // Rename this
    const circle = entry.target.querySelector('#bookingText'); // Rename this
    

    if (entry.isIntersecting) {
      square.classList.add('square-animation-left');
      circle.classList.add('square-animation-right');

      
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('square-animation-left');
    circle.classList.remove('square-animation-right');
  });
});

observerLeft.observe(document.querySelector('.square'));

// Mid Fade In
const observerRight = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    const square = entry.target.querySelector('#middleText'); // Rename this
    const circle = entry.target.querySelector('#galleryView'); // Rename this
    

    if (entry.isIntersecting) {
      square.classList.add('square-animation-left');
      circle.classList.add('square-animation-right');

      
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('square-animation-left');
    circle.classList.remove('square-animation-right');
  });
});

observerRight.observe(document.querySelector('.mid'));



// Reviews Opac
const observerReview = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    const square = entry.target.querySelector('#reviews'); // Rename this
    
    

    if (entry.isIntersecting) {
      square.classList.add('opac-reviews-all');

      
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('opac-reviews-all');
  });
});

observerReview.observe(document.querySelector('#reviewOpac'));

// Contact fade

const contactFade = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    console.log(entry)
    const square = entry.target.querySelector('.contact-left'); // Rename this
    const circle = entry.target.querySelector('#contact'); // Rename this
    

    if (entry.isIntersecting) {
      square.classList.add('square-animation-left');
      circle.classList.add('square-animation-right');

      
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('square-animation-left');
    circle.classList.remove('square-animation-right');
  });
});

contactFade.observe(document.querySelector('#contact-layout'));