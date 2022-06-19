// ***********************************************************************
// Gallery
// ***********************************************************************

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
      tileItem.style.background = "url(" + imgObject[i] + ")";
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
  if (nextImg >= (imgObject.length - 1)) {
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
document.addEventListener('keyup', function (e) {
  if (e.keyCode === 37) {
    scrollLeft();
  } else if (e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();




// ************************************************************
// Booking Section Fade In
// ************************************************************

const observerLeft = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    console.log(entry)
    const left = entry.target.querySelector('#bookingImg');
    const right = entry.target.querySelector('#bookingText');
    if (entry.isIntersecting) {
      left.classList.add('square-animation-left');
      right.classList.add('square-animation-right');

      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    left.classList.remove('square-animation-left');
    right.classList.remove('square-animation-right');
  });
});

observerLeft.observe(document.querySelector('.bookingFade'));

// ************************************************************
// Gallery/Middle Section Fade in
// ************************************************************

const observerRight = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    const left = entry.target.querySelector('#middleText');
    const right = entry.target.querySelector('#galleryView');
    if (entry.isIntersecting) {
      left.classList.add('square-animation-left');
      right.classList.add('square-animation-right');

      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    left.classList.remove('square-animation-left');
    right.classList.remove('square-animation-right');
  });
});

observerRight.observe(document.querySelector('.galleryFade'));

// *************************************************************
// Reviews Section Fade in
// *************************************************************

const observerReview = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    const reviewSec = entry.target.querySelector('#reviews');
    if (entry.isIntersecting) {
      reviewSec.classList.add('opac-reviews-all');

      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    reviewSec.classList.remove('opac-reviews-all');
  });
});

observerReview.observe(document.querySelector('#reviewOpac'));

// ************************************************************
// Contact section fade in
// ************************************************************

const contactFade = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    console.log(entry)
    const left = entry.target.querySelector('.contact-left'); 
    const right = entry.target.querySelector('#contact'); 
    if (entry.isIntersecting) {
      left.classList.add('square-animation-left');
      right.classList.add('square-animation-right');

      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    left.classList.remove('square-animation-left');
    right.classList.remove('square-animation-right');
  });
});

contactFade.observe(document.querySelector('#contact-layout'));