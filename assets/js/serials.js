let checkboxFantasy = document.getElementById("thing1")
let checkboxCartoon = document.getElementById("thing2")
let checkboxComedy = document.getElementById("thing3")
let checkboxHorror = document.getElementById("thing4")
let checkboxDrama = document.getElementById("thing5")

function searchSerial() {
	let sortSerials = document.getElementById('sortSerials').selectedIndex
	switch (sortSerials) {
		case 0:
			serials = serials.sort(function (serialsI, serialsJ) {
				if (serialsI.populars > serialsJ.populars) return 1
				if (serialsI.populars < serialsJ.populars) return -1
				return 0
			})
			break
		case 1:
			serials = serials.sort(function (serialsI, serialsJ) {
				if (serialsI.views > serialsJ.views) return 1
				if (serialsI.views < serialsJ.views) return -1
				return 0
			}).reverse()
			break
		case 2:
			serials = serials.sort(function (serialsI, serialsJ) {
				if (serialsI.rating > serialsJ.rating) return 1
				if (serialsI.rating < serialsJ.rating) return -1
				return 0
			}).reverse()
			break
	}
	const searchSerial = document.getElementById('inputSearchSerial')
	let searchSerials = []
	let numberResult = 1
	let numberArticle = 1
	let colorRating
	let thisrating
	for (let i = 0; i < serials.length; i++) {
		let str = serials[i].name.toLowerCase()
		if (str.includes(searchSerial.value.toLowerCase())) {
			if (serials[i].rating >= 6.66) {
				colorRating = 'green'
			}
			else if (serials[i].rating >= 3.33) {
				colorRating = '#FF8C20'
			}
			else {
				colorRating = 'red'
			}
			if (serials[i].rating % 1 == 0) {
				thisrating = serials[i].rating + ".0";
			}
			else {
				thisrating = serials[i].rating;
			}

			if (checkboxFantasy.checked == false && checkboxCartoon.checked == false && checkboxComedy.checked == false && checkboxHorror.checked == false && checkboxDrama.checked == false) {
				searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><a class="serialresult res-${serials[i].id}" href='./thisSerial.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}"></a></div>`
				numberResult++
				numberArticle++
			}
			else if (checkboxFantasy.checked == true && checkboxCartoon.checked == true && checkboxComedy.checked == true && checkboxHorror.checked == true && checkboxDrama.checked == true) {
				searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><a class="serialresult res-${serials[i].id}" href='./thisSerial.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}"></a></div>`
				numberResult++
				numberArticle++
			}
			else {
				genresArray = serials[i].genres.split(" ")
				for (let j = 0; j < genresArray.length; j++) {
					if (checkboxFantasy.checked) {
						if (checkboxFantasy.value == genresArray[j]) {
							searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><a class="serialresult res-${serials[i].id}" href='./thisSerial.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}"></a></div>`
							numberResult++
							numberArticle++
							break;
						}
					}
					if (checkboxCartoon.checked) {
						if (checkboxCartoon.value == genresArray[j]) {
							searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><a class="serialresult res-${serials[i].id}" href='./thisSerial.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}"></a></div>`
							numberResult++
							numberArticle++
							break;
						}
					}
					if (checkboxComedy.checked) {
						if (checkboxComedy.value == genresArray[j]) {
							searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><a class="serialresult res-${serials[i].id}" href='./thisSerial.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}"></a></div>`
							numberResult++
							numberArticle++
							break;
						}
					}
					if (checkboxHorror.checked) {
						if (checkboxHorror.value == genresArray[j]) {
							searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><a class="serialresult res-${serials[i].id}" href='./thisSerial.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}"></a></div>`
							numberResult++
							numberArticle++
							break;
						}
					}
					if (checkboxDrama.checked) {
						if (checkboxDrama.value == genresArray[j]) {
							searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><a class="serialresult res-${serials[i].id}" href='./thisSerial.html'><span style=background-color:${colorRating}>${thisrating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}"></a></div>`
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
	if (searchSerials.length != 0) {
		document.getElementById('archive').innerHTML = searchSerials.join('')
		document.getElementById('notFound').innerHTML = ''
		document.querySelectorAll(".serialresult").forEach((link) => {
			link.addEventListener("click", function () {
				localStorage.setItem("linkSelect", this.className.split(" ")[1].split("-")[1])
			})
		})
	}
	else {
		document.getElementById('archive').innerHTML = ""
		document.getElementById('notFound').innerHTML = 'Странно, но здесь ничего нет'
	}

}
$(document).ready(function () {
	$(".selectGenres").click(function () {
		$(".listGenres").slideToggle("slow", function () {
		})
	})
})
document.querySelector("#thing1").addEventListener('change', () => searchSerial())
document.querySelector("#thing2").addEventListener('change', () => searchSerial())
document.querySelector("#thing3").addEventListener('change', () => searchSerial())
document.querySelector("#thing4").addEventListener('change', () => searchSerial())
document.querySelector("#thing5").addEventListener('change', () => searchSerial())
document.addEventListener('DOMContentLoaded', () => {searchSerial()})