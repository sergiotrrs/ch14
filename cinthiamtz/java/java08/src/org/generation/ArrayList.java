package org.generation;

import java.util.Arrays;

public class ArrayList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Un arrglo se debe de definir con corchote en el nombre de la variable
		//o en el tipo de elemento 
		
		//Se debe de indicar el numero de elementos que tendra
		// o bien, se debe de incialiar con{}
		//Una vez definido, ya no puede crecer o disminuir dinamicamente
		
		
		int calificaciones[] = new int[5];
		String[] nombres = new String [5];
		int[] numId= {123,45543,2113,45777,2323};
		
		numId[1] = 0;
		System.out.println("Numero de IDs" + Arrays.toString(nombres));
		
		
		int matriz[] [] = { 
				{1,   2,  3,  4,  5},
				{10, 11, 12, 13, 14,} };
		
		System.out.println("Leer fila 1, columan 3 : " + matriz [0][2]);
		
		for (int i = 0; i < numId.length; i++) {
			System.out.println("Dato del arreglo: "+ numId[i]);
		}
		
		
		
		for (int id: numId) System.out.println("ID: " + id);
		
		
		//DEl arreglo matriz, impimier hata encontrar el valor de 13
		
		
		
		
		for (int i = 0; i < matriz.length; i++) {
			for (int j = 0; j < matriz[i].length; j++) {
				
				System.out.println(" valor: "+ matriz[i][j]+ " valor i: "+i+"Valor j: "+j);
				if(matriz[i][j]==13) {
					break;
				}
			}
		}
		
		
		System.out.println("**********For each***********");
		int valor;
		for(int[] filas : matriz) {
			for(int columnas : filas) {
				valor = columnas;
				if(valor == 13) {
					System.out.println("Ya encontramos el 13 Huele a gas!");
					break;}
				System.out.println(" valor matriz: "+ columnas);
			}
		}

		
		
		


		
		
		
		

	}

}
