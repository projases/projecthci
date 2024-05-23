import "./expMenu.css"

export function expMenu(parentElement){
    const expMenu = document.createElement("div")
    expMenu.style.display = "none";
    expMenu.classList.add("expMenu")

    expMenu.innerHTML = `
            <a href="#">Subject</a>
            <a href="#">Courses</a>
            <a href="#">Degrees</a>
        `

    parentElement.appendChild(expMenu)

    // const expMenuClose = expMenu.querySelector(".dropdown-content")
    // expMenuClose.addEventListener("click", () => {
    //     expMenu.style.display = "none"
    // })

}
