document.getElementByClassName('bikescontainer').getElementByClassName('slidebutton').addEventListener('click',slideleft);
	let left = 0;
	function slideleft() {
		var polosa[] = document.getElementByClassName('slider').getElementByClassName('polosa');
		left = left - 600;
	if (left <= -1800) {
		left = 0;
	}
	polosa[].style.left = left +'px';
}







// function addEventListenerByClass(className, event, fn) {
//     var list = document.getElementsByClassName(className);
//     for (var i = 0, len = list.length; i < len; i++) {
//         list[i].addEventListener(event, fn, false);
//     }
// }




// document.getElementsByClassName('slidebutton').onclick = slideleft;
// var left1 = 0;
// function slideleft(){
// 	var polosa = document.getElementsByClassName('polosa');
// 	left1 = left1 - 600;
// 	if (left1 <= -1800) {
// 		left1 = 0;
// 	}
// 	polosa.style.left = left1 +'px';
// }

// document.getElementById('leftbutton2').onclick = sliderLeft2;
// var left2 = 0;

// function sliderLeft2(){
// 	var polosa2 = document.getElementById('polosa2');
// 	left2 = left2 - 600;
// 	if (left2 <= -1800) {
// 		left2 = 0;
// 	}
// // 	polosa2.style.left = left2 +'px';
// }