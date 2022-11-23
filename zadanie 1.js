document.addEventListener('DOMContentLoaded', function() {
    let inputNumber1 = document.getElementById('input');
    let buttonN = document.getElementById('button');
    let divN = document.getElementById('div');
    let inputCoff = 0;
  
    function startTimer() {
      nIntervId = setInterval(onClick, 1000);
    };
  
    function onClick() {
      divN.textContent = inputNumber1.value - inputCoff;
      inputCoff += 1;
      console.log(divN.textContent)
  
      if (divN.textContent <= 0) {
        divN.textContent = 0;
        clearInterval(nIntervId);
      }
  
    };
  
    buttonN.addEventListener('click', startTimer);
  });

    function stop() {
	    window.clearInterval(window.timerId);
    }