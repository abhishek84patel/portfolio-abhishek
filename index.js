const menu = document.querySelector(".nav");
const btnCv = document.querySelector(".btn-cv")
function showMenu() {
    const ar = arguments[0]
    ar.classList.toggle("fixed")
    menu.classList.toggle("active");



}
btnCv.addEventListener("click", () => {
    const cv = "resume/abhishek_resume.pdf";

    let link = document.createElement("a");
    link.download = "Abhsihek_Patel_Resume";
    link.href = cv;
    link.click();

})
// let downloadfile = () => {
//     let f = document.getElementById("file").click();
// };

