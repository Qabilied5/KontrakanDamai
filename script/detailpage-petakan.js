const storedData = JSON.parse(sessionStorage.getItem("selectedData"));
document.getElementById("detail-title").textContent = storedData.title;

const imagesRuangan = {
  "5A": [
    "../image/PETAKAN-VIEW.jpg",
    "../image/5a/WhatsApp Image 2025-05-29 at 22.40.54 (2).jpeg",
    "../image/5anew/IMG_1793.jpg",
    "../image/5anew/IMG_1796.jpg",
    "../image/5anew/IMG_1799.jpg",
    "../image/5a/WhatsApp Image 2025-05-29 at 23.04.36.jpeg",
    "../image/5anew/IMG_1806.jpg  ",
    "../image/WhatsApp Image 2025-05-29 at 23.08.27.jpeg",
    "../image/WhatsApp Image 2025-05-29 at 23.40.38.jpeg",
    "../image/WhatsApp Image 2025-05-29 at 23.42.47.jpeg",
  ],
  "5B": [
    "../image/5b/FRONT VIEW.jpg",
    "../image/5b/VIEW DOOR FROM INSIDE.jpg",
    "../image/5b/5B KONTRAKAN.jpeg",
  ],
  "5C": [
  "../image/5c/WhatsApp Image 2025-06-27 at 11.43.23.jpeg",
  "../image/5c/WhatsApp Image 2025-06-27 at 11.43.15.jpeg",
  "../image/5c/WhatsApp Image 2025-06-27 at 11.43.15 (1).jpeg"
  ],
  "5D": [
    "../image/pintukamarmandi.jpeg"
    // "../image/no-images-images.png",
    // "../image/5d/viewdepan 5d.jpeg",
    // "../image/5d/WhatsApp Image 2025-06-27 at 11.43.13.jpeg",
    // "../image/5d/WhatsApp Image 2025-06-27 at 11.43.13 (1).jpeg",
    // "../image/5d/WhatsApp Image 2025-06-27 at 11.43.14.jpeg",
    // "../image/5d/WhatsApp Image 2025-06-27 at 11.43.14 (1).jpeg"
  ],
};

const videoRuangan = {
  "5A": ["../image/5anew/video 5a.mp4"],
  "5C": ["../image/5c/video 5c.mp4"],
  "5D": ["../image/5d/video5d.mp4"]
};

const buttons = document.querySelectorAll(".filter-button button");
const imgs = document.querySelectorAll(".detail-img-control");
const videoEl = document.getElementById("detail-video");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const room = button.dataset.room;
    const images = imagesRuangan[room];

    if (images) {
      imgs.forEach((img, i) => {
        if (images[i]) {
          img.src = images[i];
          img.style.display = "block";
        } else {
          img.style.display = "none";
        }
      });
    }

    if (videoRuangan[room]) {
      videoEl.src = videoRuangan[room];
      videoEl.style.display = "block";
    } else {
      videoEl.src = "";
      videoEl.style.display = "none";
    }

  });
});
