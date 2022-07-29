package java08;

import java.util.Arrays;

public class Array {

	public static void main(String[] args) {
		/**
		 *  Un arreglo lo tenemos que definir con corchetes
		 *  en el nombre o en el tipo de elemento.
		 *  
		 *  Se debe indicar el número de elemento que tendrá
		 *  o bien, se debe inicializar con {}
		 *  Una vez definido, ya no puede crecer/disminuir dinámicamente.
		 *  
		 *  El primer elemento del arreglo, comienza con el índice 0
		 */
		int calificaciones[] = new int[5];
		String[] nombres = new String[5];
		int[] numId = {123, 455, 844, 255, 41};
		
		numId[1] = 0;
		System.out.println("Numeros de ID's: " + Arrays.toString(nombres));
		
		int matriz[][] = {
				{ 1,  2,  3,  4,  5},
				{10, 11, 12, 13, 14}
				};
		System.out.println("Leer fila 1, columna 3: " + matriz[0][2]);
		
		for (int i = 0; i < numId.length; i++) {
			System.out.println("Dato del arreglo: " + numId[i]);
			
		}
		for (int dato: numId) System.out.println("ID: " + dato);
		
		//Del arreglo matriz, imprimir hasta encontrar el valor de 13
		// for convencional
		ciclo:
		for (int j = 0; j < matriz.length; j++)
		for (int k = 0; k< matriz[j].length; k++){
			System.out.println("Datos del arreglo: " + matriz[j][k]);
			if (matriz[j][k] == 13) break ciclo;
		}
		//De la forma for each
		ciclo:
		for (int [] fila: matriz)
			for (int columnas: fila) {
				 System.out.println("ID: " + columnas);
				 if (columnas == 13 ) break ciclo;
			}
			
	}
}
