package org.generation;

public class FlujosDeControl {

	public static void main(String[] args) {
		/**
		 * if (condicion){ Bloque de instrucciones }
		 */
		int edad = 71;
//		if (edad > 70) System.out.println("Ya requiero cambio, dame mi pensión");
		System.out.println("Instrucción al final de if");
		// Si se requiere más de una instrucción, relicé
		// un bloque de código { y }
		if (edad > 50) {
			System.out.println("El director ya le duelen las rodillas");
			edad -= 10;
			System.out.println("Se realizó cirujias el Dir, con nuestros impuestos");
			System.out.println("Nueva edad del Dir: " + edad);

			// Esta variable solo tiene alcance en el bloque
			int nAutos = 10;
		}
//		System.out.println("N. autos: " + nAutos); //Esta var no tiene alcance

		int nAutos = 10;
		if (nAutos > 20 && edad < 80) {
			System.out.println("El Dir puede conducir lo que quiera");
			int modeloAuto = 2019;
			// Tener un if, dentro de otro if, se llaman anidados
			if (modeloAuto < 2020) {
				System.out.println("El Dir. regalará estas antiguedades");
				modeloAuto -= 5;
				System.err.println("N. de autos restantes: " + modeloAuto);
			}
		}
		/**
		 * Si se realiza la decalración if, la declaración else ya no se ejecuta
		 * 
		 * if(declaración){ Bloque de código } else{ Bloque de código }
		 */
		int billonesSP = 198;
		int nBitcoins = 256;
		if (billonesSP > 200 || nBitcoins > 5892)
			System.out.println("Sea mi pdrino");
		else
			System.out.println("No compro en tiendas conocidas");

		/**
		 * if(condicion) bloqueInstrucción else if (condición nueva) bloqueInstrucción
		 * else if (condición nueva) bloqueInstrucción else bloqueInstrucción*
		 */
		int retencionISR = 37;
		int retencionIVA = 18;

		if (retencionISR < 30 && retencionIVA < 15)
			System.out.println("Me alcanza");
		else if (retencionISR < 36 && retencionIVA < 17)
			System.out.println("No me alcanza, pero algo es algo");
		else
			System.out.println("Debo trabajar más, siempre contento");

		/**
		 * Una forma rápida de realizar una evaluación condicional es con el uso del
		 * operador ternario. (condicional) ? "Instrucciones su es true" :
		 * "Instrucciones si es false;
		 */
		boolean esFrontera = true;
		int impuestoAplicar = esFrontera ? 8 : 16;
		System.out.println("Impuesto a aplicar: " + impuestoAplicar);

		System.out.println("Tipo de región: " + ((impuestoAplicar > 8) ? "Centro" : "frontera"));

		/**
		 * La condición switch, podemos evaluar múltiples opciones switch(expresión a
		 * evaluar){ case opcion1: bloque de código break; case opción2: bloque de
		 * código break; case opciónN: bloque de códgio break; default: Bloque de código
		 * si ningún case cumple la expresión break;
		 * 
		 */

		int mes = 2;

		String mesTxt;

		switch (mes) {
		case 1:
			mesTxt = "Enero";
			break;
		case 2:
			mesTxt = "Febrero";
			break;
		case 3:
			mesTxt = "Marzo";
			break;
		case 4:
			mesTxt = "Abril";
			break;
		case 5:
			mesTxt = "Mayo";
			break;
		case 6:
			mesTxt = "Junio";
			break;
		default:
			mesTxt = "No se tiene registrado";
		}
		System.out.println("No se tiene registrado");
		
		mes = 4;
		switch (mes) {
		case 3: case 4: case 5:
			System.out.println("Estamos en primavera");
			break;
		case 6: case 7: case 8:
			System.out.println("Estamos en verano");
			break;
		case 9: case 10: case 11:
			System.out.println("Estamos en otoño");
			break;
		//También se puede poner de la sig: manera
		case 12,1,2:
			System.out.println("Estamos en invierno");
			break;
		default:
			System.out.println("Error en el mes introducido");
		}
		
		String nombre= "Rafa";
		nombre = "Emiliano";
		String jugador = "Rafa";
		String apellido = "Dorantes"; //la var guarda el 
		//31 == 31 IDs en memoria
		//if(apellido == "Dorantes") //Se compara los ID
				//	System.out.println("El apellido es de Abi");
		String participante = new String("Dorantes");
		//31 == 32
		//Compara los id
		if(apellido == participante) //Se compara los ID
					System.out.println("El apellido es de Abi");

		//Compara la literal
		if(apellido.equals(participante)) //Se compara los ID
			System.out.println("El apellido es de Abi");
		
		//En switch se utiliza equals 
		apellido = new String("Ruiz");
		switch(apellido) {
		case "Ruiz":
			System.out.println("Apellido de Gerardo");
			break;
		case "Dorantes":
			System.out.println("Apellido de Abi");
			break;
		case "Flores":
			System.out.println("Apellido de Maga");
			break;
		case "Delgado":
			System.out.println("Apellido de Sebas");
			break;
		default: 
			System.out.println("Debe ser apellido de Santi"); 
		}
	}
}
