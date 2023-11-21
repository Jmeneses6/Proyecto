const control = document.getElementById("slider");
const image = document.querySelectorAll(".slide");
const prev = document.getElementById("prev-button");
const next = document.querySelector("#next-button");
const imageButton = document.getElementById("image-name");

let amount = 0;

function showSlide(index) {
    image.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });

    prev.disabled = index === 0;
    next.disabled = index === image.length - 1;

    const currentImage = image[index].querySelector("img");
    const imageName = currentImage.getAttribute("alt");

    imageButton.textContent = imageName;
}

function prevSlide() {
    if (amount > 0) {
        amount--;
        showSlide(amount);
    }
}

function nextSlide() {
    if (amount < image.length - 1) {
        amount++;
        showSlide(amount);
    }
}

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

showSlide(amount);

