package org.generation;

public class FlujosDeControl {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 * 
		 * if(condición) {
		 * 	instrucciones
		 * }
		 * */
		
		int edad = 72;
		
//		if (edad >= 70) System.out.println("Traigan a alguien más joven ps");
//		System.out.println("Instrucción al final del if");
		
		//Si se requiere más de una instrucción, se hace
		// bloque de código {}
		if (edad >50) {
			System.out.println("Al director le duelen las rodillas");
			edad -= 20;
			System.out.println("Se armó cirujías. Se ve joven con los impuestos ");
			System.out.println("Nueva edad:" +edad);
			int nAutos = 10;
		}
		//System.out.println("N. autos?: " + nAutos);
		//Variable scope: nAutos no llega luego del bloque
		
		int nAutos= 10;
		for (int i=0; i < 20; i++) {
		++nAutos;
		}
		if (nAutos>20 && edad <80) {
			System.out.println("El dir puede conducir lo que quiera");
			int modeloAuto = 2019;
			if (modeloAuto<2020) {
				System.out.println("El dir. regalará antiguedades");
				modeloAuto -=5;
				System.out.println("N. de autos restantes " + modeloAuto);
			}
			
		}
		
		/**
		 * 
		 * if (condición) {
		 * 	bloque
		 * }
		 * else {
		 *  bloque
		 * }
		 * */
		int varo = 124353453;
		int nBitcoins = 256;
		if (varo>10000 || nBitcoins>2123) System.out.println("Sea mi padrinx, xfa");
		else System.out.println("chale, ahí nos vemos");
		
		/**
		 * if (condicion) {
		 * }
		 * else if (condicion nueva) {
		 * }
		 * else if (condicion nueva) {
		 * }(
		 * else {
		 * } 
		 * */
		
		byte retencionISR = 35;
		byte retencionIva = 16;
		
		if (retencionISR<30 && retencionIva<15) System.out.println("Alcanza");
		else if (retencionISR<36 && retencionIva<17) System.out.println("No alcanza, pero es algo");
		else System.out.println("Work work work");
		
		/**
		 * Una forma de realizar evaluaciones
		 * condicionales
		 * es ternario
		 * (condicional) ? true:false;
		 * 
		 * */
		boolean esFrontera = true;
		int impuestoAplicado = (esFrontera) ? 8 : 16; 
		System.out.println(impuestoAplicado);
		System.out.println("Tipo de región: " + ((impuestoAplicado > 8) ? "Centro" : "Frontera"));
		
		/**
		 * La condición switch case permite 
		 * evaluar múltiples opciones
		 * 
		 *  switch (expresion) {
		 *  	case 1:
		 *  		línea;
		 *  		break;
		 *  	case opcion2:
		 *  		bloque;
		 *  		break;
		 *    	case n:
		 *  		bloque;
		 *  		break;
		 *  	case default:
		 *  		bloque;
		 *  		break;
		 *  }
		 * */
		int mes = 4;
		String mesTxt;
		switch (mes) {
			case 1:
				mesTxt = "Enero: No hay declaración fiscal";
				break;
			case 2:
				mesTxt = "Febrero: No hay declaración fiscal";
				break;
			case 3:
				mesTxt = "Marzo: Prepara tu declaración fiscal";
				break;
			case 4:
				mesTxt = "Abril: Presenta tu declaración fiscal!";
				break;
			case 5:
				mesTxt = "Mayo: No hay declaración fiscal";
				break;
			case 6:
				mesTxt = "Junio: No hay declaración fiscal";
				break;
			case 7:
				mesTxt = "Julio: No hay declaración fiscal";
				break;
			case 8:
				mesTxt = "Agosto: No hay declaración fiscal";
				break;
			case 9:
				mesTxt = "Septiembre: No hay declaración fiscal";
				break;
			case 10:
				mesTxt = "Octubre: No hay declaración fiscal";
				break;
			case 11:
				mesTxt = "Noviembre: No hay declaración fiscal";
				break;
			case 12:
				mesTxt = "Diciembre: No hay declaración fiscal";
				break;
			default:
				mesTxt = "Tá raro pq... no está registrao";
				break;

		}
		System.out.println("El mes es... " + mesTxt);
		
		mes = 10;
		switch (mes) {
		//El case puede ir inline
		case 3:	case 4: case 5:
			System.out.println("Primavera");
			break;
		//Puede ir en bloque
		case 6:
		case 7:
		case 8:
			System.out.println("Verano");
			break;
		case 9:	case 10: case 11:
			System.out.println("Otoño");
		//puede ir por comas
		case 12, 1, 2:
			System.out.println("Invierno");
			break;
		default:
			System.out.println("No conozco ese mes");
		}
	
		String nombre = "Santi";
		nombre = "Emiliano";
		String jugador = "Santi";
		String apellido = "Dorantes";
		
		/*
		 * compara id's, no strings
		if (apellido == "Dorantes") {
			System.out.println("El apellido es de Abi");
		}
		*/
		String participante = new String("Dorantes");
		
		/*
		 * compara id's, pero no son los mismos
		 * ya que se creó una variable con otro ID 
		if (apellido == participante) {
			System.out.println("El apellido es de Abi");
		}
		*/
		
		//Se comparan literales
		if (apellido.equals(participante)) {
			System.out.println("El apellido es de Abi");
		}
		
		apellido = new String ("Dorantes");
		switch (apellido) {
		case "Dorantes":
			System.out.println("Apellido de Abi");
			break;
		case "Estrella":
			System.out.println("Apellido de José");
			break;
		case "Gayoso":
			System.out.println("Apellido de Tanix");
			break;
		default:
			System.out.println("Ese no es un apellido...");
		}
		
		
	}
}
