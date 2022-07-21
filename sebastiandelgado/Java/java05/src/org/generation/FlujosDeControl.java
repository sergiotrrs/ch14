package org.generation;

public class FlujosDeControl {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 *    if(condición) {
		 *    Bloque de instrucciones
		 *    }
		 */
		int edad = 71;
		
		//if(edad>70) System.out.println("Ya requiero cambio, den su pensión");
		//System.out.println("Instrucción al final del if");
		
		//Si se requiere más de una instrucción, realice un bloque de 
		// código con { y }
		
		if(edad>50) {
			System.out.println("El director ya le duele las dos rodillas");
			edad -=10;  // edad = edad -10;
			System.out.println("Se realzó cirujías el Dir, con nuestros impuestos");
			System.out.println("Nueva edad del Dir: "+ edad);
			
			//Esta variable sólo tiene alcance en el bloque
			
		}
		int nAutos = 40;
		System.out.println("N. de autos: " + nAutos);
		if(nAutos>20 && edad <80) {
			System.out.println("El Dir puede conducir lo que quiera");
			int modeloAuto=2019;
			// Tener un if dentro de otro if, se llaman if anidados
			if(modeloAuto>2020) {
				System.out.println("El Dir. regalará estas antigüedades");
				modeloAuto -=5;
				System.out.println("N. de autos restantes: " + modeloAuto);
			}
			
		}
		
		/*
		 * En caso de tener dos opciones se usa IF-ELSE
		 * 
		 * if(declaración {
		 * Bloque de código
		 * }
		 * else{
		 * Bloque de código
		 * }
		 */
		int billonesSP=232;
		int nBitcoins =256;
		if(billonesSP > 200 || nBitcoins >5892) System.out.println("Sea mi padrino");
		else System.out.println("No compro en tiendas conocidas");
		
		
		/*
		 * if(condición) bloqueInstrucción
		 * else if(condición nueva) bloqueInstrucción
		 * else if(condición nueva) bloqueInstrucciín
		 * else bloqueInstrucción
		 */
		int retenciónISR =37;
		int retenciónIVA =18;
		
		if(retenciónISR <30 && retenciónIVA<15) System.out.println("Me alcanza");
		else if (retenciónISR <36 && retenciónIVA< 17)
			System.out.println("No alcanza, pero algo es algo");
		else
			System.out.println("Debo trabajar más, siempre contento =) ");
		
		/*
		 * Una forma de realizar una evaluacón condicional es con el uso del operador
		 * ternario.
		 * (condicional) ? "Instrucciones si es true" : "Instrucciones si es false"
		 * 
		 */
		boolean esFrontera = false;
		int impuestoAplicar = esFrontera ? 8 : 16 ;
		System.out.println("Impuesto a aplicar: "+ impuestoAplicar + "%");
		
		System.out.println("Tipo de región:" + ((impuestoAplicar>8)?"Centro":"frontera"));
		
		/*
		 * Switch: para varias opciones
		 * 
		 */
		
		int mes = 8;
		String mesTxt;
		switch(mes) {
		case 1: mesTxt = "Enero"; break;
		case 2: mesTxt = "Febrero"; break;
		case 3: mesTxt = "Marzo"; break;
		case 4: mesTxt = "Abril"; break;
		case 5: mesTxt = "Mayo"; break;
		case 6: mesTxt = "Junio"; break;
		case 7: mesTxt = "Julio"; break;
		case 8: mesTxt = "Agosto"; break;
		case 9: mesTxt = "Septiembre"; break;
		case 10: mesTxt = "Octubre"; break;
		case 11: mesTxt = "Noviembre"; break;
		case 12: mesTxt = "Diciembre"; break;
		default: mesTxt = "No se tiene regustrado";
		}
		System.out.println("Mes seleccionado: " + mesTxt);
		
		mes = 4;
		switch(mes){
		//Una manera de ponerlo
		case 3:  
		case 4: 
		case 5:
			System.out.println("Estamos en primavera");
			break;
			//Otra manera de ponerlo
		case 6: case 7: case 8:
			System.out.println("Estamos en verano");
			break;
		case 9: case 10: case 11:
			System.out.println("Estamos en otoño");
			break;
			//Otra manera de ponerlo
		case 12,1,2:
			System.out.println("Estamos en invierno <3 ");
		break;
			default:
				System.out.println("Error en el mes introducido");
		}
		
		String nombre= "Rafa";
		nombre = "Emiliano";
		String jugador = "Rafa";
		String apellido = "Dorantes"; //la var guarda el ID
		
		String participante = new String("Dorantes");
				// 31 == 32
		if(apellido == participante) { //Se comparan los ID's
			System.out.println("El apellido es de Abi");
		}
		if (apellido.equals(participante))// Se compara los string de los objetos
			System.out.println("Esta sí es una comparación de String correcta ;)");
		
		apellido = new String ("Delgado");
		switch(apellido) {
		case "Dorantes":
			System.out.println("Apellido de Abi");
			break;
		case "Ruiz":
			System.out.println("Apellido de Gerardo");
			break;
		case "Delgado":
			System.out.println("Apellido de Sebas");
			break;
			default:
				System.out.println("Debe ser apellido de Santi");
		}
	}

}
