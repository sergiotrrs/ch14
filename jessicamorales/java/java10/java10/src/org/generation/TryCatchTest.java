package org.generation;

public class TryCatchTest {

	public static void main(String[] args) {
		/**
		 * Excepciones.
		 * 
		 * Una excepción es una situación no esperada
		 * durante la ejecución de un programa..
		 * 
		 * Existen dos tipos de excepciones.
		 * 
		 * A) Checked Exepciones o Excepciones que se heredan
		 * de la clase Exception. Se tien que declarar la Excepción
		 * en la firma del método (Si no se usa el bloque try y catch).
		 * 
		 *  Los tipos de Error son arrogjads por la JVM, que son 
		 *  errores de los que no nos podemos recuperar. En cambio
		 *  las de tipo Exception o RuntimeException son provocados
		 *  por nuestro código.
		 *  
		 * ¿Que es el bloque try y catch?
		 * 
		 * try: bloque de código para tratar de ejecutar lineas de instrucción
		 * catch: se ejecutará si ocurre un error en el bloque try
		 * finally: se ejecutará al finalizar el bloque try o catch.
		 * 
		 * El stacktrace de una excepción es el conjunto de mensajes
		 * de error desde el origen del error hasta la última clase
		 * que recibe el error.		 
		 *
		 */
		
//		System.out.println("Se realiza una división");
//		double divide = 100/0.0;
//		System.out.println(divide);
		
		System.out.println("Agregamos un dato a un índice que no existe");
		int[] myArray = {2,3,4,5};
		try {
			myArray[10] = 25;
		}
		catch(ArrayIndexOutOfBoundsException error) {
			System.out.println("No se puede continuar" + error);
		}
		catch(ArithmeticException e) {
			System.out.println("Error en la división" + e);
		}
		finally {
			System.out.println("Termina el bloque try-catch");
		}
		System.out.println("Se continua la ejecución del programa");
	}
}
