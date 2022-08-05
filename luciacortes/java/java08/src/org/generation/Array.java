package org.generation;

import java.util.Arrays;

public class Array {

	public static void main(String[] args) {
		/**
		 * Un arreglo lo tenemos que definir con corchetes
		 * en el nombre de la variable o en el tipo de elementos.
		 * 
		 * Se debe indicar el número de elemento que tendrá
		 * o bien se debe inicializar con { }
		 * Una vez definido ya no puede crecer o disminuir dinámicamente
		 * 
		 * El primer elemento del arreglo comienza con el ídice 0
		 */
		int calificaciones[] = new int[5];
		String[] nombres = new String[5];
		int[] numID = {123, 45543, 2113, 45777, 2323};
		
		numID[1] = 0;
		System.out.println("Número de ID's: "+Arrays.toString(nombres));
		
		int matriz[][] = { 
				{1, 2, 3, 4, 5} , 
				{10,11,12,13,14,15} 
		}; 
		System.out.println("Leer fila 1, columna 3: "+ matriz[0][2]);
		
		for (int i = 0; i < numID.length; i++) {
			System.out.println("Dato del arreglo: "+numID[i]);
			
		};	
		
		int valor;
		salir:
		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				valor = matriz[i][j];
				if(valor == 13) {
					break salir;
					}
				System.out.println(" Stop en 13: "+ matriz[i][j]);
			}
		};
		int busca;
		out:
		for(int[] mat: matriz) {
			for(int ma:mat){
				busca = ma;
				if (busca == 13) break out;
				System.out.println("Detenerse en 13: "+ma);
			} 
		};
	}
}

	


