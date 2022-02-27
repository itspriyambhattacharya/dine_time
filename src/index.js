console.log("Test")
const ham = document.getElementById('ham-menu-div');
const nav = document.getElementById('nav-menu');
ham.addEventListener('click' , function(e){
    nav.classList.toggle('-left-[100vw]')
    nav.classList.toggle('left-0')
    nav.classList.toggle('transition-all')
})