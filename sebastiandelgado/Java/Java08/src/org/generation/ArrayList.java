package org.generation;

import java.util.Arrays;

public class ArrayList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 * Un arreglo lo tenemos que definir con corchetes
		 * en el nobre o bien en el tipo de elemento.
		 * 
		 * Se debe indicar el número de elementos que tendrá
		 * o bien, se debe inicializar ocn {}
		 * Una vez definido, ya no puede crecer/ disminuir dinámicamente.
		 * 
		 * El primer elemento del arreglo comienza con el índice 0
		 */
		
		int calificaciones [] = new int [5];
		String [] nombres = new String [5];
		int [] numId = {123, 45543, 2113, 45777, 2323};
		
		numId[1] = 0;	
		System.out.println("Números de IDs: " + Arrays.toString(numId));
		
		//Para hacer matríz solo se agrega otro corchete
		
		int matriz[][] = { 
				{1,  2,  3,  4,  5}, 
				{10, 11, 12, 13, 14},
				{103, 145,152,190,212}};
		
		System.out.println("Leer fila 1, columna 3: " +matriz[0][2]);
		
		for (int i = 0; i < numId.length; i++) {
			System.out.println("Dato del arreglo: " + numId[i]);
		}
		//Otra forma es con ForEach
		for(int id : numId) System.out.println("ID: "+ id);
		
		
		/*
		 * Del arreglo matríz, imprimir hasta encontrar el valor de 13
		 */
		
		for (int i=0; i<matriz.length; i ++) {
			for (int j=0; j<matriz[i].length; j++) {
				System.out.println("Dato "+ matriz[i][j]);
				if(matriz[i][j] == 13 ) {
					System.out.println("Se encontró el número 13 :O ");
					break;
				}
			}
		}
		
		//Con for each
		
		for (int[] i : matriz ) {
			for(int j : i) {
				System.out.println("Dato "+ j);
				if(j == 145 ) {
					break;
				}
			}
				
		}
		
	}

}
