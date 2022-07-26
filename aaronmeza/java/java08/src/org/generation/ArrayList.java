package org.generation;


import java.util.Arrays;

import javax.swing.text.StyledEditorKit.ForegroundAction;

public class ArrayList {

	public static void main(String[] args) {
		
		int calificaciones[] = new int[5];
		String nombres[] = new String[5];
		int[] numId = {123, 45543, 2113, 45777, 2323};
		
		
		numId[1] = 0;
		
		System.out.println("Números de Ids: " + Arrays.toString(numId));
		
		int matriz [][] = {
				{1 ,2 ,3 ,4 ,5 } , 
				{10 ,11 ,12 ,13 ,14 ,15 }
				};
		System.out.println("Leer fila 1, columna 3: "+ matriz[0][2]);
		
		
		for (int i = 0; i < numId.length; i++) {
			System.out.println("Dato del Arreglo: " + numId[i]);
		}
		
		for(int id: numId) System.out.println("ID: " + id);
	
	
	
	
	
	
	//Buscar el valor 
	for(int i = 0; i < matriz.length; i++) {
		for(int j = 0; j < matriz[i].length; j++) {
			if(matriz[i][j] == 13)
				break;
			System.out.println(matriz[i][j] + " ");
		}
		
		
		}
	
	System.out.println("----------------------");
	ciclos:
	for(int [] fila: matriz) {
		for(int col: fila) {
			System.out.println("Valor: " + col);
			if(col == 13) break ciclos;
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	}
}
