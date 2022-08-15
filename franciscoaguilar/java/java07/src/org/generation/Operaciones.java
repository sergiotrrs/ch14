package org.generation;

public class Operaciones {
	//ATRIBUTOS DE MÉTODOS (OBJETOS)
	int precio = 18;  
	
	//ATRIBUTOS DE LA CLASE
	static int aristas = 4; 
	static String material = "plástico";
	
	static void suma (int a, int b) {
		System.out.println("la sumatoria es: "+(a+b));
		//la función no tiene retorno al ser definida como void
		//static permite que se utilice directamente 
	}
	
	//En las funciones con retorno se debe cambiar el void por el tipo
	// de retorno en este caso es un int
	static int sumaRetorno(int a, int b) { // firma del método: aqui se declaran los parámetros
	return a + b;//argumentos (son los parámetros pero cuando se utilizan en la función se llaman argumentos)
	}
	
	static int resta(int a, int b) { // firma del método: aqui se declaran los parámetros
		return a - b;//argumentos (son los parámetros pero cuando se utilizan en la función se llaman argumentos)
		}
	
	static int multiplicacion(int a, int b) { // firma del método: aqui se declaran los parámetros
		return a * b;//argumentos (son los parámetros pero cuando se utilizan en la función se llaman argumentos)
		}
	
	static double division(int a, int b) { // firma del método: aqui se declaran los parámetros
		return (double)a / b;//argumentos (son los parámetros pero cuando se utilizan en la función se llaman argumentos)
		}
	
	static double raizCuadrada(int a) {
		return Math.round( Math.sqrt(a)*100)/100.0;
	}
	
	static int cuentaP(String texto) {
		char letra;
		int contador = 0;
		
		for (int i = 0; i< texto.length();i++) {
			letra = texto.charAt(i);
			if(letra == 'p' || letra == 'P') contador++;
		}
		
		return contador;
	}
	
	
	static int numMay(int arreglo[]) {
		int n_max=0;
		for(int numero: arreglo) {
		 n_max=Math.max(n_max, numero);
		}
	return n_max;
	}
	
}
