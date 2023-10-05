// JavaScript for the lightbox functionality
const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("close");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentImageIndex = 0;

// Function to display the current image
function showImage(index) {
  lightboxImage.src = galleryImages[index].src;
  currentImageIndex = index;
}

galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    lightbox.style.display = "block";
    showImage(index);
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

//   lightbox.addEventListener("click", () => {
//     lightbox.style.display = "none";
//   });

prevButton.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent the click event from bubbling up
  if (currentImageIndex > 0) {
    showImage(currentImageIndex - 1);
  }
});

nextButton.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent the click event from bubbling up
  if (currentImageIndex < galleryImages.length - 1) {
    showImage(currentImageIndex + 1);
  }
});