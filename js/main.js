const tabcontent = document.querySelectorAll('.tab-contents');
const tab = document.querySelectorAll('.tab');
const history = document.getElementById('history');
const vision = document.getElementById('vision');
const goals = document.getElementById('goals');
var myImage = document.querySelector('#image');

 //reset 
// function reset() {
//    tab.style.display = "none";
// }
history.addEventListener('click', ()=>{
    tab[0].style.display = "block";
    tab[1].style.display = "none";
    tab[2].style.display = "none";
    myImage.src = "img/history.jpg";
})
vision.addEventListener('click', ()=>{
    tab[0].style.display = "none";
    tab[1].style.display = "block";
    tab[2].style.display = "none";
    myImage.src = "img/vision.jpg";

})
goals.addEventListener('click', ()=>{
    tab[0].style.display = "none";
    tab[1].style.display = "none";
    tab[2].style.display = "block";
    myImage.src = "img/goals.jpg";

})
