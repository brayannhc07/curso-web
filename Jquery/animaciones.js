$(document).ready(() => {

	// $(selector).animate({parámetros}, velocidad, callback);

	$('#boton').on('click', function () {
		$('#caja').animate({
			// width: '300px',
			// opacity: '0.2'
			// width: '+=300px'
			// marginLeft: '20px'
			marginLeft: '+=50px'
		}, 300, function () {
			// alert("Fin animación");
		});

		// $('.caja').addClass('animacion');
		// $('.caja').toggleClass('animacion');
		$('#caja').animate({
			marginLeft: '-=50px'
		}, 300);
	});
});