window.onload = function () {
  var inputField = document.getElementById("input");
  var result = document.getElementById("result");
  var showResult = document.getElementById("input-result");
  var numberBtn = document.querySelectorAll('.numbers div, .operators div');
  var i, inputValue;
  for (i = 0; i < numberBtn.length; i++) {
    if (numberBtn) {
      numberBtn[i].addEventListener('click', function () {
        inputField.textContent += this.textContent;
        inputValue = inputField.textContent;
        if (this.textContent === 'C') {
          inputField.textContent = '';
          inputValue = '';
          showResult.textContent = '';
          inputField.classList.remove('showing-input')
        }
      })
    }
  }
  if (result) {
    result.addEventListener('click', function () {
      try {
        showResult.textContent = eval(inputValue);
        inputField.classList.add('showing-input')
        showResult.classList.remove('syntax-error');
      } catch (error) {
        showResult.classList.add('syntax-error');
        showResult.textContent = error.message
      }
    })
  }
}