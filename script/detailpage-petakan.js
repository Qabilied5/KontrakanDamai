const storedData = JSON.parse(sessionStorage.getItem("selectedData"));
document.getElementById("detail-title").textContent = storedData.title;
document.getElementById("detail-image").src = storedData.image;


const imagesRuangan = {
    "5A" : [
        "../image/no-images-images.png"
    ],
    "5B" : [
        "../image/5b/FRONT VIEW.jpg",
        "../image/5b/VIEW DOOR FROM INSIDE.jpg",
        "../image/roberto-nickson-FqHU6aeVwf8-unsplash.jpg"
    ],
    "5C" : [
        "../image/no-images-images.png"
    ],
    "5D" : [
        "../image/no-images-images.png"
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

      if(room === "5A"){
        document.getElementById("no-images-info").innerHTML = "Pemilik belum mengupload gambar"
      }else if(room === "5B"){
        document.getElementById("no-images-info").innerHTML = "FOTO RUANGAN " + room
      }
    }else{
      document.getElementById("no-images-info").innerHTML = "Foto belum diupload pemilik"
    }
  });
});