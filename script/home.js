const kontrakanData = [
    {
    title: "KONTRAKAN PETAKAN",
    image: "../image/pexels-pixabay-358636.jpg"
    },
    {
    title: "KONTRAKAN RUMAH",
    image: "../image/pexels-pixabay-358636.jpg"
    },
    {
    title: "PARKIRAN PETAKAN",
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
            </div>`;
            
            const imgBtn = card.querySelector(".sub-image");
            
        imgBtn.addEventListener("click", () => {
        const dataTemp = {
        title: typeData.title,
        image: typeData.image
        };

        sessionStorage.setItem("selectedData", JSON.stringify(dataTemp));

        window.location.href = "detailPage.html"
    });
    container.appendChild(card);
});
