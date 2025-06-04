const kontrakanData = [
    {
    title: "| PETAKAN BULANAN 4 PINTU",
    type: "petakan",
    image: "../image/PETAKAN-VIEW.jpg"
  },
  {
    title: "| SEWA RUMAH TAHUNAN",
    type: "rumah",
    image: "../image/rumah-satuan/rumah-satuan-front-view.jpg"
  },
  {
    title: "| PARKIRAN PETAKAN",
    type: "parkiran",
    image: "../image/pexels-pixabay-358636.jpg"
  }
];

const container = document.getElementById("type-card-container");

kontrakanData.forEach(typeData => {

        const card = document.createElement("div");
        card.className = "type-card";
        card.innerHTML =
            `<div  class="sub-title">
                <h5>${typeData.title}</h5>
            </div>
    
            <div class="sub-image">
                <img class="sub-image-control" src="${typeData.image}" alt="${typeData.title}">
            </div>
            <button id="detail-button">LIHAT ISI</button>`;
            
        const imgBtn = card.querySelector("#detail-button");
            
        imgBtn.addEventListener("click", () => {
        const dataTemp = {
        title: typeData.title,
        image: typeData.image,
        type: typeData.type
        };

        sessionStorage.setItem("selectedData", JSON.stringify(dataTemp));

        if (typeData.type === "petakan") {
            targetPage = "../pages/detailkontrakan-petakan.html";
        } else if (typeData.type === "rumah") {
            targetPage = "../pages/detailkontrakan-rumah.html";
        } else if (typeData.type === "parkiran") {
            targetPage = "../pages/detailparkiran.html";
        }
        console.log(typeData.type);
        window.location.href = targetPage;
    });
    container.appendChild(card);
});
