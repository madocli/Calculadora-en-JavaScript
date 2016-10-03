//Validar que solo se acepten números

function soloNumeros(e){

	key=e.keyCode || e.which; //get the Unicode value
	teclado=String.fromCharCode(key); //convert the value into a character
	numeros="0123456789";
	especiales="8-37-39-46"; //tecla space, tecla izq, tecla derecha y backspace para que tengan su funcionalidad en la calculadora.
	tecla_especial=false;

	for(var i in especiales){
		if (key==especiales[i]) {
			tecla_especial=true;
		}
	}
	if(numeros.indexOff(teclado)==-1 && !tecla_especial){ /*Comprobamos que lo que se ha tecleado está dentro del rango de números.
		si no se encuentra el valor especificado y tampoco está dentro de tecla_especial, entonces nos devolverá el valor como false.*/
		return false;

	}

}

//Para asignar cada valor

function retornar(num){
	var anterior=document.form.valores.value;
	document.getElementById("valores").value=anterior+num;
}

//Para eliminar el último carácter (<-)
function eliminar(){
	var anterior=document.form.valores.value;
	var nuevovalor=anterior.substring(0,anterior.length-1);
	document.getElementById("valores").value=nuevovalor;
}

//Para eliminar todos los valores
function eliminarTodo(){
	document.form.valores.value="";
}

//Para realizar las operaciones matemáticas
function calcular(){
	var resultado=eval(document.form.valores.value);
	document.form.valores.value=resultado;
}

//Para validar los signos
function comprobar(num){
	var anterior=document.form.valores.value;
	if (anterior=="") {
		document.form.valores.value="";
	}else{
		var anterior=document.form.valores.value;
		document.getElementById("valores").value=anterior+num;
		esto=document.form.valores.value;

		record=0;
		igual=1;
		var letraRecord
		var b=0
		var letra=""

		for (var a = 1; a<esto.length; a++) {
			if (esto.charAt(a)=="+" || esto.charAt(a)=="-" || esto.charAt(a)=="*" || esto.charAt(a)=="/") {
				/*Restringimos que solo haya UN único signo más, menos, multiplicación o división.*/
				igual=igual+1;
				letra=esto.charAt(a);
			}else{
				if (igual>record) {record=igual;letraRecord=letra}
				igual=1;
			}
			b=a;
		}
		if (igual<record) {
			record=igual;
			letraRecord=letra;
		}
		if (record>2) {
			var anterior=esto;
			var nuevovalor=anterior.substring(0,anterior.length-1);
			document.getElementById("valores").value=nuevovalor;
			record=0; b=0; igual=1; letra=""; letraRecord="";
		}


	}
}
