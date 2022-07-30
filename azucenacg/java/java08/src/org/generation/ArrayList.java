package org.generation;

import java.util.Arrays;

public class ArrayList {

	public static void main(String[] args) {
		/**
		 * Un arreglo lo tenemos que definir con corchetes
		 * en el nombre o en el tipo de elemento 
		 * 
		 * Se debe indicar el número de elementos que tendrá
		 * o bien, se debe inicializar con {}
		 * Una vez definido, ya no puede crecer/disminuir
		 */
		int calificaciones[]=new int[5];
		String[] nombres=new String[5];
		int[] numId= {123, 45543, 2113, 45777, 2323};
		
		numId[1]=0;
		System.out.println("Números de IDS: "+ Arrays.toString(nombres));
		
		int matriz[][]= {
				{1,2,3,4,5},
				{10,11,12,13,14,13}
		};
		
		System.out.println("Leer fila1, col 3: "+ matriz[0][2]);
		
		for (int i=0;i<numId.length;i++) {
			System.out.println("Dato del arreglo: "+ numId[i]);
		}
		
		for (int id:numId) System.out.println("ID: "+id);
		
		for (int[] fila:matriz) {
			for (int col:fila) {
				if (col==13) {
					System.out.println("se encontró el: "+ col);
					continue;
				}
				
			System.out.println("numero: "+ col);
			}
		}
		

	}
}
