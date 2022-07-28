package org.generation;

import java.util.Arrays; //Importar la clase Array

public class Array {

	public static void main(String[] args) {
	//  
			/**
			 * Un arreglo lo tenemos que definir con corchetes en
			 * el nombre o en el tipo de elemento
			 * 
			 * se debe indicar el numero de elementos que tendra o bien
			 * se debe inicializar con{} 
			 * Una vez definido, ya no puede crecer/disminuir dinamicamente.
			 */
			
			int calificaciones[] = new int[5];
			String[] nombre = new String[5];
			int[] numId = {123,45543,2113,45777,2323};
			numId[1]=0;
			System.out.println("Numero de Id: " + Arrays.toString(nombre));
//			 int matriz[][] = {
//					 {  1,2,3,4,5},
//					 {11,8,9,7,23}
//			 };
//			 System.out.println("leer fila 1,columna 3: "+ matriz[0][2]);
//			 for (int i = 0; i < numId.length; i++) {
//				System.out.println("datos del arreglo " + numId[i] );
//			}
//	        for (int  : numId) {
//				
//			}
			//Ejercicio de matriz
			 int matriz[][] = { 
						{1,   2,  3,  4,  5} ,
						{10, 11, 12, 13, 14} 
						};
			 for (int i = 0; i < matriz.length; i++) {
				for (int j = 0; j < matriz[i].length; j++) {
					System.out.println("dato de matriz  "+"fila "+i+" columna "+j+" es: " + matriz[i][j]);
					if(matriz[i][j]==13)break;
				}
			 } 
				
					
			for (int[] is : matriz) {
				for (int is2 : is) {
					System.out.println(is2);
					if(is2 ==13)break ;
				}
			}

		}

}
