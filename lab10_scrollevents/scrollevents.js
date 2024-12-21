// SCROLL TO RIGHT
// collect elements
let content = document.querySelector(".content")
let btnscrollright = document.querySelector(".btnscrollright")

btnscrollright.addEventListener("scroll", function(){
    window.scrollBy(100,0)
})

// SCROLLABLE IMAGE GALLERY
// collect left and right buttons, and gallery container
let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")
let gallerycontainer = document.querySelector(".gallerycontainer")

// define one function for scroll left and scroll right
function scrollgallery(scrollpixels){
    gallerycontainer.scrollBy({
        left:scrollpixels,
        behavior: "smooth"
    })
}

// add event to each button when is clicked
btnright.addEventListener("click", function(){
    scrollgallery(1000)
})

btnleft.addEventListener("click", function(){
    scrollgallery(-500)
})

// TO TOP SCROLL
// collect to icon
let toTop = document.querySelector(".toTop")

// add scroll event to thewindow (internet browser)
window.addEventListener("scroll", function(){
    let pixelsfromtop = this.window.scrollY // get the pexels
    //test window/scrolly
    console.log(pexelsfromtop)

    if (pexelsfromtop>300){
        toTop.style.display = "block"


    }

    else{
        toTop
    }
})