const storedData = JSON.parse(sessionStorage.getItem("selectedData"));
document.getElementById("detail-title").textContent = storedData.title;

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

document.getElementById("hub-now").addEventListener("click", function(){
    window.open("https://wa.me/6287785597479?text=Halo%20saya%20tertarik%20dengan%20kontrakan%20di%20Wisma%20Damai", "_blank");
});
