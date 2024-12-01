$(document).ready(function () {
    let sub1 = document.querySelector(".sub-1")
    let sub2 = document.querySelector(".sub-2")
    let buttonbuy = document.querySelector(".buysub")
    buttonbuy.disabled = true

    sub1.addEventListener("click", selectSUB1)
    function selectSUB1() {
        if (!sub1.classList.contains("select-sub")) {
            sub1.style.border = "2px solid #FF5A24"
            sub2.style.border = "2px solid white"
            sub1.classList.add("select-sub")
            sub2.classList.remove("select-sub")
            buttonbuy.style.background = "linear-gradient(to right, #FF8C20, #FF5A24)"
            buttonbuy.disabled = null
        }
        else {
            sub1.classList.remove("select-sub")
            sub1.style.border = "2px solid white"
            buttonbuy.disabled = true
            buttonbuy.style.background = "gray"
        }
    }
    sub2.addEventListener("click", selectSUB2)
    function selectSUB2() {
        if (!sub2.classList.contains("select-sub")) {
            sub1.style.border = "2px solid white"
            sub2.style.border = "2px solid #FF5A24"
            sub1.classList.remove("select-sub")
            sub2.classList.add("select-sub")
            buttonbuy.style.background = "linear-gradient(to right, #FF8C20, #FF5A24)"
            buttonbuy.disabled = null
        }
        else {
            sub2.classList.remove("select-sub")
            sub2.style.border = "2px solid white"
            buttonbuy.disabled = true
            buttonbuy.style.background = "gray"
        }
    }
    buttonbuy.addEventListener("click", () => {
        if (sub1.classList.contains("select-sub")) {
            localStorage.setItem('subscription', true)
            location.reload()
        }
        if (sub2.classList.contains("select-sub")) {
            localStorage.setItem('subscription', true)
            location.reload()
        }
    })

})
