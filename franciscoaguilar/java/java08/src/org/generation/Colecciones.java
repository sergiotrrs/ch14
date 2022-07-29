package org.generation;

import java.util.Arrays;

public class Colecciones {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		/**
		 * Un arreglo lo tenemos que definir con corchetes
		 * en el nombre de la variable o en el tipo de elemento.
		 * 
		 * Se debe indicar el número de elementos que tendrá o bien, 
		 * se debe inicializa con {} 
		 * Una vez definido, ya no puede crecer/disminuir dinámicamente
		 * 
		 * */
		
		
		int calificaciones[]= new int[5];
		String[] nombres = new String[5];
		int[] numId = {123,45543, 2113,45777,2323};
		
		numId[1]=0;
		//System.out.println("Número de Id's: "+numId); // [I@3fee733d devuelve este hash (dato único o número con el que se puede determinar un objeto)
		System.out.println("Número de Id's: "+Arrays.toString(numId));
		System.out.println("Número de Id's: "+Arrays.toString(nombres));
		
		 System.out.println("******************************");
		 System.out.println("");
		int matriz[][]= {
				{1, 2, 3, 4, 5} ,
				{10, 11, 12, 13, 14}
				}; 
		System.out.println("Fila 1, columna 3: "+ matriz.length);
		
		 System.out.println("************** iterar un arreglo****************");
		 System.out.println("");
		
		
		//Formas de iterar un arreglo
		for (int i = 0; i < numId.length; i++) {
			System.out.println("Dato del arreglo: "+numId[i]);		
		}
		
		
		 System.out.println("************ iterar un arreglo con forEach******************");
		 System.out.println("");
		for(int dato: numId) 
			System.out.println("Dato del arreglo Id: "+dato);	
		
		 System.out.println("*********Ejercicios: Imprimir los valores de la matriz hasta llegar al 13 ********************");
		 System.out.println("");
		
		int valor;
		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				valor = matriz[i][j];
				if(valor == 13) {
					System.out.println("Se encontró el 13");
					break;}
				System.out.println(" valor matriz: "+ matriz[i][j]);
				
			}
//			
		}
		
		System.out.println("*******Ejercicio con: For each***********");
		valor=0;
		primero://Esto es un identificador para decirle al programa a cuál ciclo dirigirse después del break
		for(int[] filas : matriz) {
			for(int columnas : filas) {
				valor = columnas;
				if(valor == 13) {
					System.out.println("Ya encontramos el 13 Huele a gas!");
					break primero;}//Aqui le decimos al programa a dónde se irá después del break con el identificador
				System.out.println(" valor matriz: "+ columnas);
			}
		}
		
		
	}

}
