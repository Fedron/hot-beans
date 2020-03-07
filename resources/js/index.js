const slideshowItems = document.querySelectorAll(".slideshow-item");
const slideshowCount = document.querySelector(".slideshow-count");
let currentMaxIndex = 3;

const updateSlideshow = () => {
    slideshowItems.forEach((element) => {
        element.classList.add("hidden");
    });

    for (let i = currentMaxIndex - 3; i <= currentMaxIndex; i++) {
        slideshowItems[i].classList.remove("hidden");
    }

    slideshowCount.innerHTML = `${currentMaxIndex + 1} / ${slideshowItems.length}`
}

document.querySelector(".slideshow-left").addEventListener("click", () => {
    if (currentMaxIndex === 3) { return; }

    currentMaxIndex--;
    updateSlideshow();
});

document.querySelector(".slideshow-right").addEventListener("click", () => {
    if (currentMaxIndex === slideshowItems.length - 1) { return; }

    currentMaxIndex++;
    updateSlideshow();
});

updateSlideshow();