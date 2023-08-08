const menu = document.getElementById("nav");
const m_icon = document.getElementById("m-img");

// it is called normal and anynomus function
function showMenu() {
    const ar = arguments[0]
    ar.classList.toggle("fixed")
    menu.classList.toggle("show");



}
// its a arrow function
let downloadfile = () => {
    let f = document.getElementById("file").click();
};
