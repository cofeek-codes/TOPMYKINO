$(document).ready(function () {
    localStorage.removeItem("linkSelect")
    document.querySelectorAll(".serialresult").forEach((link) => {
        link.addEventListener("click", function () {
            localStorage.setItem("linkSelect", this.className.split(" ")[1].split("-")[1])
        })
    })
})
