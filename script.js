

function myFunction() {
	
var x = document.getElementsByTagName("h3");
var y = document.getElementsByTagName("h4");
var z = document.getElementById("selector_barre")
var i;
var n;
for (i = 0 ; i < x.length ; i++) {
	for (n = 0 ; n < y.length ; n++){

	if (x[i].style.display === "none") {
		x[i].style.display = "block";
		y[i].style.display = "none";
		z.style.justifyContent = "flex-end";

	} else {
		x[i].style.display = "none";
		y[i].style.display = "block";
		z.style.justifyContent = "flex-start";
	}
}
}

};

