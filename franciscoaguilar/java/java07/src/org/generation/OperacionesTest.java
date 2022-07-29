package org.generation;

public class OperacionesTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stu
		
//		int aristas = Operaciones.aristas; //Solo accede a los atributos de clase
//		Operaciones sapitoChoco = new  Operaciones(); //Instanciando la clase operaciones accede a los atributos de objeto 
//		Operaciones sapitoJabon = new  Operaciones(); //Instanciando la clase operaciones accede a los atributos de objeto 
//		sapitoJabon.precio = 9;
//		
//		System.out.println("Número de aristas del molde: "+aristas);
//		System.out.println("Material del molde: "+Operaciones.material);
//		System.out.println("Precio Sapito Chocolate: $"+ sapitoChoco.precio);
//		System.out.println("Precio Sapito Jabón: $"+ sapitoJabon.precio);
//		

		//Operaciones
		//sapitoJabon.suma(5,10);
		
		//Usar directamente mi método desde la clase
//		Operaciones.suma(5, 10);
//		Operaciones.suma(2, 2);
		
//		Operaciones calculadora = new Operaciones(); //instanciando el objeto con new Operaciones()
//		calculadora.suma(5, 9);
		
		int resultado = Operaciones.sumaRetorno(5, 8);
		System.out.println("El resultado suma: "+resultado);
		System.out.println("El resultado resta: "+Operaciones.resta(resultado, 3));
		System.out.println("El resultado multiplicacion: "+Operaciones.multiplicacion(resultado, 2));
		System.out.println("El resultado división: "+Operaciones.division(resultado, 4));
		System.out.println("El resultado raiz cuadrada: "+Operaciones.raizCuadrada(resultado));
		
		String texto = "A Cinthia le gustan los limones";
		System.out.println("A quién le gustan los limones? "+ texto.substring(2, 9));//substring (indice donde inicia, indice donde termina-1)
		
		char letra = texto.charAt(2);
		System.out.println("Primera letra: "+letra);
		System.out.println("No. total de letras: "+texto.length());
		
		int myArray[] = {1,2,3,4,5,7,6,9,8,11,10};
		
		for(int i = 0; i< myArray.length;i++) {
			System.out.println("posicion indice "+i+ ":  "+ myArray[i]);
		}
		
		for(int numero: myArray) {
			System.out.println("Dato dentro del arreglo: "+numero);
		}
		
		/***
		 * Actividad 1: determinar cuántas letras p hay en 
		 * "Pepe Pecas pica papas con un pico y un palito"  
		 */
		String frase =  "Pepe Pecas pica papas con un pico y un palito";
		System.out.println("Número de P's: "+Operaciones.cuentaP(frase));
		
		
		/***
		 * Actividad 2: Determinar el número mayor de un arreglo
		 * {23,56,7,98,23,1,6}
		 */
		
		int arreglo_nums[] = {23,56,7,98,23,1,6};
		System.out.println("Número mayor: "+Operaciones.numMay(arreglo_nums));
		
		
	}
	

}
