$(document).ready(() => {
	var boton = $('#boton');
	// boton.click(() => {
	// 	alert('Hola');
	// });
	function saludo() {
		alert('Saludos');
	}
	// boton.click(saludo);
	// boton.on('click', saludo);
	// boton.on('mouseenter', () => {
	// 	document.body.style.background = '#000';
	// });
	// boton.on('mouseleave', () => {
	// 	document.body.style.background = '#fff';
	// });

	// boton.on('click', () => {
	// 	alert('saludos');
	// 	console.log('Saludos');
	// });

	// $('#desactivar').on('click', () => {
	// 	boton.off('click');
	// 	console.log("Boton de ejecutar desactivado");
	// });

	//  Prevenir comportamiento de los enlaces
	$('a').on('click', (e) => {
		e.preventDefualt();
	});

});