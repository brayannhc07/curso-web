$(document).ready(() => {
	$('#ejecutar').on('click', () => {
		$('.caja').animate({
			marginLeft: '500px'
		}, 5000);
		$('.caja').animate({
			marginLeft: '0px'
		}, 5000);
	});
	$('#parar').on('click', () => {
		// .stop(limpiarAnimaciones, saltarAlFinal);
		$('.caja').stop(false, true);
	});
});