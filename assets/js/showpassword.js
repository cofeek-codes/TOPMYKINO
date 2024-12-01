function show_hide_password() {
	var input = document.getElementById('password')
	if (input.getAttribute('type') == 'password') {
		input.setAttribute('type', 'text')
	} else {
		input.setAttribute('type', 'password')
	}
}
function show_hide_password2() {
	var input = document.getElementById('password2')
	if (input.getAttribute('type') == 'password') {
		input.setAttribute('type', 'text')
	} else {
		input.setAttribute('type', 'password')
	}
}
