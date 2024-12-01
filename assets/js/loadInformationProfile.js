$('.btnLogOutProfile').click(() => {
    localStorage.removeItem('auth')
    localStorage.removeItem('login')
    localStorage.removeItem('email')
    localStorage.removeItem('datereg')
    localStorage.removeItem('subscription')
    let the_url = document.URL
    var the_arr = the_url.split('/')
    the_arr.pop()
    the_arr.pop()
    window.location.href = the_arr.join('/') + '/index.html'
  });
  $(document).ready(function () {
    $('.divProfile1_1_Name').html(localStorage.getItem('login'))
    $('.divProfile1_1_Email').html('E-mail: ' + localStorage.getItem('email'))
    $('.divProfile1_1_Reg').html('Регистрация: ' + localStorage.getItem('datereg'))
  })
