// key event
document.addEventListener("keydown", function(event){
    console.log(`key ${event.key} was pressed`);
    console.log(`ASCII code of the pressed key is ${event.keyCode}`);
    console.log(`Using 'which' property ${event.which}`);
});

// class toggle example
let btnpressme = document.querySelector("button.btnpressme");
btnpressme.addEventListener("click", function(e){
    if (e.target.textContent === "PRESS ME") {
        e.target.textContent = "Button was pressed!";
    } else {
        e.target.textContent = "PRESS ME";
    }
    e.target.classList.toggle("btnactive");
});

// PREVENT DEFAULT EXAMPLE
let linkqcc = document.querySelector(".linkqcc");
linkqcc.addEventListener('click', function(event){
    event.preventDefault();
    alert("website out of service");
});

// MODAL WINDOW
let modalwindow = document.querySelector(".modalwindow");
let closemodalx = document.querySelector(".closemodalx");
let btnpromotion = document.querySelector(".btnpromotion");
closemodalx.addEventListener("click", function(){
    modalwindow.style.display = "none";
});
btnpromotion.addEventListener("click", function(){
    modalwindow.style.display = "none";
});
