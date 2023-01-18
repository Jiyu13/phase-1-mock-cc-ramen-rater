// write your code here
fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramenData => ramenData.forEach(ramen => renderRamen(ramen)))

let ramenMenu = document.querySelector("#ramen-menu")
let ramenDetail = document.querySelector("#ramen-detail")
let ramenImg = document.querySelector("#detail-image")
let ramenName = ramenDetail.querySelector(".name")
let ramenRestaurant = ramenDetail.querySelector(".restaurent")
let ramenRating = document.querySelector("#rating-display")
let ramenComment = document.querySelector("#comment-display")


// ramenName.innerHTML = ramen.name
// ramenRestaurant.innerHTML = ramen.restaurant
// ramenRating.innerHTML = ramen.rating
// ramenComment.innerHTML = ramen.comment

function renderRamen(ramen) {
    let img = document.createElement("img")
    img.src = ramen.image
    console.log(img)
    console.log(img.src)
    ramenMenu.append(img)

}