const storedData = JSON.parse(sessionStorage.getItem("selectedData"));
document.getElementById("detail-title").textContent = storedData.title;
document.getElementById("detail-image").src = storedData.image;


const imagesRuangan = {
    "5A" : [
        "../image/PETAKAN-VIEW.jpg",
        "../image/5a/WhatsApp Image 2025-05-29 at 22.40.54 (2).jpeg",
        "../image/5a/WhatsApp Image 2025-05-29 at 23.07.41.jpeg",
        "../image/5a/WhatsApp Image 2025-05-29 at 22.51.30.jpeg",
        "../image/5a/WhatsApp Image 2025-05-29 at 22.40.52.jpeg",
        "../image/5a/WhatsApp Image 2025-05-29 at 22.40.55.jpeg",
        "../image/WhatsApp Image 2025-05-29 at 22.56.54.jpeg",
        "../image/5a/WhatsApp Image 2025-05-29 at 23.04.36.jpeg",
        "../image/5a/WhatsApp Image 2025-05-29 at 23.08.27.jpeg",
        "../image/WhatsApp Image 2025-05-29 at 23.08.27.jpeg",
        "../image/WhatsApp Image 2025-05-29 at 23.07.42.jpeg",
        "../image/WhatsApp Image 2025-05-29 at 23.37.06.jpeg", 
        "../image/WhatsApp Image 2025-05-29 at 23.40.38.jpeg",
        "../image/WhatsApp Image 2025-05-29 at 23.42.47.jpeg"
    ],
    "5B" : [
        "../image/5b/FRONT VIEW.jpg",
        "../image/5b/VIEW DOOR FROM INSIDE.jpg",
        "../image/5b/5B KONTRAKAN.jpeg"
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
    }else{
      document.getElementById("no-images-info").innerHTML = "Foto belum diupload pemilik"
    }
    document.getElementById("no-images-info").innerHTML = "FOTO RUANGAN " + room
  });
});