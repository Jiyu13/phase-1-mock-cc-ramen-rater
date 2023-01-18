// write your code here
let ramenMenu = document.querySelector("#ramen-menu")
let ramenDetail = document.querySelector("#ramen-detail")

let ramenImg = document.querySelector(".detail-image")
let ramenName = ramenDetail.querySelector(".name")
let ramenRestaurant = ramenDetail.querySelector(".restaurant")
let ramenRating = document.querySelector("#rating-display")
let ramenComment = document.querySelector("#comment-display")
let newForm = document.querySelector("#new-ramen")

newForm.addEventListener("submit", (event) => {
    event.preventDefault()
    postNewRamen(event.target)

})


function postNewRamen(newObj) {
    console.log(newObj)
    console.log(newObj['new-comment'])
    fetch("http://localhost:3000/ramens", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            "name": newObj.name.value,
            "restaurant": newObj.restaurant.value,
            "image": newObj.image.value,
            "rating": newObj.rating.value,
            "comment": newObj['new-comment'].value
        })
    })
    .then(response => response.json())
    .then(newRamen => renderRamen(newRamen))
}


function getALLRamen() {
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramenData => ramenData.forEach(ramen => renderRamen(ramen)))
}
getALLRamen()


function renderRamen(ramen) {
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





