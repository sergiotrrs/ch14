package org.generation;

public class TryCatchTest {

	public static void main(String[] args) {
		/**
		 * Excepciones
		 * 
		 * Una excepción es una situación no esperada
		 * durante la ejecución de un programa. 
		 * 
		 * Existen dos tipos de excepciones:
		 * 
		 * A) Checked Excepcions o Excepciones que se heredan
		 * de la clase Excepcions. Se tiene que declarar la Excepción 
		 * en la firma de métodos(Si no se usa el bloque try y catch).
		 * 
		 * B) Unchecked Exceptions o Excepciones que de heredan 
		 * de la clase RunTimeExcepcion. No se está obligado a procesarlas.
		 * Es opcional el uso de try y catch.
		 * 
		 * Los tipos Error son arrojados por la JVM, que son errores de los
		 * que no nos podemos recuperar. En cambio las de tipo
		 * Excepcion o RunTimeExcepcion son provocados por nuestro código.
		 * 
		 * ¿Qué es el bloque try y catch?
		 * 
		 * try: bloque de código para tratar de ejecutar lineas de instrucción
		 * catch: se ejecutará si ocurre un error en el bloque try
		 * finally: se ejecutará al finalizar el bloque try o catch
		 * 
		 * El stacktrace de una excepción es el conjunto de mensajes
		 * de error desde el origen del error hasta la última clase 
		 * que reciba el error.
		 * 
		 */
		
//		System.out.println("Se realiza una división");
//		double divide = 100/0;
//		System.out.println(divide);
		
//		claseSuperior nombreObj = instancia claseDerivada;
		
		System.out.println("Agregamos un dato a un indice que no existe");
		int[] myArray = {2, 3, 4, 5};
//		myArray[10] = 25;
		try {
			double divide = 100/1;
			try {
				myArray[10] = 25;
			}
			catch(ArrayIndexOutOfBoundsException error) {
			System.out.println("No se puede continuar " + error);
			}
		}
		catch(Exception e) {
			System.out.println("Ocurrió algo " + e);
		}
		finally {
			System.out.println("Finaliza mi bloque try-catch");
		}
//		catch(ArithmeticException e) {
//			System.out.println("Error en la división " + e);
//		}
		System.out.println("Se continua la ejecución del programa");
	}
}
