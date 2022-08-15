package java08;

import java.util.Arrays;
import java.util.Iterator;

public class Array {

	public static void main(String[] args) {
	/*
	 * Un arreglo lo tenemos que definir con corchetes
	 * en el nombre de la variable o en el tipo de elemento.
	 * 
	 * Se debe indicar el número de elementos que tendrá
	 * o bien, se debe inicializar con {  }
	 * Una vez definido, ya no puede crecer/disminuir dinámicamente. 
	 * 
	 * El primer elemento del arreglo, comienza con el indice 0
	 * */
		int calificaciones[] = new int[5];
		String[] nombres= new String[5];
		int[] numId = {123,45543, 2113, 45777, 2323};
		
		numId[1] = 0;
		System.out.println("Numeros de IDs: " + Arrays.toString(calificaciones)); //numIdTe entrega un número hexadecimal
		
		int matriz[][] = { 
				{1, 2, 3, 4, 5} ,
				{10, 11, 12, 13, 14, 15},
				{103,113,123,133,143}
				};
		
		System.out.println("Leer fila1, columna 3: " + matriz[0][2]); //Siempre va filas y columnas (Feliz cumpleaños)
		//Interar
		
		for (int i = 0; i < matriz.length; i++) {
			System.out.println("Dato del arreglo: "+ numId[i]);
		}
		for(int id: numId) System.out.println(("ID: " +  id));	
		
		
	//Del arreglo imprimir cada uno de los valores hasta que se encuentre el numero 12
	
//		int valor;
//		for (int i = 0; i < matriz.length; i++) {
//			for (int j = 0; j < matriz[i].length; j++) {
//				valor = matriz[i][j];
//				if(valor == 13) {
//					System.out.println("Se encontró el 13");
//					break;}
//				System.out.println(" valor matriz: "+ matriz[i][j]);
//				
//			}
//			
//		}
//		
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
		ciclos:
			for (int[]fila: matriz) {
				for (int col: fila) {
					System.out.println("Valor: " + col);
					if(col == 13 ) break ciclos;
				}
			}
		
	}
}
	
	


