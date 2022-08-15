package org.generation;

public class FlujosDeControl {

	public static void main(String[] args) {

		/**
		 * if (condición){ Bloque de instrucciones }
		 */
		int edad = 71;

//		if (edad>70) System.out.println("Ya requiero cambio, denme mi pensión");
//		System.out.println("Instrucción al final del if");

		// Si se requiere más de una instrucción, realicé un bloque de
		// código con { y }
		if (edad > 50) {
			System.out.println("El director ya le duele las dos rodillas");
			edad -= 10; // edad = edad -10
			System.out.println("Se realizó cirugías el Dir, con nuestros impuestos");
			System.out.println("Nueva edad del Dir: " + edad);

			// Esta variable solo tiene alcance en el bloque
			int nAutos = 10;
		}
		// System.out.println("N. autos: " + nAutos); Esta var no tiene alcance a nAutos

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
		 * En caso de que no se aplique la condición if, podemos usar la declaración
		 * else, para que realice otra acción.
		 * 
		 * Si se realiza la declaración if, la declaración else ya no se ejecuta
		 * 
		 * if(declaración){ Bloque de código } else{ Bloque de código }
		 */
		int billonesSP = 198;
		int nBitcoins = 256;
		if (billonesSP > 200 || nBitcoins > 5892)
			System.out.println("Sea mi padrino");
		else
			System.out.println("No compro en tiendas conocidas");

		/**
		 * if(condicion) bloqueInstrucción else if (condición nueva) bloqueInstrucción
		 * else if (condición nueva) bloqueInstrucción else bloqueInstrucción
		 */
		int retencionISR = 37;
		int retencionIVA = 18;

		if (retencionISR < 30 && retencionIVA < 15) {
			System.out.println("Me alcanza");			
		}
		else if (retencionISR < 36 && retencionIVA < 17)
			System.out.println("No me alcanza, pero algo es algo");
		else
			System.out.println("Debo trabajar más, siempre contento =)");

		/**
		 * Una forma rápida de realizar una evaluación condicional es con el uso del
		 * operador ternario. (condicional) ? "Instrucciones si es true" :
		 * "Instrucciones si es false";
		 * 
		 */
		boolean esFrontera = true;
		int impuestoAplicar = esFrontera ? 8 : 16;
		System.out.println("Impuesto a aplicar: " + impuestoAplicar);

		System.out.println("Tipo de región:" + ((impuestoAplicar > 8) ? "Centro" : "frontera"));

		/**
		 * La condicón switch, podemos evaluar multiples opciones switch (expresión a
		 * evaluar){ case opción1: bloque de código break; case opción2: bloque de
		 * código break; case opción n: bloque de código break; default: Blouque de
		 * código si ningún case cumple la expresión break;
		 * 
		 * }
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
		System.out.println("Mes seleccionado: " + mesTxt);
		
		mes = 4;
		switch (mes) {
		case 3:
		case 4: 
		case 5:
			System.out.println("Estamos en primavera");
			break;	
		case 6: case 7: case 8:
			System.out.println("Estamos en verano");
			break;	
		case 9: case 10: case 11:
			System.out.println("Estamos en otoño");
			break;			
		case 12,1,2:
			System.out.println("Estamos en invierno");
			break;			
		default:
			System.out.println("Error en el mes introducido");
		}
		
		String nombre= "Rafa";
		nombre = "Emiliano";
		String jugador = "Rafa";
		String apellido = "Dorantes";//la var guarda el ID
		
		String participante = new String("Dorantes");
		     //  31   ==  32 
		if (apellido == participante)//Se comparan los IDs de los Strings
			System.out.println("El apellido es de Abi");

		if (apellido.equals(participante) )//Se comparan las literales
			System.out.println("¡El apellido es de Abi!");

		apellido = new String ("Flores");
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
