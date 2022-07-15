package org.generation;

public class FlujoDeControl {

	public static void main(String[] args) {
		/**
		 * 	if(condición){
		 * 		Bloque de instrucciones
		 * 	}
		 */

		int edad = 71;
		
		//if (edad>70) System.out.println("Ya requiere cambio, den su pensión");
		//System.out.println("Instrucción al final del if");
		//Si se requiere más de una intrucción, realicé un bloque de
		//código con {y}
		if(edad >50) {
			System.out.println("El directo ya le duele las dos rodillas");
			edad -=10; // edad = edad -10
			System.out.println("Se realizo cirujias el Dr, con nuestros impuestos");
			System.out.println("Nueva edad del Dir: " + edad);
		
		//Esta variable solo tiene alcance en el bloque
			int nAutos = 10;
		}
		//System.out.println("Número de autos: " + nAutos); Esta var no tiene alcance a nAutos  
		//Porque esta fuera del bloque
		
		int nAutos = 40;
		if (nAutos >20 && edad<80) {
			System.out.println("El Dr. puede conducir lo que quiera");
			int modeloAuto = 2019;
			//Tener un if, dentro de otro if, se llaman if anidados
			if (modeloAuto<2020) {
			System.out.println("El Dir. regalará estás antiguedades");
			modeloAuto-=5;
			System.err.println("N. de autos restantes: " + modeloAuto);
			
			}
		}
		/**
		 * En caso de que no se aplique la condición if, podemos usar la
		 * declaración else, para que realice otra acción.
		 * 
		 * Si se realiza la declaración if, la declaración else ya no se ejecuta
		 * 
		 * if (declaración){
		 * 	Bloque de código
		 * }
		 * else{
		 * 	Bloque de código
		 * }
		 */
		int billonesSP= 198;
		int nBitcoins = 256;
		if (billonesSP > 200 || nBitcoins>5892) System.out.println("Sea mi padrino");
		else System.out.println("No compro en tienedas conocidas");
	
		/**
		 * 	 if(condición) BloqueInstrucción
		 *		else if(condición nueva) bloqueInstrucción
		 *		else if (condición nuev) bloqueInstrucción	
		 *		else bloqueInstrucción
		 */
		int retencionISR = 37;
		int retencionIVA = 18;
		
		if (retencionISR <30 && retencionIVA <15) System.out.println("Me alcanza");
		else if (retencionISR<36 && retencionIVA <17)
			System.out.println("No me alcanza, pero algo es algo");
		else 
			System.out.println("Debo trabajar más, siempre contento =)");
	/**
	 * Una forma rápida de realizar una evaluación condicional es con
	 * el uso del operador ternario.
	 * (Condicional) ? "Instrucciones su es true" : "Instrucciones si es false";
	 * 
	 */
	boolean esFrontera = false;
	int impuestoAplicar = esFrontera ? 8 : 16;
	System.out.println("Impuesto a aplicar: " + impuestoAplicar);
	
	System.out.println("Tipo de región: " + ((impuestoAplicar >8)? "centro" : "frontera"));
	}
	}


