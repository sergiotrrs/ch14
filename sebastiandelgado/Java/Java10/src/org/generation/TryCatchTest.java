package org.generation;

public class TryCatchTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		/*
		 * Excepciones.
		 * 
		 * Una excepción es una situación no esperada
		 * durante la ejecución de un programa.
		 * 
		 * Existen dos tipos de excepciones.
		 * 
		 * A) Checked Exceptions ó Excepciones que se heredan
		 * de la clase Exception. se tiene que declarar la Excepción
		 * en la firma del método (si no se usa el bloque try y catch)
		 * 
		 * B) Unchecked Exceptions o Excepciones que se heredan de la
		 * clase RunTimeException. No se está obligado a procesarlas.
		 * Es opcional el uso de try y catch
		 * 
		 * Los tipos Error son arrojados por la JVM, que son errores de los
		 * que no nos podemos recuperar. en cambio las de tipo 
		 * Exception o RuntimeException o RuntimeException son provocados por
		 *  nuestro código.
		 *  
		 *  ¿Qué es el bloqe try y catch?
		 *  
		 *  Try: Bloque de código para tratar de ejecutar líneas de instrucción
		 *  Catch: Se ejecutará si ocurre un error en el bloque try
		 *  Finally: se ejecutará al finalizar el  bloque try o catch.
		 *  
		 *   El stracktrace de una excepción es el conjunto de mensajes de 
		 *   error desde el origen del error hasta la última clase que 
		 *   recibe el error.
		 * 
		 */
		
		//Ejemplo 1
//		System.out.println("Se realiza una división. ");
//		double divide = 100/0;
//		System.out.println(divide);
		
		
		//Ejemplo 2
		System.out.println("Agregamos un dato a un índice que no existe. ");
		int [] myArray = {1,2,3,4,5};
		
		try {
			double divide = 100/0;
			myArray[10] = 25;	
		}
		catch(ArrayIndexOutOfBoundsException error) {
			System.out.println("No se puede continuar " + error);
		}
		catch (ArithmeticException e) {
			System.out.println("Error en la división "+ e);
		}
		System.out.println("Se continúa la ejecución del programa. ");
		
	}

}
