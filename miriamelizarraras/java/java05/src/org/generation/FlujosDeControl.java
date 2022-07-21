package org.generation;

public class FlujosDeControl {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		/**
		 * if (condicion){ Bloque de Instrucciones }
		 * 
		 * 
		 * 
		 */
		int edad = 71;

		// if (edad > 70); System.out.println("Ya requiro cambio, denme su pensión");
		// System.out.println("Instrucción al final del if");

		// Si se requiere más de una instrucción realice un bloque de código con { }

		if (edad > 50) {
			System.out.println("Al director ya le duelen las dos rodullas");
			edad -= 10;
			System.out.println("Se realizaó cirujias con nuestros impuestos");
			System.out.println("La eedad del director " + edad);
			// ESta variable solo tiene alcance en el bloque
			int nAutos = 10;

			System.out.println("N. autos: " + nAutos); // Esta variable no tiene alcance a nAutos
		}
		int nAutos = 40;
		if (nAutos > 20 && edad < 80) {
			System.out.println("El Dir puede conducir lo que quiera");
			int modeloAuto = 2019;
			// Tener un if, dentro de otro if, se llaman if anidados
			if (modeloAuto < 2020) {
				System.out.println("El Dir. regalará estas antiguedades");
				modeloAuto -= 5;
				System.out.println("N. de autos restantes: " + modeloAuto);
			}
		}

		/**
		 * if(condicional) {
		 * 
		 * }
		 * 
		 */

		int billonessP = 198;
		int nBitcoins = 256;
		if (billonessP > 200 || nBitcoins > 5892)
			System.out.println("Sea mi padrino ");
		else
			System.out.println("No compro en tiendas conocidas");

		/**
		 * if(condicional) bloqueInstrucción else if (condición nueva) bloqueInstrucción
		 * else if (condición nueva) bloqueInstrucción else bloqueInstrucción
		 * 
		 * 
		 * 
		 */
		int retencionISR = 37;
		int retencionIVA = 18;

		if (retencionISR < 30 && retencionIVA < 15)
			System.out.println("Me alcanza");
		else if (retencionISR < 36 && retencionIVA < 17)
			System.out.println("No me alcanza pero algo es algo");
		else
			System.out.println("Debo trabajar más, siempre contento C:");

		/**
		 * Una forma rápida de realizar una evaluación condicional es con el uso del
		 * operador ternario. (condicional) ? "Instrucciones si es true" :
		 * "Instrucciones si es false" ;
		 * 
		 * 
		 */
		boolean esFrontera = true;
		int impuestoAplicar = esFrontera ? 8 : 16;
		System.out.println("Impuesto a aplicar: " + impuestoAplicar);

		System.out.println("Tipo de región: " + ((impuestoAplicar > 8) ? "Centro" : "frontera"));

		/**
		 * La condición switch case, podemos evaluar multiples opciones switch
		 * (expresión a evaluar){ case opcion1: bloque de código break; case opcion2:
		 * bloque de código break; case opcion n: bloque de código break; default:
		 * Bloque de código sin ningún case cumple la condición o expresión. break; }
		 * 
		 * 
		 */

		int mes = 8;
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
		case 7:
			mesTxt = "Julio";
			break;
		case 8:
			mesTxt = "Agosto";
			break;
		case 9:
			mesTxt = "Septiembre";
			break;
		case 10:
			mesTxt = "Octubre";
			break;
		case 11:
			mesTxt = "Noviembre";
			break;
		case 12:
			mesTxt = "Diciembre";
			break;
		default:
			mesTxt = "No se tiene registrado";
			break;

		}
		mes = 1;
		switch (mes) {
		case 3:
		case 4:
		case 5:
			System.out.println("Estamos en primavera");
			break;
		case 6:
		case 7:
		case 8:
			System.out.println("Estamos en verano");
			break;
		case 9:
		case 10:
		case 11:
			System.out.println("Estamos en otoño");
			break;
		case 12:
		case 1:
		case 2:
			System.out.println("Estamos en invierno");
			break;

		}
		String nombre = "Rafa";
		nombre = "Emiliano";
		String jugador = "Rafa"; // id 29
		String apellido = "Dorantes"; // id 31

		String participante = new String("Dorantes"); // id 32
		// 31 == 32
		if (apellido == participante)// Se comparan los IDs de los Strings
			System.out.println("El apellido es de Abi");// no se imprime porque no son los mismo IDs

		if (apellido.equals(participante))// Se comparan las literales
			System.out.println("¡El apellido es de Abi!");// no se imprime porque no son los mismo IDs

		apellido = new String("Flores");
		switch (apellido) {
		case "Ruiz":
			System.out.println("Apellido de Gerardo");
			break;
		case "Dorantes":
			System.out.println("Apellido de Abi");
			break;
		case "Delgado":
			System.out.println("Apellido de Sebas");
			break;
		default:
			System.out.println("Apellido de Santi");

		}

	}

}
