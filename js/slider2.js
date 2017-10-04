document.getElementById('leftbutton2').onclick = sliderLeft;
var left2 = 0;

function sliderLeft(){
	var polosa2 = document.getElementById('polosa2');
	left2 = left2 - 600;
	if (left2 <= -1800) {
		left2 = 0;
	}
	polosa2.style.left = left2 +'px';
}