package org.generation;

public class FlujoDeControlRespaldo {

	public static void main(String[] args) {

		/*
		 * if (condicion){
		 * Bloque de instrucciones
		 */
		int edad = 71;
//		if(edad>70) System.out.println("Ya requiere cambio, denle su pensión");
//		System.out.println("Instrucción al final del if");
		 
		
		//Si se requiere más de una instrucción, realice un bloque de código con {}
		
		if(edad >50 ) {
			System.out.println("El director ya le duele las dos rodillas");
			edad -= 10;  // edad = edad -10
			System.out.println("Se realizó cirugías el Dir, con nuestros impuestos");	
			System.out.println("Nueva edad del Dir: " +edad );
			
			int nAutos = 10; // nAutos solo tendrá alcance dentro del bloque	
		}
		//System.out.println("N. autos " +nAutos);nAutos no tiene alcance en este punto del programa
		
		int nAutos = 40; //	
		if (nAutos>20 && edad <80) {
			System.out.println("El Director puesde conducir lo que quiera");
			int modeloAuto = 2019;
			//If anidado
			if (modeloAuto < 2020 ) {
				System.out.println("El Director regalará estas antiguedades");
				modeloAuto -= 5;
				System.out.println("Modelo del auto: " +modeloAuto);
			}
		}
		
		/**
		 * En caso de que no se aplique la condición if se puede usar la 
		 * declaración else para ejecutar otra instrucción 
		 * 
		 * 
		 * Si se realiza la declaración if, la declaración else ya no se ejectura
		 * 
		 * if(declaración){
		 * 		bloque de código
		 * }else{
		 * 		Bloque de código
		 * }
		 * */
		
		int billonesSP = 198;
		int nBitcoins = 256;
		if(billonesSP > 200 || nBitcoins > 5892) System.out.println("Sea mi padrino");
		else System.out.println("No compro en tiendas conocidas");
		 
		/**
		 * if(condición) bloqueInstrucción
		 * else if (condición) bloqueInstrucción
		 * else bloqueInstrucción 
		 */
		
		int retencionISR = 37;
		int retencionIVA = 18;
		
		if(retencionISR < 30 && retencionIVA < 15)System.out.println("Me alcanza");
		else if (retencionISR < 36 && retencionIVA < 17)
			System.out.println("No me alcanza, pero algo es algo");
		else
			System.out.println("Debo trabajar más, siempre contento =)");
		

		/**
		 * Una forma rápida de realizar una evaluación condicional es con 
		 * el uso del operador ternario
		 * 
		 * (condicional) ? "instrucciones si es true" : "Instrucciones si es false";
		 *   
		 * */
		
		boolean esFrontera = false;
		int impuestoAplicar = esFrontera ? 8: 16;
		System.out.println("El impuesto a aplicar es: "+impuestoAplicar);
		System.out.println("Región: "+((impuestoAplicar>8)?"Centro":"frontera"));
		
		
		/*
		 * La condición case, se puede evaluar múltiples condiciones
		 * 
		 * switch(expresion a evaluar){
		 * case 1 : bloque de código
		 * 			break;
		 * case 2 : bloque de código
		 * 			break;
		 * case 3 : bloque de código
		 * 			break;
		 * default: 
		 * 			bloque de código si ningún caso aplica
		 * 			break;
		 * }
		 * 
		 * **/
		
		int mes = 8;
		
		switch(mes) {
		case 1:
			System.out.println("Enero");
				break;
		case 2:
			System.out.println("Febrero");
				break;
		case 3:
			System.out.println("Marzo");
				break;
				
		case 4:
			System.out.println("Abril");
				break;
		case 5:
			System.out.println("Mayo");
				break;
		case 6:
			System.out.println("Junio");
				break;
		case 7:
			System.out.println("Julio");
				break;
				
		case 8:
			System.out.println("Agosto");
				break;
		case 9:
			System.out.println("Septiembre");
				break;
		case 10:
			System.out.println("Octubre");
				break;
		case 11:
			System.out.println("Noviembre");
				break;		
		case 12:
			System.out.println("Diciembre");
				break;
		default:
			System.out.println("No existe ese mes");
			break;
		}
		
		//Otras formas de trabajar con el Break
		mes = 2;
		switch(mes) {
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
		case 12, 1, 2:
			System.out.println("Estamos en invierno");
			break;
		default:
			System.out.println("Error: Elige un mes del 1 - 12");
			}

		//los valores de las variables son inmutables en memoria
			String nombre = "Rafa"; // Valores UTF (82,97,102,97) id (identificador único del string (en este caso "Rafa")): 23
			nombre = "Emiliano"; // id: 32  
			String jugador = "Rafa"; // id:23  la palabra Rafa se mantuvo en memoria
		//Garbage collector: detecta elementos que son basura en memoria y los borra	
			String apellido = "Dorantes"; // la var guarda los ID'S 
			// 31 == 31 ID'S EN MEMORIA
			//if(apellido == "Dorantes") //Se comparan los ID'S
				//System.out.println("El apellido es de Abi");
			
			String participante = new String("Dorantes");
				// 30 == 31 comparación de ID'S
			if(apellido == participante) //Se comparan los ID'S
				System.out.println("El apellido es de Abi");
			else
				System.out.println("El apellido NO es de Abi (por el ID)");
			
			if(apellido.equals(participante))
				System.out.println("El apellido es de Abi (Comparación correcta de strings)");
		
			
			apellido = new String("Parker");
			//Switch compara utilizando string.equals para comparar strings
			switch(apellido) {
			case "Ruiz":
				System.out.println("El apellido es de Gerardo");	
				break;
			case "Dorantes":
				System.out.println("El apellido es de Abi");	
				break;
			case "Flores":
				System.out.println("El apellido es de Maga");	
				break;
			case "Delgado":
				System.out.println("El apellido es de Sebas");	
				break;
			default:
				System.out.println("El apellido es de Santi");	
				break;
			}
	}
}
	

