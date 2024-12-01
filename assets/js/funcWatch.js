$(".btnWatch").click(() => {
    if (localStorage.getItem('auth') == "true") {
        if (localStorage.getItem('subscription') == "true") {
            alert("Функция смотреть фильм")
        }
        else {
            alert("Вам необходимо купить подписку")
        }
    }
    else {
        alert("Вам необходимо войти в профиль")
    }
})
