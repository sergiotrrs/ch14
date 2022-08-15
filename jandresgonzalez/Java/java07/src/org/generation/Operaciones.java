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
	
	//Ejercicio
	/**
	 * Función que revisa cuántas veces
	 * se repite una letra en una cadena
	 * {String} (cadena) Es una cadena cualquiera dada
	 * {char} (letra) Es una letra. Debe darse en mayúscula para la función
	 * *
	 * */
	static void checaLetras (String cadena, char letra) {
		letra = Character.toUpperCase(letra);
		cadena = cadena.toUpperCase();
		char [] letras = cadena.toCharArray();
		int contador = 0;
		char letter = letra;
		//System.out.println(letras);
		for (int i= 0; i < letras.length; i++) {
			if (letter == letras[i]) {
				contador++;
			}
			else {
				continue;
			}
		}
		System.out.println("La letra '" + letter + "' se repite " + contador + " veces.");
		System.out.println("en '" + cadena.toLowerCase() + "'.");
	}
	
	/**
	 * Función que regresa el número mayor de dos números dados
	 * {double} (a) Es un número dado
	 * {double} (b) Es un segundo número dado
	 * *
	 * */
	static double maxNumber (double a, double b){
				return Math.max(a, b);
	}
	
	
	/**
	 * Función que determina el número mayor en un array
	 * Utiliza una especie de algoritmo burbuja para ver
	 * el número mayor
	 * {array} (numberArray) Un array de números
	 * *
	 * */
	static void setMaxNumber (int [] numberArray) {
		int max = 0;
		int newMax = 0;
		start:
		for (int i=0; i<numberArray.length; i++) {
			if (i==0) {
				continue start;
			}
			else {
				newMax = (int) Operaciones.maxNumber(numberArray[i-1], numberArray[i]);
				if (newMax > max) {
					max = newMax;
				}
				else {
					continue;
				}
			}
		}
		System.out.println("El número mayor del array es: " + max);
	}
	
}
