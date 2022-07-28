package java08;
import java.util.Arrays;

public class ArrayList {

	public static void main(String[] args) {
		/**
		 * Un arreglo lo tenemos que definir con corchetes
		 * en el nombre o en el tipo de elemento.
		 * 
		 * Se debe indicar el número de elementos que tendrá 
		 * o bien, se debe inicializar con  {  }
		 * Una vez definido ya no puede crecer/disminuir dinámicamente.
		 * 
		 */
		int calificaciones[] = new int [5];
		String[] nombres = new String[5];
		int [] numId = {123, 45543, 2113, 45777, 2323};
		
		numId[1] = 0;
		System.out.println("Número de IDs: " + Arrays.toString(nombres));
		
		int matriz[][] = { 
				{1, 2, 3, 4, 5} , 
				{10, 11, 12, 13, 14} 
				};

		System.out.println("Leer fila 1, columna 3: " + matriz[0][2]);//empieza seleccionando filas y luego columnas FC, Fight club o Feliz Cumpleaños
		
		for (int i = 0; i < matriz.length; i++) {
			System.out.println("Dato del arreglo: " + numId[i]);
		}
		
		for (int id: numId) System.out.println("ID: " + id);
		
		//Del arreglo matriz imprimir hasta encontrar el valor 13.
		
		for (int i = 0; i < matriz.length; i++) /*primero se pone */ {
			for (int j = 0; j < matriz[i].length; j++)
			System.out.println("Se encontró el " + matriz[i]);
		}
		
		
		
		/*Ejemplos de cómo resolver el ejercicio - de Francisco Aguilar*/
		
//		for (int i = 0; i < matriz.length; i++) {
//			for (int j = 0; j < matriz[i].length; j++) {
//				valor = matriz[i][j];
//				if(valor == 13) {
//					System.out.println("Se encontró el 13");
//					break;}
//				System.out.println(" valor matriz: "+ matriz[i][j]);
//				
//		System.out.println("**********For each***********");
//		int valor;
//		for(int[] filas : matriz) {
//			for(int columnas : filas) {
//				valor = columnas;
//				if(valor == 13) {
//					System.out.println("Ya encontramos el 13 Huele a gas!");
//					break;}
//				System.out.println(" valor matriz: "+ columnas);
//			}
//		}

//			}
//			
//		}
		

		

	}

}
