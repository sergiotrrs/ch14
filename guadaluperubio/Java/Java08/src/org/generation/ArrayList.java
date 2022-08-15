package org.generation;

import java.util.Arrays;
import java.util.Iterator;

public class ArrayList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
			/*En elnombre de la variable o en el tipo del arreglo
			 * Un arreglo lo debemos definir con corchetes
			 * en el nombre o en el tipo de elemento.
			 * 
			 * Se debe indicar el numero de elementos que tendrá
			 * o bien, se debe inicialzar con {}
			 * una vez definido, ya no puede crecer/disminuir dinamicamente.
			 * 
			 * El primer elemto del arreglo, comienza con el indice 0
			 * */
		
		int calificaciones[] =new int [5];
		String [] nombres = new String [5];
		int[] numId= {123, 2456, 1234, 9876, 2323};
		
		
		
		numId[1] = 0;
		System.out.println("Numero de IDs: "  +Arrays.toString(nombres));

		int matriz[][]= {
				{1, 2, 3, 4, 5},
				{10, 11, 12, 13, 14}
				
			};
		System.out.println("primer fila 1, columna 3: " + matriz [0][2]);
		
//		for (int i = 0; i < numId.length; i++) {
//			System.out.println("Datos del arreglo: " + numId[i]);
//			
//		}
//		for(int id: numId) System.out.println("ID: " + id);
		
		
		
		//Del arreglo matriz, imprimir hasta encontrar el valor de 13
		ciclos:
		for (int [] fila: matriz) {
			for (int col: fila){
				System.out.println("valor: " +col);
				if( col==13)  break ciclos;
			
				
			}
		}
	
	}

}
