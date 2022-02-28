console.log("Test")
const ham = document.getElementById('ham-menu-div');
const nav = document.getElementById('nav-menu');

//Responsive Menu

ham.addEventListener('click', function (e) {
    nav.classList.toggle('-left-[100vw]')
    nav.classList.toggle('left-0')
    nav.classList.toggle('transition-all')
})

//NAv Menu Links

const nav_li = document.querySelectorAll('.nav-li>a');
console.log(nav_li)

for (let index = 0; index < nav_li.length; index++) {
    const element = nav_li[index];
    element.addEventListener('click', function (e) {
        nav.classList.toggle('-left-[100vw]')
        nav.classList.toggle('left-0')
        nav.classList.toggle('transition-all')
    })
}