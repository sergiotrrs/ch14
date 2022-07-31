package org.generation;

public class TryCatchTest {

	public static void main(String[] args) {
		/**
		 * Excepciones.
		 * 
		 * Unaexcepción es una situación no esperada
		 * duarante la ejecución de un programa.
		 * 
		 * Existen dos tipos de excepciones.
		 * A)Checked Exceptions o excepciones que se heredan
		 * de la calse. Se tiene que declara la Excepcióm
		 * en la firma del método(Sino se usa el bloque try y catch)
		 * 
		 * B)Unchecked Exceptions o Excepciones que se heredan de 
		 * la clase RunTimeException. No se está obligado a procesarlas.
		 * Es opcional el uso de try y catch.
		 * 
		 * Los tipos error son arrojados por la JVM, que son errores de 
		 * los que no nos podemos recuperar. En cambio las de tipo
		 * Exception o RuntimeException son provocadas por nuestro código.
		 * 
		 * ¿Qué es el bloque try catch?
		 * try: bloque de código para tratar de ejecutar lineas de instrucción. 
		 * catch: se ejecutará si ocurre un error en el bloque try.
		 * finally: bloque que se ejecutará al finalizar el bloque try o catch.
		 * 
		 * El stacktrace de una excepción es el conjunto de mensajes
		 * de error desde el origne del error hasta la última calse que recibe el error.
		 * 
		 */

//		System.out.println("Se realiza una división");
//		
//		double divide = 100/0;
//		System.out.println(divide);
		
		//claseSuperior nombreObj = instancia ClaseDerivada
		
		System.out.println("Agregamos un dato a un índice que no existe");
		int[] myArray = {2,3,4,5};
		try {
			double divide = 100/0;
			try {
				myArray[10] = 25;
				}
			catch(ArrayIndexOutOfBoundsException error) {
				System.out.println("No se puede continuar "+error);
			}
		}
		catch (Exception e) {
			System.out.println("Ocurrió algo "+e);
		}
//		catch(ArithmeticException e) {
//			System.out.println("Error en la división "+ e);
//		}
		System.out.println("Se continúa la ejecución del programa");
		
	}

}
