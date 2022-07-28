package org.generation;

public class OperacionesTest {

	public static void main(String[] args) {
		
//		int aristas = Operaciones.aristas;//Se usa directamente la clase
//		Operaciones sapitoChoco = new Operaciones(); // instanciando mi clase operaciones, aquí sapitoChoco ya es un objeto 
//		Operaciones sapitoJabon = new Operaciones(); 
//		sapitoJabon.precio = 9;
		
//		System.out.println("N. de aristas del molde: " + aristas);
//		System.out.println("Material del molde: " + Operaciones.material);
//		System.out.println("Precio Sapito Chocolate: " + sapitoChoco.precio);
//		System.out.println("Precio Sapito de Jabón " + sapitoJabon.precio);
//		
		//Operaciones.
//		sapitoJabon.suma(5, 10);
		
		//Usa directamente el método desde la clase
		Operaciones.suma(5, 10);
		Operaciones.suma(2, 12);
		
//		Operaciones calculadora = new Operaciones();
//		calculadora.suma(5, 10);
		
		int resultado = Operaciones.sumaRetorno(5, 8 /*argumentos*/);
		System.out.println("El resultado suma: " + resultado);
		System.out.println("El resultado resta: " + Operaciones.resta(resultado, 3));
		System.out.println("El resultado multiplicación: " + Operaciones.multiplicacion(resultado, 2));
		System.out.println("El resultado división: " + Operaciones.division(resultado, 4));
		System.out.println("El resultado raíz2: " + Operaciones.raizCuadrada(resultado));
		
		int[] myArray= {2,5,87,45,8};
		//System.out.println("Posición indice 2: " + myArray[2]);
		for (int i = 0; i < myArray.length; i++) {
			System.out.println("Valor en " + i + " : " + myArray[i]);
		}
		
		for (int numero: myArray) {
			System.out.println("Dato dentro del arreglo: " + numero);
		}
		
		/**
		 * 
		 * Actividad 1.
		 * 	Determinar cuantas letras P (minusculas y mayúsculas hay en 
		 * "Pepe Pecas pica papas con un pico y un palito"
		 * 
		 * 	Determinar el número mayor de:
		 * 
		 * 	{ 23, 56, 7, 98, 23, 1, 6}
		 * 		Usar una función math
		 * 
		 */
//		int[] myString= "Pepe Pecas pica papas con un pico y un palito";
//		//System.out.println("Posición indice 2: " + myArray[2]);
//		for (int i = 0; i < myString.length; i++) {
//			System.out.println("Hay estas ps en + i + " : " + myArray[i]);
//		}
		
		
		static int numMayor(int[] a) {
			int numeroMayor = 0;
//			for (int i = 0; i < a.length; i++) {
//				numeroMayor = Math.max(numeroMayor, a[i]);
//			}
			for (int numero: a) numeroMayor = Math.max(numeroMayor, numero);
			
			return numeroMayor;
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

		
		
		
	}

}
