document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft(){
	var polosa = document.getElementById('polosa');
	left = left - 128;
	if (left < -512) {
		left = 0;
	}
	polosa.style.left = left +'px';
}








    // $(function() {
    //     $('.smooth').on('click', function(event) {
    //         var target = $(this.getAttribute('href'));
    //         if (target.length) {
    //             event.preventDefault();
    //             $('html, body').stop().animate({
    //                 scrollTop: target.offset().top
    //             }, 1000);
    //         }
    //     });
    // });
