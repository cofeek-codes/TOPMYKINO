let form = document.querySelector('form')
document.querySelector('form').addEventListener("submit", (event) => {
    event.preventDefault()
    if (document.querySelector('.inputEmail').value.split('@')[0].length >= 4) {
        if (document.querySelector('.inputPassword').value != "") {
            if (document.title == 'TOPMYKINO - Регистрация') {
                if (document.querySelector('.inputPassword').value == document.querySelector('.inputPasswordDouble').value) {
                    localStorage.setItem('auth', true)
                    localStorage.setItem('login', document.querySelector('.inputEmail').value.split('@')[0])
                    localStorage.setItem('email', document.querySelector('.inputEmail').value)
                    var date = new Date();
                    let mounth
                    let day
                    if (Number(date.getMonth() + 1) < 10) {
                        mounth = '0' + Number(date.getMonth() + 1)
                    }
                    else {
                        mounth = Number(date.getMonth() + 1)
                    }
                    if (Number(date.getDate() + 1) < 10) {
                        day = '0' + date.getDate()
                    }
                    else {
                        day = date.getDate()
                    }
                    localStorage.setItem('datereg', day + '.' + mounth + '.' + date.getFullYear())
                    form.submit()
                }
                else {
                    alert('Пароли не совпадают')
                }
            }
            else {
                localStorage.setItem('auth', true)
                localStorage.setItem('login', document.querySelector('.inputEmail').value.split('@')[0])
                localStorage.setItem('email', document.querySelector('.inputEmail').value)
                var date = new Date();
                let mounth
                let day
                if (Number(date.getMonth() + 1) < 10) {
                    mounth = '0' + Number(date.getMonth() + 1)
                }
                else {
                    mounth = Number(date.getMonth() + 1)
                }
                if (Number(date.getDate() + 1) < 10) {
                    day = '0' + date.getDate()
                }
                else {
                    day = date.getDate()
                }
                localStorage.setItem('datereg', day + '.' + mounth + '.' + date.getFullYear())
                form.submit()
            }
        }
        else {
            alert("Поле пароля не может быть пустым")
        }
    }
    else {
        alert("Название email должно быть не меньше 4 символов")
    }
})

