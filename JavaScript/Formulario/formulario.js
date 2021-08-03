(function () {
	var formulario = document.getElementById("formulario"),
		nombre = formulario.nombre,
		correo = formulario.correo,
		sexo = formulario.sexo,
		terminos = formulario.terminos,
		error = document.getElementById("error");

	function validarNombre(e) {
		// Validar nombre vacío
		if (nombre.value == "" || nombre.value == null) {
			console.log("Ingresa tu nombre.");
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el nombre.</li>'
			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarCorreo(e) {
		// Validar correo vacío
		if (correo.value == "" || correo.value == null) {
			console.log("Ingresa tu correo.");
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor ingresa tu correo.</li>'
			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}
	function validarSexo(e) {
		// Validar sexo vacío
		if (sexo.value == "" || sexo.value == null) {
			console.log("Ingresa tu sexo.");
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor indica tu sexo.</li>'
			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}
	function validarTerminos(e) {
		// Validar terminos
		if (terminos.checked == false) {
			console.log("Acepta los términos.");
			error.style.display = 'block';
			error.innerHTML += '<li>Acepta los términos y condiciones.</li>'
			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}
	function validarFormulario(e) {
		error.innerHTML = '';
		validarNombre(e);
		validarCorreo(e);
		validarSexo(e);
		validarTerminos(e);
	}

	formulario.addEventListener("submit", validarFormulario);


}())
