var str = prompt('введите три числа через запятую без пробела');
var arr = str.split(',');
var lowest = arr[0];
	
for (var i = 1 ; i < arr.length; i++) {
		if (lowest > arr[i]) {
			lowest = arr[i];
		}
}

alert(lowest);
