

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});


AOS.init()



// GALLERY JS

var lightboxContainer = document.getElementById("lightbox-container");
var lightboxImage = document.getElementById("lightbox-image");
var closeButton = document.querySelector(".close");
var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");
var images = document.querySelectorAll(".img-fluid");
var currentImageIndex = 0;

// Function to update the lightbox image with the current image
function updateLightboxImage() {
lightboxImage.src = images[currentImageIndex].src;
}

// Function to show the next image in the lightbox
function showNextImage() {
currentImageIndex++;
if (currentImageIndex >= images.length) {
currentImageIndex = 0;
}
updateLightboxImage();
}

// Function to show the previous image in the lightbox
function showPrevImage() {
currentImageIndex--;
if (currentImageIndex < 0) {
currentImageIndex = images.length - 1;
}
updateLightboxImage();
}

// Add event listeners for next and previous buttons
nextButton.addEventListener("click", function () {
showNextImage();
});

prevButton.addEventListener("click", function () {
showPrevImage();
});

// Add event listener for each image
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function (event) {
    event.preventDefault();

    currentImageIndex = Array.from(images).indexOf(this);

    // Show the lightbox container
    lightboxContainer.style.display = "flex";

    // Set the lightbox image source to the clicked image's source
    updateLightboxImage();
  });
}

// Add event listener for close button
closeButton.addEventListener("click", function () {
  // Hide the lightbox container
  lightboxContainer.style.display = "none";
});

document.getElementById('appointmentbutton').addEventListener('click', function() {
  fbq('track', 'Lead');
});
