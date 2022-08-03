package org.generation;

import java.util.Arrays;

public class Array {

	public static void main(String[] args) {
		/**
		 * Un arreglo lo tenemos que definir con corchetes en el nombre o en el tipo de elemento
		 * Se debe inidicar el número de elementos que tendrá, o bien, se debe inicializar con {}
		 * Una vz definido ya no puede cambiar su tamaño.
		 *
		 */
		int calificaciones[]=new int [5];
		String[] nombres=new String[5];
		int[] numId= {123,45543,2113,45777,2323};
		
		numId[1]=0;
		System.out.println("Números de id: "+Arrays.toString(numId));
		
		int matriz[][]= {
							{1,2,3,4,5},
							{10,11,12,13,14,15},
							{20,21,22,23,24,25}
						};
		System.out.println("Leeer fila 1, columna 3:"+matriz[0][2]);
		
		for (int i = 0; i < numId.length; i++) {
			System.out.println("Datos del arreglo:"+numId);
		}
		
		for(int dato: numId) {
			System.out.println("ID:"+dato);
		}
		
		//Ejercicio
		//Imprimir hasta encontrar el valor de 13
		/*
		salir:
		for(int i=0; i<matriz.length;i++) {
			for(int j=0;j<matriz[i].length;j++) {
				if(matriz[i][j]==13)
					break salir;
				System.out.print(matriz[i][j]+" ");
			}
			System.out.println("");
		}*/
		
		//System.out.println("Salió");
		
		
		salir:
		for(int [] array: matriz) {
			for(int dato :array) {
				if(dato==13)
					break salir;
				System.out.print(dato+" ");
			}
			System.out.println("");
		}
		System.out.println("Salió");	

	}//fin
}
