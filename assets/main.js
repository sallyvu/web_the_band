const buyBtns = document.querySelectorAll(".place-buy-btn")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector('.modal-close')
const modalContainer = document.querySelector(".modal-container")
//function to open the buy ticket panel
function showBuyTicket() {
    modal.classList.add("open")
}
//function to close the buy ticket panel
function hideBuyTicket(){
    modal.classList.remove('open')
}
// open the the buy ticket panel at each buy button
for (button of buyBtns) {
    button.addEventListener("click",showBuyTicket)
}
//close the buy ticket panel
closeBtn.addEventListener("click",hideBuyTicket)

//close the buy ticket panel when click outside the panel
modal.addEventListener('click', hideBuyTicket)

//stop propagation when click inside the panel
modalContainer.addEventListener('click', (event)=> {
    event.stopPropagation()
})

// Responsive for phone
// Hide and show the menu bar
const menuBtn = document.querySelector("#menu-btn")
const header = document.querySelector("#header")
const headerHeight = header.clientHeight

function hideAndShowMenu() {
    let isClosed = header.clientHeight === headerHeight
    if(isClosed) {
        header.style.height = "auto"
    }
    else {
        header.style.height = "46px"
}
    }

    //ternary operator
    // header.style.height = isClosed === true?"auto":"46px"


menuBtn.addEventListener("click", hideAndShowMenu)

//Hide the menu bar when a navigation is clicked
function hideMenu() {
    header.style.height = "46px"
}
const navList = document.querySelectorAll("#nav li a")

console.log(navList)

for (const nav of navList) {
    let isParentMenu = nav.nextElementSibling && nav.nextElementSibling.classList.contains("subnav")
    if(isParentMenu) {
        nav.addEventListener("click",(event) => 
        event.preventDefault())
    }
    else{
        nav.addEventListener("click",hideMenu)  
    }
}






