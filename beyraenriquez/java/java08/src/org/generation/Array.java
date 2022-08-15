package org.generation;

import java.util.Arrays;

public class Array {

	public static void main(String[] args) {
		/**
		 * Un arreglo lo tenemos que definir con corchetes
		 * en el nombre de la variable o en el tipo de elemento.
		 * 
		 * Se debe indicar el número de elementos que tendrá
		 * o bien, se debe inicializar con { }
		 * Una vez definido, ya no puede crecer/disminuir dinámicamente.
		 * 
		 * El primer elemento del arreglo, comienza con el indice 0.
		 */
		int calificaciones[] = new int[5];
		String[] nombres= new String[5];
		int[] numId = {123, 45543, 2113, 45777, 2323};
		
		numId[1] = 0;
		System.out.println("Números de IDs: " + Arrays.toString(nombres));
		
		int matriz[][] = { 
				{1,  2,  3,  4,  5} , 
				{10, 11, 12, 13, 14, 15} 
				};
		System.out.println("Leer fila 1, columna 3 : " + matriz[0][2]);
		
		for (int i = 0; i < numId.length; i++) {
			System.out.println("Dato del arreglo: " + numId[i]);
		}
		
		for(int id: numId) System.out.println("ID: " + numId);
		
		//Del arreglo matriz encontrar el número 13
		int ciclo;
		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				ciclo = matriz[i][j];
				if(ciclo == 13) {
					System.out.println("Encontrado, valor: " + ciclo);
					break;
				}
				System.out.println("Valor: " + matriz[i][j]);
			}

		}

	}
	
}
