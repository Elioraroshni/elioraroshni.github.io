var quotes = ["Happiness does not come from doing easy work but from the afterglow of satisfaction that comes after the achievement of a difficult task that demanded our best.",
             "The problem is not that there are problems. The problem is expecting otherwise and thinking that having problems is a problem.",
             "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
             "Remember your dreams and fight for them. You must know what you want from life. There is just one thing that makes your dream become impossible: the fear of failure.",
             "Choosing to be positive and having a grateful attitude is going to determine how you're going to live your life.",
             "When you reach the end of your rope, tie a knot in it and hang on.",
             "Whatever the mind of man can conceive and believe, it can achieve. ",
             "Strive not to be a success, but rather to be of value.",
             "Life isn't about getting and having, it's about giving and being.",
             "Life is 10% what happens to me and 90% of how I react to it.",
             "Every child is an artist.  The problem is how to remain an artist once he grows up. "];
function generateCode() {
    var rand = Math.floor(Math.random() * quotes.length);
    return quotes[rand];
}
function cssChanger(family, bgColor, fontsize, border, fontColor) {
	document.getElementById("fortune").style.fontFamily = family;
	document.getElementById("fortune").style.backgroundColor = bgColor;
	document.getElementById("fortune").style.fontSize = fontsize;
	document.getElementById("fortune").style.borderColor = border;
	document.getElementById("fortune").style.color = fontColor;
}
function convertFunction() {
	var temp = document.getElementById("tempValue").value;
	var opt = document.getElementById("chooseConvert");
	var choice = opt.options[opt.selectedIndex].value;
	var answer;

	if(choice == "kgtolb") {
		answer = temp*2.2046;
		answer = answer + " pounds"
	}
	if(choice == "lbtokg") {
		answer = temp*0.454;
		answer = answer + " kilograms"
	}
	document.getElementById("output").innerHTML = answer;
}
function calculate() {
	var inputValue = document.getElementById("numIn").value;
	var numArray = inputValue.split(",");
	var sum = 0;
	var average = 0;
	if(inputValue != '') {
		for (var i = 0; i < numArray.length; i++) {
			numArray[i] = parseFloat(numArray[i]);
		}
		for (var i = 0; i < numArray.length; i++) {
			sum = sum + numArray[i];
		}
		average = sum/numArray.length;

		var max = Math.max(...numArray)
		var min = Math.min(...numArray)

		numArray.reverse();
		var reversedArray = numArray.join();

		if (!isNaN(sum)) {
			document.getElementById("max").innerHTML = "Max: " + max;
			document.getElementById("min").innerHTML = "Min: " + min;
            document.getElementById("sum").innerHTML = "Sum: " + sum;
            document.getElementById("average").innerHTML = "Average: " + average;
			document.getElementById("reverse").innerHTML = "Reverse Order: " + reversedArray;
        }
	}
}
function clearText() {
	document.getElementById("textInput").value = '';
	document.getElementById("case").value = "lower";
}
function capitalize() {
	var check = document.getElementById("case").value;
	var str = document.getElementById("textInput").value;

	if(check == "lower") {
		document.getElementById("textInput").value = str.toUpperCase();
		document.getElementById("case").value = "upper";
	}
	if(check == "upper") {
		document.getElementById("textInput").value = str.toLowerCase();
		document.getElementById("case").value = "lower";
	}
}
function sort() {
	var str = document.getElementById("textInput").value;
	var arr = str.split("\n");
	var sorted = arr.sort();
	document.getElementById("textInput").value= sorted.join("\n");
}
function reverse() {
	var str = document.getElementById("textInput").value;
	var arr = str.split("\n");
	for(i = 0; i < arr.length; i++){
		arr[i] = arr[i].split("").reverse().join("");
	}
	document.getElementById("textInput").value = arr.join("\n");
}
function strip() {
	var str = document.getElementById("textInput").value;
	var edit = str.replace(/^\s+|\s+$/gm, '');
	var arr = edit.split("\n");
	for(i = 0; i < arr.length; i++){
		arr[i] = arr[i].trim();
	}
	document.getElementById("textInput").value = arr.join('\n');
}
function addNumber() {
	var str = document.getElementById("textInput").value;
	var arr = str.split("\n");
	for(i = 1; i <= arr.length; i++){
		arr[i-1] = i + ". " + arr[i-1];
	}
	document.getElementById("textInput").value = arr.join("\n");
}
function shuffle() {
	var str = document.getElementById("textInput").value;
	var arr = str.split("\n");
	var temp;
    var rand;
    var size = arr.length;
	while (size !== 0) {
	    rand = Math.floor(Math.random() * size);
	    size -= 1;

	    temp = arr[size];
	    arr[size] = arr[rand];
	    arr[rand] = temp;
	}
	document.getElementById("textInput").value = arr.join("\n");
}
