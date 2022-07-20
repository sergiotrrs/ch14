package org.generation;

public class Operaciones {
	//Atributos de objetos
	int precio = 18;
	//Atributos de clase
	static int aristas = 4;
	static String material = "plastico";
	
	/**
	 * Para métodos o funciones se realiza:
	 * 
	 * modificadorDeAcceso tipodeRetorno nombreFunción(param) {
	 * 		bloque
	 * }
	 * 
	 * */
	
	static void suma (int a, int b) {
		System.out.println("La sumatoria es: " + (a+b));
	}
	
	static int sumaConReturn (int a, int b) {
		return a + b;
	}
	static int resta (int a, int b) {
		return a - b;
	}
	static int multiplicacion (int a, int b) {
		return a * b;
	}
	static double division (int a, int b) {
		return (double) a / b;
	}
	static double raizCuadrada (double a) {
		return ((int) (Math.sqrt(a)*1000)) / 1000.0;
		//return (Math.round(Math.sqrt(a) * 1000)) / 1000.0;
	}
	
	
	static double maxNumber (double a, double b){
				return Math.max(a, b);
	}
	
}
