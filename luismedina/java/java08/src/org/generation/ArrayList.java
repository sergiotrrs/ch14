package org.generation;

import java.util.Arrays;

public class ArrayList {

	public static void main(String[] args) {
		// Un arreglo lo tenemos que definir con corchetes en el nombre o en el tipo de
		// elemento
		// Se debe indicar el numero de elementos que tendra o bien, se debe inicializar
		// con {}
		// Una vez definido ya no puede crecer/dismunir dinamicamente
		// El primer arreglo comienza con el indice 0

		int calificaciones[] = new int[5];
		String[] nombres = new String[5];
		int[] numId = { 123, 45543, 2113, 45777, 2323 };
		numId[1] = 0;
		System.out.println("Numeros de IDs: " + Arrays.toString(nombres));

		int matriz[][] = { { 1, 2, 3, 4, 5 }, { 10, 11, 12, 13, 14, 15 } };

		System.out.println("Leer fila 1, columa 3: " + matriz[0][2]);

		for (int i = 0; i < numId.length; i++) {
			System.out.println("Dato del arreglo: " + numId[i]);
		}

		for (int id : numId)
			System.out.println("ID: " + id);
		// Del arreglo matriz, imprimir hasta encontrar el valor de 13.
		
		
		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				if (matriz[i][j]==13) {
					break;
				}
			System.out.println("El valor del arreglo Matriz es: " +matriz[i][j]);
			}
		}
		
		for (int[] filas : matriz) {
			for (int columnas : filas) {
				if (columnas==13) {
					break;
				}
				System.out.println("El valor del forEach es :"+ columnas);
			}
		}

		
		
		
		
	}

}
