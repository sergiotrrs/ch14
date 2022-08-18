package org.generation;

public class Operaciones {
	// Atributos de objeto
		int precio = 18;
		// Atributos de la clase
		static int aristas = 4;
		static String material = "plastico";

		/**
		 * Para definir los métodos(funciones) se realiza la sig.
		 * 
		 * Modif_acceso Retorno NombreFuncion(ParámetrosFuncion) {
		 * 
		 * }
		 */

		static void suma(int a, int b) {
			System.out.println("La sumatoria es: " + (a + b));
			// No tengo return, por lo tanto no tengo retorno
			// Si no tengo retorno, debo indicarlo con void
		}

		static int sumaRetorno(int a, int b) {
			return a + b;
		}

		static int resta(int a, int b) {
			return a - b;
		}

		public static int multiplicacion(int a, int b) {
			return a * b;
		}

		static double division(int a, int b) {
			return (double) a / b;
		}

		static double raizCuadrada(double a) {
			// return Math.sqrt(a);
			// return Math.round( Math.sqrt(a) );
			// return ((int)((Math.sqrt(a)*1000)) )/1000.0;
			return Math.round(Math.sqrt(a) * 100) / 100.0; // 1.772004514666935*100-> 1777.20045->1777/100.0=1.77
		}

		static int pNum(String textoP, char letra) {
			textoP = textoP.toUpperCase();
			int contador = 0;

			for (int i = 0; i < textoP.length(); i++) {
				if (textoP.charAt(i) == letra)
					contador++;
			}
			return contador;
		}
		
		static int numMayor(int[] a) {
			int numeroMayor = 0;
//			for (int i = 0; i < a.length; i++) {
//				numeroMayor = Math.max(numeroMayor, a[i]);
//			}
			for (int numero: a) numeroMayor = Math.max(numeroMayor, numero);
			
			return numeroMayor;
		}

		
}


