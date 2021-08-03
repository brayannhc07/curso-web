$(document).ready(() => {
	var titulo = $('#titulo');
	var info = $('#info');

	// console.log(titulo.width());
	// ancho del contendio
	info.append('Ancho: ' + titulo.width() + "<br/>");
	// Ancho del contenido + padding
	info.append('Ancho Interno: ' + titulo.innerWidth() + "<br/>");
	// Ancho del contenido + padding + border
	info.append('Ancho Externo: ' + titulo.outerWidth() + "<br/>");
	// Ancho del contenido + padding + border + margin
	info.append('Ancho Externo: ' + titulo.outerWidth(true) + "<br/>");

	// -------- Height

	// Alto del contenido
	info.append('Alto: ' + titulo.height() + "<br/>");
	// Alto del contenido + padding 
	info.append('Alto Interno: ' + titulo.innerHeight() + "<br/>");
	// Alto del contenido + padding + border 
	info.append('Alto Externo: ' + titulo.outerHeight() + "<br/>");
	// Alto del contenido + padding + border + margin
	info.append('Alto Externo: ' + titulo.outerHeight(true) + "<br/>");
});