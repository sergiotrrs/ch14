package org.generation;

public class FlujoDeControl {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		/**
		 * if (condicion){ Bloque de instrucciones ]
		 */
		int edad = 71;
		// if(edad>70) System.out.println("Ya requiere cambio, den su pension");
		// System.out.println("Intruccion al final del if");

		// Se requier mas de una instruccio, realice un bloque
		// codigo con {y}

		if (edad > 50) {
			System.out.println("El director ya le duele las dos rodillas");
			edad -= 10;// edad =edad -10
			System.out.println("Se realizo cirujias el DIr con nuestros impuestos ");

		}

		int nAutos = 40;
		if (nAutos > 20 && edad < 80) {
			System.out.println("El Dir puede conducir lo que quiera");
			int modeloAuto = 2019;
			// Tenemos un if, dentro de otro if, se llaman if animado
			if (modeloAuto < 2020) {
				System.out.println("El director, regalara estas antiguedades");
				modeloAuto = 5;
				System.out.println("n de autos rstantes");
				System.out.println("N. de autos restantes: " + modeloAuto);

			}
		}

		/**
		 * En casi de quee no se aplique la condicion if, podemos usar la declaracion
		 * false
		 * 
		 * Si se realiza la declarcion IF, la declracion else ya no se ejecuta if
		 * (declaracion){ } else[
		 * 
		 * 
		 */
		long billonesSP = 232;
		int nBitcoins = 256;
		if (billonesSP > 2000 || nBitcoins > 5892)
			System.out.println("sea mi padrino");
		else
			System.out.println("no compro en tiedas conocidad ");

		/**
		 * if (condicion) bloque instruccion else if (condicion nueva )Bloque de
		 * intruccion; * else if (condicion nueva )Bloque de intruccion; else blque
		 * Instruccion
		 */

		int retencionISR = 35;
		int retencionIVA = 18;

		if (retencionISR < 30 && retencionIVA < 15)
			System.out.println("Me alcanza");
		else if (retencionISR < 36 && retencionIVA < 17)
			System.out.println("No me alza, pero algo es algo ");
		else
			System.out.println("Debo trabajar más, siempre conteo =");

		/**
		 * Una forma rapida de realizar una evaluacion condicional es con el uso del
		 * operador ternario. (condicional) ? "Intrucciones su es true": "Intrucciones s
		 * es false ";
		 */

		boolean esFrontera = true;
		int impuestoAplicar = esFrontera ? 8 : 16;
		System.out.println("impuesto a aplicr: " + impuestoAplicar);

		System.out.println("Tipo de región:" + ((impuestoAplicar > 8) ? "Centro" : "frontera"));

		/**
		 * La condicion switch (expresion evaluar){ case opcion1: bloque de codigo
		 * break; case opcion2: bloque de codigo break; case opcion n: bloque de codigo
		 * break; default: Bloque de codigo si ningun case cumple la condición break; }
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
		case 7:
			mesTxt = "Julio";
			break;
		case 8:
			mesTxt = "Agosto";
			break;
		default:
			mesTxt = "No se tiene mes registrado";
			break;

		}
		System.out.println("Mes selecccionado:" + mesTxt);
		mes =1;
		switch (mes) {
		case 3: case 4: case 5:
			System.out.println("estamos en primavera");
			break;
		case 6: case 7: case 8:
			System.out.println("estamos en verano");
			break;
		case 9: case 10: case 11:			
			System.out.println("estamos en verano");
			break;
		case 12: case 1: case 2:
			System.out.println("estamos en invierno");
			break;
		default:
			System.out.println("Error en el mes introduccido");
			
		}
		
		String nombre ="Rafa";
		nombre = "Emiliano";
		//Rafa se guarda en un id unico de la literal en la memoria y
		//se queda por si se vueleve a traer
		//a esto se le llama inmutable es decir no cambia en memoria 
		//Para borrarlo garbage collector
		String jugador = "Rafa";
		//No almancea dorantes lo que almacena es el id 
		String apellido = "Dorantes";
		
		//id =31    == 31 IDs en memoria 
		//if (apellido == "Dorantes")//Se comparan los id
		//System.out.println("El apellido es de abi");
		//por eso no es aporpiado porque se igaulan los id
		
		//Va a crear un nuevo id auqnue ya estaba con el new String:
		// entonces se esta comparando dos id diferentes 
		//31 ==32 
		String participante = new String("Dorantes");
		if (apellido == participante)//Se comparan los id
		System.out.println("El apellido es de abi");
		
		if (apellido.equals(participante))//Se comparan las literales con el metodo equals
			System.out.println("!!!!El apellido es de abi¡¡¡¡");
		
		apellido = new String("Mtz");
		switch(apellido) {
		case "Ruiz":
			System.out.println("Apellido de gerardo");
			break;
		case "Dorantes":
			System.out.println("Apellido de ABi");
			break;
		case "Flores":
			System.out.println("Apellido de Maga");
			break;
		case "Delgado":
			System.out.println("Apellido de Sebas");
			break;
		default:
			System.out.println("Apellido de santi");
			
		}
		
		// int a = scanner.nextInt();
	      //  if (a>0 && a<100 && a%2==0) {
	        //    System.out.println("Not Weird");
	            
	        //}
	        //else {
	          //  System.out.println("Weird");
	      //  }
		
		
		
		
		
		
		
		
		
		
		
	}

}
