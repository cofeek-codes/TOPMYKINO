let favourites = [
    { id: 2, type: 'movie', name: 'Главный герой', populars: 3, views: 2800000, rating: 8, src: 'maingeroi.jpg' },
    { id: 3, type: 'movie', name: 'Angry Birds 2', populars: 4, views: 4000000, rating: 7.4, src: 'angrybirds2.png' },
    { id: 4, type: 'movie', name: 'Ёлки 5', populars: 6, views: 1500000, rating: 6, src: 'elki5.png' },
    { id: 6, type: 'movie', name: 'Зверопой 2', populars: 7, views: 850000, rating: 8.3, src: 'sing2.jpg' },
    { id: 7, type: 'movie', name: 'Я Легенда', populars: 8, views: 950000, rating: 7.9, src: 'IAmLegend.jpg' },
    { id: 8, type: 'movie', name: 'Кунг Фу Панда 4', populars: 9, views: 2000000, rating: 6.7, src: 'KyngFuPanda4(3_4).jpg' },
    { id: 10, type: 'movie', name: 'Чебурашка', populars: 11, views: 5000000, rating: 7.3, src: 'Cheburaska.jpg' },
    { id: 11, type: 'serial', name: 'Кибердеревня', populars: 1, views: 1000000, rating: 8.1, src: 'CyberVillage.webp' },
    { id: 13, type: 'serial', name: 'Слово пацана. Кровь на асфальте', populars: 3, views: 7000000, rating: 8.3, src: `Boy'sWord.jpg` },
    { id: 15, type: 'serial', name: 'Мандалордец', populars: 5, views: 5000000, rating: 3.2, src: 'Mandalorian.jpg' },
    { id: 19, type: 'serial', name: 'Гравити Фолз', populars: 9, views: 0, rating: 9.0, src: 'GravityFalls.jpg' },
    { id: 20, type: 'serial', name: 'Чернобыль', populars: 10, views: 0, rating: 8.8, src: 'Chernobyl.jpg' },]
function searchFavourites() {
    let searchFavouritesArray = []
    let numberResult = 1
    let numberArticle = 1
    let colorRating
    let thisrating
    for (let i = 0; i < favourites.length; i++) {
        if (favourites[i].rating >= 6.66) {
            colorRating = 'green'
        }
        else if (favourites[i].rating >= 3.33) {
            colorRating = '#FF8C20'
        }
        else {
            colorRating = 'red'
        }
        if (favourites[i].rating % 1 == 0) {
            thisrating = favourites[i].rating + ".0";
        }
        else {
            thisrating = favourites[i].rating;
        }


        if (favourites[i].type == 'movie') {
            searchFavouritesArray[i] = `<div class="article article${numberArticle} res${numberResult}"><a class='movieresult res-${favourites[i].id}' href='./thisMovie.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${favourites[i].src}" title="${favourites[i].name}" alt="${favourites[i].name}"></a></div>`
        }
        else {
            searchFavouritesArray[i] = `<div class="article article${numberArticle} res${numberResult}"><a class='movieresult res-${favourites[i].id}' href='./thisSerial.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${favourites[i].src}" title="${favourites[i].name}" alt="${favourites[i].name}"></a></div>`
        }
        numberResult++
        numberArticle++
        if (numberArticle == 5) numberArticle = 1
    }
    if (searchFavouritesArray.length != 0) {
        document.getElementById('archive').innerHTML = searchFavouritesArray.join('')
        document.getElementById('notFound').innerHTML = ''
    }
    else {
        document.getElementById('archive').innerHTML = ""
        document.getElementById('notFound').innerHTML = 'Странно, но здесь ничего нет'
    }
}