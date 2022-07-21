package org.generation;

public class Operaciones {
	// Van los Atributos de objetos

	int precio = 18;

	// Atributos de la clase
	static int aristas = 4;
	static String material = "plástico";

	/*
	 * Para definir los métodos (funciones) se realiza la sig.
	 * 
	 * Modif_acceso Retorno NombreFunción (ParámetrosFunción) {
	 * 
	 * }
	 */

	static void suma(int a, int b) {
		System.out.println("La sumatoria es: " + (a + b));
		// No tengo return, por lo tanto no tengo retorno
		// Si no tengo retorno, debo indicarlo con void
	}

	static int sum(int a, int b) { // parámetros de la función
		return a + b;
	}

	static int resta(int a, int b) { // parámetros de la función
		return a - b;
	}

	static int multiplicacion(int a, int b) { // parámetros de la función
		return a * b;
	}

	static double division(int a, int b) { // parámetros de la función
		return (double) a / b;
	}

	static double raiz(int a) { // parámetros de la función
		return Math.round(Math.sqrt(a) * 100) / 100.0; // Para convertir a dos decimales
	}

	static int letrasP(String frase) {
		frase = frase.toLowerCase();
		int contador = 0;
		// String fraseArreglo[];

		// para poder contar las letras inicio un for
		for (int i = 0; i < frase.length(); i++) {
			if (frase.charAt(i) == 'p') {
				// fraseArreglo[i]= frase.charAt(i);
				contador++;
			}
		}
		// System.out.println("Hay en la frase "+ contador+ "letras P");
		return contador;
	}

	static int numMayor(int a[]) {
		int numeroMayor = 0;
		for (int i = 0; i < a.length; i++) {
			numeroMayor = Math.max(numeroMayor, a[i]);
		}
		//O puede ser así con un ForEach
		// for(int numero : a) numeroMayor = MAth.max(numeroMayor,numero);
		return numeroMayor;
	}

}