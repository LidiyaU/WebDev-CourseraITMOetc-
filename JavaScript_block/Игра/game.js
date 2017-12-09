 var numSquares = 6;
 var colors = [];
 var pickedColor = pickColor();

 var squares = document.querySelectorAll(".square");
 var colorDisplay = document.getElementById("colorDisplay");
 var messageDisplay = document.querySelector("#message");
 var h1 = document.querySelector("h1");
 var resetButton = document.querySelector("#reset");
 var modeButtons = document.querySelectorAll(".mode");

 init();

 function init(){
 	//режим кнопок
 	setupModeButtons();
 	setupSquares();
 	reset();
 }

function setupModeButtons() {
 	for(var i = 0; i < modeButtons.length; i++){
	 	modeButtons[i].addEventListener("click", function(){
	 		modeButtons[0].classList.remove("selected");
	 		modeButtons[1].classList.remove("selected");
	 		this.classList.add("selected");
	 		this.textContent === "Легкая" ? numSquares = 3: numSquares = 6;
	 		reset();
	 });
 	}
 }

 function setupSquares() {
 	for (var i = 0; i < squares.length; i++) {
 	// click listeners to squares
	 	squares[i].addEventListener("click", function(){
	 		var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
	 			messageDisplay.textContent = ("Правильно!");
	 			resetButton.textContent = "Сыграем еще раз?";
	 			changeColors(clickedColor);
	 			h1.style.background = clickedColor;
	 		} else {
	 			this.style.background = "#232323";
	 			messageDisplay.textContent = "Попробуйте еще раз";
	 		}
 		});
 	}
 }

 
 function reset() {
 	colors = generateRandomColors(numSquares);
 	//pвыбор нового цвета из массива
 	pickedColor = pickColor();
 	//смена фона на выбранный цвет
 	colorDisplay.textContent = pickedColor;
 	resetButton.textContent = "Новые цвета";
 	messageDisplay.textContent = "";
 	//смена всех квадратиков на выбранный цвет
 	for(var i = 0; i < squares.length; i++){
 		if(colors[i]) {
 			squares[i].style.display = "block";
 			squares[i].style.background = colors[i];
 		} else {
 			squares[i].style.display = "none";
 		}
 	}
 	h1.style.background = "#6B3FA0";
 }

 resetButton.addEventListener("click", function(){
 	reset();
 })
 

 function changeColors(color){ 
 	for (var i = 0; i < squares.length; i++){
 		squares[i].style.background = color;	
 	}
 }

 function pickColor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }

//массив - сбор сгенерированных цветов
 function generateRandomColors(num){
 	var arr = []
 	for(var i = 0; i < num; i++){
 	arr.push(randomColor())
 	}
 	return arr;
 }
//генерация цветов
 function randomColor(){
 	var r = Math.floor(Math.random() * 256);
 	var g = Math.floor(Math.random() * 256);
 	var b = Math.floor(Math.random() * 256);
 	return "rgb(" + r + ", " + g + ", " + b + ")";
 }