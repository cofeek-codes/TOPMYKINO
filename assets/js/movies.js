let checkboxFantasy = document.getElementById("thing1")
let checkboxCartoon = document.getElementById("thing2")
let checkboxComedy = document.getElementById("thing3")
let checkboxHorror = document.getElementById("thing4")
let checkboxDrama = document.getElementById("thing5")

function searchMovie() {
	let sortMovies = document.getElementById('sortMovies').selectedIndex
	switch (sortMovies) {
		case 0:
			movies = movies.sort(function (moviesI, moviesJ) {
				if (moviesI.populars > moviesJ.populars) return 1
				if (moviesI.populars < moviesJ.populars) return -1
				return 0
			})
			break
		case 1:
			movies = movies.sort(function (moviesI, moviesJ) {
				if (moviesI.views > moviesJ.views) return 1
				if (moviesI.views < moviesJ.views) return -1
				return 0
			}).reverse()
			break
		case 2:
			movies = movies.sort(function (moviesI, moviesJ) {
				if (moviesI.rating > moviesJ.rating) return 1
				if (moviesI.rating < moviesJ.rating) return -1
				return 0
			}).reverse()
			break
	}
	const searchMovie = document.getElementById('inputSearchMovie')
	let searchMovies = []
	let numberResult = 1
	let numberArticle = 1
	let colorRating
	let thisrating
	for (let i = 0; i < movies.length; i++) {
		let str = movies[i].name.toLowerCase()
		if (str.includes(searchMovie.value.toLowerCase())) {
			if (movies[i].rating >= 6.66) {
				colorRating = 'green'
			}
			else if (movies[i].rating >= 3.33) {
				colorRating = '#FF8C20'
			}
			else {
				colorRating = 'red'
			}
			if (movies[i].rating % 1 == 0) {
				thisrating = movies[i].rating + ".0";
			}
			else {
				thisrating = movies[i].rating;
			}

			if (checkboxFantasy.checked == false && checkboxCartoon.checked == false && checkboxComedy.checked == false && checkboxHorror.checked == false && checkboxDrama.checked == false) {
				searchMovies[i] = `<div class="article article${numberArticle} res${numberResult}"><a class='movieresult res-${movies[i].id}' href='./thismovie.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${movies[i].src}" title="${movies[i].name}" alt="${movies[i].name}"></a></div>`
				numberResult++
				numberArticle++
			}
			else if (checkboxFantasy.checked == true && checkboxCartoon.checked == true && checkboxComedy.checked == true && checkboxHorror.checked == true && checkboxDrama.checked == true) {
				searchMovies[i] = `<div class="article article${numberArticle} res${numberResult}"><a class='movieresult res-${movies[i].id}' href='./thismovie.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${movies[i].src}" title="${movies[i].name}" alt="${movies[i].name}"></a></div>`
				numberResult++
				numberArticle++
			}
			else {
				genresArray = movies[i].genres.split(" ")
				for (let j = 0; j < genresArray.length; j++) {
					if (checkboxFantasy.checked) {
						if (checkboxFantasy.value == genresArray[j]) {
							searchMovies[i] = `<div class="article article${numberArticle} res${numberResult}"><a class='movieresult res-${movies[i].id}' href='./thismovie.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${movies[i].src}" title="${movies[i].name}" alt="${movies[i].name}"></a></div>`
							numberResult++
							numberArticle++
							break;
						}
					}
					if (checkboxCartoon.checked) {
						if (checkboxCartoon.value == genresArray[j]) {
							searchMovies[i] = `<div class="article article${numberArticle} res${numberResult}"><a class='movieresult res-${movies[i].id}' href='./thismovie.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${movies[i].src}" title="${movies[i].name}" alt="${movies[i].name}"></a></div>`
							numberResult++
							numberArticle++
							break;
						}
					}
					if (checkboxComedy.checked) {
						if (checkboxComedy.value == genresArray[j]) {
							searchMovies[i] = `<div class="article article${numberArticle} res${numberResult}"><a class='movieresult res-${movies[i].id}' href='./thismovie.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${movies[i].src}" title="${movies[i].name}" alt="${movies[i].name}"></a></div>`
							numberResult++
							numberArticle++
							break;
						}
					}
					if (checkboxHorror.checked) {
						if (checkboxHorror.value == genresArray[j]) {
							searchMovies[i] = `<div class="article article${numberArticle} res${numberResult}"><a class='movieresult res-${movies[i].id}' href='./thismovie.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${movies[i].src}" title="${movies[i].name}" alt="${movies[i].name}"></a></div>`
							numberResult++
							numberArticle++
							break;
						}
					}
					if (checkboxDrama.checked) {
						if (checkboxDrama.value == genresArray[j]) {
							searchMovies[i] = `<div class="article article${numberArticle} res${numberResult}"><a class='movieresult res-${movies[i].id}' href='./thismovie.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${movies[i].src}" title="${movies[i].name}" alt="${movies[i].name}"></a></div>`
							numberResult++
							numberArticle++
							break;
						}
					}
				}
			}
		}
		if (numberArticle == 5) numberArticle = 1
	}
	if (searchMovies.length != 0) {
		document.getElementById('archive').innerHTML = searchMovies.join('')
		document.getElementById('notFound').innerHTML = ''
		localStorage.removeItem("linkSelect")
		document.querySelectorAll(".movieresult").forEach((link) => {
			link.addEventListener("click", function () {
				localStorage.setItem("linkSelect", this.className.split(" ")[1].split("-")[1])
			})
		})

	}
	else {
		document.getElementById('archive').innerHTML = ""
		document.getElementById('notFound').innerHTML = 'Странно, но здесь ничего нет'
	}
} $(document).ready(function () {
	$(".selectGenres").click(function () {
		$(".listGenres").slideToggle("slow", function () {
		})
	})
})
document.querySelector("#thing1").addEventListener('change', () => searchMovie())
document.querySelector("#thing2").addEventListener('change', () => searchMovie())
document.querySelector("#thing3").addEventListener('change', () => searchMovie())
document.querySelector("#thing4").addEventListener('change', () => searchMovie())
document.querySelector("#thing5").addEventListener('change', () => searchMovie())
document.addEventListener('DOMContentLoaded', () => { searchMovie() })