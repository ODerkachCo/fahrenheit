var output = document.getElementById('demo'),
	textInput = document.querySelector('[type="text"]'),
	farBtn = document.querySelector('[type="button"]');


farBtn.addEventListener('click', getCelsius);
function getCelsius() {
	var celsius = parseInt(textInput.value);
	if(!celsius) {
		alert('Введіть число!');
	} else if(celsius) {
		output.innerText = '';
		var fahrenheit = celsius * 1.8 + 32;
		output.insertAdjacentText('afterbegin', Math.round(fahrenheit * 10 ) / 10);	
	} 	
}


