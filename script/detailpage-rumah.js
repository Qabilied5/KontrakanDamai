const storedData = JSON.parse(sessionStorage.getItem("selectedData"));
document.getElementById("detail-title").textContent = storedData.title;
document.getElementById("detail-image").src = storedData.image;

const imagesRumah = [
    "../image/rumah-satuan/rumah-satuan-front-view.jpg",
    "../image/rumah-satuan/parkiran-rumah-satuan-full.jpg",
    "../image/rumah-satuan/pagar-rumah-satuan.jpg",
    "../image/rumah-satuan/pintu-depan-rumah-satuan.jpg",
    "../image/rumah-satuan/depan-tangga-rumah-satuan.jpg",
    "../image/rumah-satuan/tampak-dari-tanggan-rumah-satuan.jpg",
    "../image/rumah-satuan/lantai2-rumah-satuan-tangga.png",
    "../image/rumah-satuan/lantai2-rumah-satuan.jpg",
    "../image/rumah-satuan/lantai2-rumah-satuan-2.jpg",
    "../image/rumah-satuan/balkon-rumah-satuan.jpg"
];

const gambarElements = document.querySelectorAll('.detail-img-control');

imagesRumah.forEach((src, index) => {
    if (gambarElements[index]) {
        gambarElements[index].src = src;
    }
});
