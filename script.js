const img = document.getElementById("image");
const mediaQuery = window.matchMedia("(max-width: 810px)");

const updateImage = (e) => {
    if (e.matches) {
        img.src = "public/images/mobile_blank.png"
    }
    else {
        img.src = "public/images/web_blank.png"
    }
}

updateImage(mediaQuery);

mediaQuery.addEventListener("change", updateImage);

document.getElementById("login").addEventListener("click", () => {
    console.log("Hello world!");
});