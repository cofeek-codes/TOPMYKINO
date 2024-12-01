function changeSize(element) {
    element.style.height = "auto";
    element.style.height = (element.scrollHeight) + "px";
  }
  let textarea = document.querySelector('.inputSupport');
  
  textarea.addEventListener('input', function () {
    changeSize(this);
  });
  
  textarea.addEventListener('change', function () {
    changeSize(this);
  });
  
  textarea.addEventListener('keydown', function () {
    changeSize(this);
  });