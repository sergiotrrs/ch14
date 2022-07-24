package org.generation;

public class OperacionesTest {

	public static void main(String[] args) {
//		//Se usa directamente la clase
//		int aristas = Operaciones.aristas;
//		//Instancear la clase Operaciones
//		//Para crear un objeto de la clase
//		Operaciones sapitoChoco = new Operaciones(); //Se manda llamar a la clase con su constructor
//		Operaciones sapitoJabon = new Operaciones(); //Se manda llamar a la clase con su constructor
//		sapitoJabon.precio = 9;
//		
//		System.out.println("N. de aristas del molde " + aristas);
//		System.out.println("Material del molde " + Operaciones.material);
//		System.out.println("Precio Sapito Chocolate " + sapitoChoco.precio);
//		System.out.println("Precio Sapito Jabón " + sapitoJabon.precio);
//		
//		//Operaciones
//		//sapitoJabon.suma(5,10);
		
		//Usar directamente mi método desde la clase
		Operaciones.suma(5,10);
		Operaciones.suma(2,2);
		
		//Operaciones calculadora = new Operaciones();
		//calculadora.suma(5,10);
		int resultado = Operaciones.sumaRetorno(5, 8);
		System.out.println("El resultado de la sumatoria es: " + resultado);
		System.out.println("El resultado de la resta es: " + Operaciones.resta(resultado, 3));
		System.out.println("El resultado de la multiplicación es: " + Operaciones.multiplicacion(resultado, 2));
		System.out.println("El resultado de la división es: " + Operaciones.division(resultado, 4));
		System.out.println("El resultado de la raíz Cuadrada es: " + Operaciones.raizCuadrada(3.14));
		
		String texto = "A Cinthia le gustan los limones";
		//Se puede especificar el final del texto que se quiere extraer
		System.out.println("¿A quién le gustan los limones? " + texto.substring(2,9));
		//Imprime el caracter que se encuentra en determinado índice
		char letra = texto.charAt(2);
		System.out.println("Primera letra: " + letra);
		//Imprime el número total de caracteres
		System.out.println("N. de letras: " + texto.length());
		
		//Dar de alta un arreglo
		int[] myArray= {2,5,87,45,8};
		//System.out.println("Posición indice 2: " + myArray[2]);
		//Itera dependiendo a los parámetros que se establezcan
		for(int i = 0; i < myArray.length; i++) {
			System.out.println("Valor en " + i + ": " + myArray[i]);
		}
		//Itera por cada uno de los lementos del arreglo
		for(int numero: myArray) {
			System.out.println("Dato dentro del arreglo: " + numero);
		}
		//Los arreglos en Java son estáticos, uno vez que se establecen los elementos ya no pueden cambiarse
		
		/**
		 * Actividad 1:
		 * 	Determinar cuantas letras P (minúsculas y mayúsculas) hay en 
		 *  "Pepe Pecas pica papas con un pico y un palito"
		 *  
		 *  Determinar el número mayor de:
		 *  {23,56,7,9,23,1,6}
		 *  Usar función Math
		 */
		//int num = Operaciones.letraP(num);
		//System.out.println("El total de letras p es: " + Operaciones.letraP(num));
	}
}