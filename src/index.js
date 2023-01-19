let ramenMenu = document.querySelector("#ramen-menu")
let ramenDetail = document.querySelector("#ramen-detail")

let ramenImg = document.querySelector(".detail-image")
let ramenName = document.querySelector(".name")
let ramenRestaurant = document.querySelector(".restaurant")
let ramenRating = document.querySelector("#rating-display")
let ramenComment = document.querySelector("#comment-display")
let newForm = document.querySelector("#new-ramen")
let editForm = document.querySelector("#edit-ramen")


newForm.addEventListener("submit", (event) => {
    event.preventDefault()
    postNewRamen(event.target)

})

editForm.addEventListener("submit", (event) => {
    event.preventDefault()
    ramenRating.innerHTML = event.target.querySelector("#new-rating").value
    ramenComment.innerHTML = event.target.querySelector("#new-comment").value
    editForm.reset()
    
})



// get ramen
function fetchRamen(id=1) {
    fetch(`http://localhost:3000/ramens/${id}`)
    .then(response => response.json())
    .then(ramem => {
        ramenImg.src = ramem.image
        ramenName.textContent = ramem.name
        ramenRestaurant.textContent = ramem.restaurant
        ramenRating.textContent = ramem.rating
        ramenComment.textContent = ramem.comment
    })
}


function postNewRamen(newObj) {
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
    .then(newRamen => {
        // load new ramen to ramenDetail container when being created
        fetchRamen(newRamen.id)
        renderRamen(newRamen)
    })
    newForm.reset() //
}


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


function getALLRamen() {
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramenData => ramenData.forEach(ramen => renderRamen(ramen)))
    fetchRamen()
}

getALLRamen()
