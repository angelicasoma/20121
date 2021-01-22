// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo de suma de dos números y mostrar el resultado
function suma() {
	var numero01, numero02, resultado;
	// Se desplegará en pantalla un mensaje al usuario solicitando
	// el número 1, de igual manera se solicitara el número 2
	numero01 = Number(prompt("Ingresar el primer numero: ",));
	numero02 = Number(prompt("Ingresar el segundo numero: ",));
	// Ahora se calcula la suma y se guarda el resultado en la 
	// variable resultado
	resultado = numero01+numero02;
	// Por último desplegar el resultado almacenado en pantalla
	alert("El resultado de la suma es: "+resultado,);
}


	// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo para determinar si un número 
// ingresado por teclado es positivo o negativo
function signo() {
	var numero01;
	// Se desplegará en pantalla un mensaje al usuario solicitando
	// un número, se deberá ingresar positivos o negativos
	numero02= Number(prompt("Ingresar un número (puede ser positivo o negativo"));
	numero01 = Number(prompt("Ingresar un número (puede ser positivo o negativo"));
	// Se compara el numero01 contra cero
	// SI es mayor o igual a 0 
	// ENTONCES se imprimirá que es POSITIVO
	// En caso contrario se imprimirá que es NEGATIVO
	if (numero01>=0) {
		alert("= El número ingresado es POSITIVO");
	} else {
		alert("= El número ingresado es NEGATIVO");
	}
}

function calculadora() {
	var numero01, numero02, opcion_num, resultado;
	// Ingresar la opción a realizar
	numero01=Number(prompt("Posibles operaciones a realizar"));
	numero02=Number(prompt("1: Sumar"));
	numero03=Number(prompt("2: Restar"));
	numero04=Number(prompt("3: Multiplicar"));
	numero05=Number(prompt("4: Dividir"));
	// De acuerdo a la elección se compara contra cada una de las
	// opciones para realizarla y terminar el programa
	opcion_num = Number(prompt("¿Que operación deseas realizar?",));
	// Operación: Suma
	if (opcion_num==1) {
		numero01 = Number(prompt());
		numero02 = Number(prompt());
		resultado = numero01+numero02;
		document.write("La suma de ",numero01,"+",numero02,"=",resultado,);
	} else {
		// Operación: Resta
		if (opcion_num==2) {
			numero01 = Number(prompt("Ingresar el primer valor"));
			numero02 = Number(prompt("Ingresar el segundo valor"));
			resultado = numero01-numero02;
			document.write("La resta de ",numero01,"-",numero02,"=",resultado,);
		} else {
			// Operación: Multiplicación
			if (opcion_num==3) {
				numero01 = Number(prompt("Ingresar el primer valor"));
				numero02 = Number(prompt("Ingresar el segundo valor"));
				resultado = numero01*numero02;
				document.write("La multiplicación de ",numero01,"x",numero02,"=",resultado,);
			} else {
				// Operación: División
				if (opcion_num==4) {
					numero01 = Number(prompt("Ingresar el primer valor"));
					numero02 = Number(prompt("Ingresar el segundo valor"));
					resultado = numero01/numero02;
					alert("La división de ",numero01,"/",numero02,"=",resultado,);
				}
			}
		}
	}
}

// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo del uso de condicional switch para identificar
// si un número está dentro de un rango sugerido y visualizar
// el mes del calendario 
function mescalendario() {
	var numeromes;
	numeromes = Number(prompt("Ingresar un número entre el 1 al 12, para visualizar el mes"));
	// Se desplegará el mes de acuerdo al número elegido
	// En caso que no sea ninguna de las opciones válidas
	// se solicitará reiniciar el programa
	switch (numeromes) {
	case 1:
		numeromes1=Number(prompt("El mes es ENERO",'<BR/>'));
		break;
	case 2:
		numeromes2= Number(prompt("El mes es FEBRERO"));
		break;
	case 3:
		numeromes3= Number(prompt("El mes es MARZO"));
		break;
	case 4:
		nummeromes4=Number(prompt("El mes es ABRIL"));
		break;
	case 5:
		numeromes5=Number(prompt("El mes es MAYO"));
		break;
	case 6:
		numeromes6=Number(prompt("El mes es JUNIO"));
		break;
	case 7:
		numeromes7=Number(prompt("El mes es JULIO"));
		break;
	case 8:
		
		numeromes8=Number(prompt("El mes es AGOSTO"));
		break;
	case 9:
		
		numeromes9=Number(prompt("El mes es SEPTIEMBRE"));
		break;
	case 10:
	numeromes10=Number(prompt("El mes es OCTUBRE"));
		break;
	case 11:
		
		numeromes11=Number(prompt("El mes es NOVIEMBRE"));
		break;
	case 12:
		
		numeromes12=Number(prompt("El mes es DICIEMBRE"));
		break;
	default:
	
		falla=Number(prompt("Deberá iniciar el programa",));
	}
}


