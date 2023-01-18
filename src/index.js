// write your code here
let ramenMenu = document.querySelector("#ramen-menu")
let ramenDetail = document.querySelector("#ramen-detail")

let ramenImg = document.querySelector(".detail-image")
let ramenName = ramenDetail.querySelector(".name")
let ramenRestaurant = ramenDetail.querySelector(".restaurant")
let ramenRating = document.querySelector("#rating-display")
let ramenComment = document.querySelector("#comment-display")

function getALLRamen() {
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramenData => ramenData.forEach(ramen => renderRamens(ramen)))
}
getALLRamen()


function renderRamens(ramen) {
    let img = document.createElement("img")
    img.src = ramen.image
    img.id = ramen.id
    img.addEventListener("click", () => {
        ramenImg.src = ramen.image
        ramenName.innerHTML = ramen.name
        ramenRestaurant.innerHTML = ramen.restaurant
        ramenRating.innerHTML = ramen.rating
        ramenComment.innerHTML = ramen.comment
    })
    ramenMenu.append(img)
}



