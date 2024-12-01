window.onload = function() {
    if (!localStorage.getItem('start')) {
        // Пользователь 1 раз на сайте
        let startBlack = document.createElement('div')
        startBlack.classList.add('start-black')
        document.querySelector('.animation').appendChild(startBlack)

        let startButton = document.createElement('div')
        startButton.classList.add('start-button')
        document.querySelector('.animation').appendChild(startButton)

        let img = document.createElement('img')
        img.width = '100'
        img.src = './assets/img/pusk1.svg'
        startButton.appendChild(img)

        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './assets/css/indexanimation.css';
        document.getElementsByTagName('HEAD')[0].appendChild(link);
    }
    else {
        // Пользователь уже не в 1 раз на сайте
        const anim = document.getElementById('animation')
        anim.style.display = 'none'
    }
    localStorage.setItem('start', 1); // Добавление
    // localStorage.removeItem('start') // Удаление
}
