window.onload = inic; //Esto es para decirle al sistema que hasta que no se cargue el DOM no ejecute la función inic

var tableBody;
var posicion;


function inic ()   {

		tableBody = document.querySelector("#tableContactBody");

}


function buildTable() {

	var empresa, direccion, representante, telefono, web, entidadJur, accionBoton;

	empresa = document.getElementById("idEmpresa").value;
	direccion = document.getElementById("idDireccion").value;
	representante = document.getElementById("idRepresentante").value;
	telefono = document.getElementById("idTelefono").value;
	web = document.getElementById("idWeb").value;
	entidadJur = document.getElementById("idEntidadJur").value;

	addLineToHTMLTable(empresa, direccion, representante, telefono, web, entidadJur);
 
    limpiarForm();

    alert("Proveedor registrado correctamente");

}


function addLineToHTMLTable(nombreEmp, direccion, nombreRep, telefono, pWeb, entidadJur) {
  
     var newRow   = tableBody.insertRow();

     var nombreEmpCell  = newRow.insertCell();
     nombreEmpCell.innerHTML = nombreEmp;
    
     var direccionCell  = newRow.insertCell();
     direccionCell.innerHTML = direccion;

     var nombreRepCell  = newRow.insertCell();
    nombreRepCell.innerHTML = nombreRep;

     var telefonoCell  = newRow.insertCell();
     telefonoCell.innerHTML = telefono;

     var pWebCell  = newRow.insertCell();
     pWebCell.innerHTML = pWeb;

     var entidadJurCell  = newRow.insertCell();
     entidadJurCell.innerHTML = entidadJur;

     var botonBorrarCell = newRow.insertCell();
     botonBorrarCell.innerHTML = '<button id="botonBorrar" onclick="borrarFila(this);">Borrar</button>';

     var botonEditarCell = newRow.insertCell();
     botonEditarCell.innerHTML = '<button id="botonEditar" onclick="editarFila(this);">Editar</button>';

}


function borrarFila(filaABorrar){

	if (confirm("¿Está seguro de que quiere borrar los datos de este proveedor?")){

		posicion = filaABorrar.parentNode.parentNode.rowIndex;

		document.getElementById("tablaProveedores").deleteRow(posicion);

		alert("Proveedor borrado correctamente");

	}

}


function editarFila(filaAEditar){

	posicion = filaAEditar.parentNode.parentNode.rowIndex;

	document.getElementById("idEmpresa").value = document.getElementById("tablaProveedores").rows[posicion].cells[0].innerHTML;
	document.getElementById("idDireccion").value = document.getElementById("tablaProveedores").rows[posicion].cells[1].innerHTML;
	document.getElementById("idRepresentante").value = document.getElementById("tablaProveedores").rows[posicion].cells[2].innerHTML;
	document.getElementById("idTelefono").value = document.getElementById("tablaProveedores").rows[posicion].cells[3].innerHTML;
	document.getElementById("idWeb").value = document.getElementById("tablaProveedores").rows[posicion].cells[4].innerHTML;
	document.getElementById("idEntidadJur").value = document.getElementById("tablaProveedores").rows[posicion].cells[5].innerHTML;

	document.getElementById("botonRegistrar").hidden=true;
	document.getElementById("botonGuardarCambios").hidden=false;
	document.getElementById("botonCancelar").hidden=false;

}


function guardarCambiosEdicion(){

	document.getElementById("tablaProveedores").rows[posicion].cells[0].innerHTML = document.getElementById("idEmpresa").value;
	document.getElementById("tablaProveedores").rows[posicion].cells[1].innerHTML = document.getElementById("idDireccion").value;
	document.getElementById("tablaProveedores").rows[posicion].cells[2].innerHTML = document.getElementById("idRepresentante").value;
	document.getElementById("tablaProveedores").rows[posicion].cells[3].innerHTML = document.getElementById("idTelefono").value;
	document.getElementById("tablaProveedores").rows[posicion].cells[4].innerHTML = document.getElementById("idWeb").value;
	document.getElementById("tablaProveedores").rows[posicion].cells[5].innerHTML = document.getElementById("idEntidadJur").value;

	document.getElementById("botonRegistrar").hidden=false;
	document.getElementById("botonGuardarCambios").hidden=true;
	document.getElementById("botonCancelar").hidden=true;

	limpiarForm();

	alert("Proveedor modificado correctamente");

}


function cancelarEdicion(){

	document.getElementById("botonRegistrar").hidden=false;
	document.getElementById("botonGuardarCambios").hidden=true;
	document.getElementById("botonCancelar").hidden=true;

	limpiarForm();

}


function limpiarForm(){

	document.getElementById("idEmpresa").value = "";
	document.getElementById("idDireccion").value = "";
	document.getElementById("idRepresentante").value = "";
	document.getElementById("idTelefono").value = "";
	document.getElementById("idWeb").value = "";
	document.getElementById("idEntidadJur").value = "Sociedad Anónima";

}