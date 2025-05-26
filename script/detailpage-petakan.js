const storedData = JSON.parse(sessionStorage.getItem("selectedData"));
document.getElementById("detail-title").textContent = storedData.title;
document.getElementById("detail-image").src = storedData.image;


const imagesRuangan = {
    "5A" : [
        "../image/Я же психолог, а не копирайтер.jpg",
        "../image/Я же психолог, а не копирайтер.jpg",
        "../image/Я же психолог, а не копирайтер.jpg"
    ],
    "5B" : [
        "../image/roberto-nickson-FqHU6aeVwf8-unsplash.jpg",
        "../image/roberto-nickson-FqHU6aeVwf8-unsplash.jpg",
        "../image/roberto-nickson-FqHU6aeVwf8-unsplash.jpg"
    ]
};

const buttons = document.querySelectorAll(".filter-button button");
const imgs = document.querySelectorAll(".detail-img-control");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    
    const room = button.dataset.room;
    const images = imagesRuangan[room];

    if (images) {
      imgs.forEach((img, i) => {
        img.src = images[i] || "";
      });
    }
  });
});