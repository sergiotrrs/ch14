package java08;

import java.util.Arrays;

public class ArrayList {

	public static void main(String[] args) {
		/*
		 * // TODO Auto-generated method stub int calificaciones[] = new int[5]; // 5
		 * elementos String[] nombres = new String[5]; // 5 elementos int[] numId = {
		 * 123, 45543, 2113, 45777, 2323 };
		 * 
		 * numId[1] = 0; System.out.println("Números de ID's" +
		 * Arrays.toString(nombres));
		 * 
		 * 
		 * 
		 * System.out.println("Leer fila 1, columna 3: " + matriz[0][2]);
		 * 
		 * //Iterar en un arreglo for (int i=0; i<numId.length; i++) {
		 * System.out.println("Dato del arreglo: "+numId[i]); }
		 * 
		 * for (int id: numId)System.out.println("id: "+id);
		 * 
		 */
		
		/**
		 * Ejercicio Del arreglo matriz, imprimir hasta encontrar el valor de 13
		 */
		
		int matriz[][] = { { 1, 2, 3, 4, 5 }, { 10, 11, 12, 13, 14 } };
		superfor: 
		for (int[] arreglo : matriz) {
			
			for (int elemento : arreglo) {

				System.out.println("Elemento: " + elemento);
				if (elemento == 13)
					break superfor;
					
			}
		}
		
		int matriztriple[][][]= {
				{{1,1,1},{0,0,0},{1,1,1}},
				{{0,0,0},{1,0,1},{0,1,0}},
				{{1,1,0},{0,0,1},{1,0,0}}
		};
		
		for (int matrices[][]:matriztriple) {
			for (int arreglo[] : matrices) {
				for (int elemento : arreglo) {
					System.out.print(elemento+" ");
				}
				System.out.print(" ");
			}
			System.out.println("");
		}
		
		
	}
}

