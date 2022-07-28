package org.generation;

public class Array {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/**
		 * Un arreglo lo tenemos que definir con corchetes 
		 * en el tipo o en el nombre de elemento
		 * 
		 * Se debe indicar el número de elelemntos que tendrá
		 * constructor 
		 * o inicializarse con {}
		 * 
		 * No puede cambiarse luego de definirse
		 * */
		
		double calificaciones [] = new double [5];
		String[] nombres = new String [5];
		int [] numID= {1321, 541, 33, 654, 77};
		numID[1] = 0;
		System.out.println("Numeros de IDs: " + numID.toString());
		//numID[11] = 0;
		
		int matriz [] [] = {
				{1, 2, 3 , 4, 5},
				{10,11,12,13,14 }
		};
		System.out.println("Leer fila 1, columna 3: " + matriz[0][2]);
		
		for (int i = 0; i < numID.length; i++) {
			System.out.println("Num array: "  +numID[i]);
		}
		
		//for variable of array
		for (int id : numID) {
			System.out.println("Num array: "  + id);
		}
		
		for (int i=0; i<matriz.length; i++) {
			for (int j=0; j < matriz[1].length; j++) {
				int num = matriz[i][j];
				System.out.println(matriz[i][j]);
				if (num == 13) {
					System.out.println("Que hasta el 13 dice... Rompe el loop");
					break;
				}
			}
		}
		
		for (int [] filas: matriz) {
			for (int columnas: filas) {
				System.out.println(columnas);
				if (columnas == 13) {
					System.out.println("Que hasta el 13 dice... Rompe el loop forEach");
					break;
				}
			}
		}

		



	}

}
