package org.generation;

public class FlujoDeControl {

	public static void main(String[] args) {

		// if (condicion){
		// Bloque de intrucciones}

		int edad = 71;
		if (edad > 70)
//			System.out.println("Ya quier, denme mi pension");
//		System.out.println("Intruccion al final del if");

			if (edad > 50) {
				System.out.println("Al director ya le duelen las rodillas");
				edad -= 10;// edad = edad-10;
				System.out.println("Se realizo cirujas el Dir, con nuestros impuestos");
				System.out.println("Nueva edad del Direc " + edad);
				// esta variable solo tiene alcanze en ell bloque
			}
//		System.out.println("N. de autos: " nAutos); Esyta variable no tiene alcanze
		int nAutos = 40;
		if (nAutos > 20 && edad < 80) {
			System.out.println("El Dir puede conducir lo que quiera");
			int modeloAuto = 2019;
			if (modeloAuto < 2020) {
				System.out.println("El Dir, regalara estas antiguedades");
				modeloAuto -= 5;
				System.out.println("N. de autos restantes; " + modeloAuto);
			}
		}

		int billonesSP = 198;
		int nBitcoins = 256;
		if (billonesSP > 200 || nBitcoins > 5892)
			System.out.println("Sea mi padrino");
		else
			System.out.println("No compro en tiendas conocidas");

		// else if

		int retencionISR = 37;
		int retencionIVA = 18;

		if (retencionISR < 30 && retencionIVA < 15)
			System.out.println("Me alcanza");
		else if (retencionISR < 36 && retencionIVA < 17)
			System.out.println("No me alcanza pero es algo");
		else
			System.out.println("Debo trabajar mas, siempre contento");

//		una forma rapida de realizar una evaluzacion condicional es con el uso de operador ternario

		boolean esFrontera = true;
		int impuestoAplicar = esFrontera ? 8 : 16;
		System.out.println("Impuesto a aplicar: " + impuestoAplicar);

		System.out.println("Tipo de region: " + ((impuestoAplicar > 8) ? "Centro" : "Frontera"));

		// La condicion switch, podemos evaluar multiples opciones

		int mes = 3;
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
			break;
		}
		System.out.println("Mes seleccionado: " + mesTxt);

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
		case 12, 1, 2:
			System.out.println("Estamos en invierno");
			break;
		default:
			System.out.println("Error en el mes seleccionado");
		}

		String nombre = "Rafa";
		nombre = "Emiliano";
		String jugador = "Rafa"; // La variable guarda el ID
		String apellido = "Dorantes";

		String participante = new String("Dorantes");

		if (apellido == participante)// Se comparan los IDs de los Strings
			System.out.println("El apellido es de Aby");
		else
			System.out.println("El apellido no es de Aby");

		if (apellido.equals(participante))// Se comparan las literales
			System.out.println("¡El apellido es de Aby!");
		else
			System.out.println("¡El apellido no es de Aby!");

		if (apellido.equals(participante))
			System.out.println("Hola");

		apellido = new String("Flores");
		switch (apellido) {
		case "Dorantes":
			System.out.println("Apellido de Aby");
			break;
		case "Flores":
			System.out.println("Apellido de Maga");
			break;
		case "Ruiz":
			System.out.println("Apellido de Gerardo");
			break;
		default:
			System.out.println("Apellido no registrado");
			break;
		}

	}

}
