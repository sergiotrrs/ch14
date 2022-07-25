package org.generation;

public class Operaciones {
	// Atributos de objetos
	int precio = 18;
	// Atributos de la clase
	static int aristas = 4;
	static String material = "Plastico";

	// PAra definir los metodos (funciones) se realiza la sig.
	// Modificador de acceso Retorno NombreFuncion(ParametrosFuncion){}

	static void suma(int a, int b) {
		System.out.println("La sumatoria es: " + (a + b));
		// No tengo return por lo tanto no tengo retorno
		// Si no tengo retorno, debo indicarlo con void
	}

	static int sumaRetorno(int a, int b) {
		return a + b;
	}

	static int restar(int a, int b) {
		return a - b;
	}

	static int multiplicar(int a, int b) {
		return a * b;
	}

	static double dividir(int a, int b) {
		return (double) a / b;
	}

	static double raiz2(double a) {

		return Math.round(Math.sqrt(a)*1000)/1000.0;
	}
	
	static int contarP(String texto) {
		int contador=0;
		texto=texto.toUpperCase();
		for (int i = 0; i < texto.length(); i++) {
			if (texto.charAt(i)=='P') {
				contador++;
			}
		}
		return contador;
	}
	
	static int numMax(int[] arreglo) {
		int maximo=arreglo[0];
		for (int i = 0; i < arreglo.length; i++) {
			maximo=Math.max(maximo, arreglo[i]);			
		}
		return maximo;
		
	}
	

}
