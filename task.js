//task1
const items = document.querySelectorAll("li");
const images = document.querySelectorAll(".image");
let index;
let galeryOn = "false";
function toggleImage(item, image) {
  item[index].classList.toggle("full-image-container");
  image[index].classList.toggle("full-image");
}
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", (event) => {
    event.currentTarget.parentElement.classList.toggle("full-image-container");
    event.currentTarget.classList.toggle("full-image");
    index = i;
    galeryOn = true;
  });
}

window.addEventListener("keydown", (event) => {
  if (galeryOn === true) {
    if (event.code === "ArrowRight") {
      toggleImage(items, images);
      index = (index + 1) % images.length;
      toggleImage(items, images);
    }
    if (event.code === "ArrowLeft") {
      toggleImage(items, images);
      index = (index - 1 + images.length) % images.length;
      toggleImage(items, images);
    }
    if (event.code === "Escape") {
      toggleImage(items, images);
      galleryOn = false;
    }
  }
});
