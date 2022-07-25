package Ollin;

import java.util.Arrays;

import javax.swing.plaf.synth.SynthOptionPaneUI;

public class ArrayList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 * 
		 * El primer elemento del arreglo, comienza con el indice 0
		 */
		int calificaciones[]=new int[5];
		String[] nombres= new String[5];
		int[] numId= {123,45543,2113,45777,2323};
		
		
		
		numId[1]=0;
		System.out.println("Numeros de IDs: "+ Arrays.toString(numId));//de esta forma imprimimos el jhas (numero unico de nuestro objeto) que le asisgna el numero java
		
		int matriz[][]= {
				{ 1, 2, 3, 4, 5},
				{10,11,12,13,14}
				};
		
		System.out.println("Leer fila 1, columna 3: " + matriz[0][2]);
		
		for (int i = 0; i < numId.length; i++) {
			System.out.println("Dato del arreglo: "+numId[i]);
		}
		
		for(int id:numId) System.out.println("ID:"+ id );
		
		//Del arreglo matriz, imprimir hasta encontrar el valor de 13
		
		ciclos:
		for (int i = 0; i < matriz.length; i++) {
			
			for (int j = 0; j < matriz[i].length; j++) {
				if(matriz[i][j]==13) {
					System.out.println("13");
					break ciclos;
				}
				System.out.println(matriz[i][j]);
			}
		}
		
		
		
		ciclos:
		for(int[] filas: matriz) {
			for(int col:filas) {
				System.out.println("valor "+ col);
				if(col==13)break ciclos;
			}
			
		}
		
		
	
		
		
		
		
	}

}
