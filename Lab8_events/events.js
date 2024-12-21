//select the element
let squarediv = document.querySelector('.square')
//add an event
squarediv.onclick = function(){
    squarediv.style.backgroundColor = "magenta"
}

// select the element
let btanimal = document.querySelector(".btanimal")
let animalsdiv = document.querySelector(".animalsdiv")

// list of animals
let animals = ['fish', 'dog', 'turtle', 'cat', 'spider']
// add event
btanimal.onclick = function(){
    animalsdiv.textContent = animals[Math.floor(Math.random()*5)]
}

// MOUSE EVENT
// Select the element
let numberdiv = document.querySelector(".numberdiv")
// add an event
numberdiv.onmouseout = function(){
    numberdiv.textContent = Math.ceil(Math.random()*99)
}
// function to randomly pick a number
function pickcolor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgb(${red}, ${green}, ${blue})`
}
//add a click event
numberdiv.onclick = function(){
    numberdiv.style.backgroundColor = pickcolor()
}

// EXERCISE 
//set counter
// Initialize a counter
let counter = 0;

// Select the circle and counter display elements
const circle = document.getElementById('circle');
const counterDisplay = document.getElementById('counterDisplay');

// Add an event listener to the circle for click (touch) events
circle.addEventListener('click', function() {
    counter++; // Increment the counter
    counterDisplay.textContent = counter; // Update the display
});
