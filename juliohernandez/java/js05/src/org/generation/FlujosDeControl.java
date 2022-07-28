package org.generation;

public class FlujosDeControl {

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
				int nAutos = 10;
			}
		// System.out.println("N. de autos: " nAutos); Esta variable no tiene alcance

		int nAutos = 40;

		if (nAutos > 20 && edad < 80) {
			System.out.println("El Dir puede conducir lo que quiera");

			int modeloAuto = 2019;

			// If's anidados
			if (modeloAuto < 2020) {
				System.out.println("El Dir. regalará estas antigüedades");

				modeloAuto -= 5;
				System.err.println("No. de autos restantes: " + modeloAuto);
			}

			// If-else U una sola instrucción.
			int billonesSP = 198;
			int nBitcoins = 256;

			if (billonesSP > 200 || nBitcoins > 5892)
				System.out.println("Sea mi padrino");
			else
				System.out.println("No compro en tiendas conocidas\n--------");

			// If-Else if-Else
			int retencionISR = 37;
			int retencionIVA = 18;

			if (retencionISR < 30 && retencionIVA < 15)
				System.out.println("Me alcanza");
			else if (retencionISR < 36 && retencionIVA < 17)
				System.out.println("No me alcanza, pero algo es algo");
			// else Se puede no tener el else
			System.out.println("Debo trabajar más, siempre contento =)\n-----");
		}

		// Operador ternario
		// (condicional) ? "Instrucciones si es true : "Instrucciones si es false
		boolean esFrontera = false;
		int impuestoAplicar = esFrontera ? 8 : 16;
		System.out.println("impuesto a aplicar: " + impuestoAplicar + "\n------");

		// El operador ternario puede no estar contenido en una variable
		System.out.println("Tipo de región: " + ((impuestoAplicar > 18) ? "Centro\n----" : "Frontera\n-----"));

		// POR QUÉ ESTÁ MAL ESTO:?
		//(true) ? System.out.println("Hello") : System.out.println("No funciona");

		// SWITCH
		int mes = 2;
		String mesTxt;

		switch (mes) {
		case 1:
			mesTxt = "Enero";
			break;
		case 2:
			mesTxt = "Frebrero";
		case 3:
			mesTxt = "Marzo";
			break;
		case 4:
			mesTxt = "Abril";
			break;
		case 5:
			mesTxt = "Mayo";
			break;
		default:
			mesTxt = "No se tiene registrado";
		}

		System.err.println("Mes seleccionado: " + mesTxt+"\n------");
		
		mes = 1;
		switch (mes) {
		case 3, 4, 5:
			System.out.println("Estamos en primavera");
			break;
		case 6: case 7: case 8:
			System.out.println("Estamos en verano");
			break;
		case 9: case 10: case 11:
			System.out.println("Estamos en otoño");
			break;
		case 12: case 1: case 2:
			System.out.println("Estamos en invierno");
			break;
			default: 
				System.out.println("Error en el mes introducido");
		}
		
		String nombre = "Rafa";
		nombre = "Emiliano";
		String jugador = "Rafa";
		
	}
//Ctrl Shift F
}
