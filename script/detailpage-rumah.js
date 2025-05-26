const storedData = JSON.parse(sessionStorage.getItem("selectedData"));
document.getElementById("detail-title").textContent = storedData.title;
document.getElementById("detail-image").src = storedData.image;

const imagesRumah = [
    "../image/Я же психолог, а не копирайтер.jpg",
    "../image/Я же психолог, а не копирайтер.jpg",
    "../image/Я же психолог, а не копирайтер.jpg"
];

const gambarElements = document.querySelectorAll('.detail-img-control');

imagesRumah.forEach((src, index) => {
    if (gambarElements[index]) {
        gambarElements[index].src = src;
    }
});
