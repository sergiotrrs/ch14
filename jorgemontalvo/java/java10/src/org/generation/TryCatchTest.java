package org.generation;

public class TryCatchTest {

	public static void main(String[] args) {
		/**
		 * Excepeciones
		 * 
		 * Una excepeción es una situación no esperada
		 * durante la ejecución de un programa.
		 * 
		 * Existen dos tipos de excepeciones
		 * 
		 * A) Checked Exceptions o Excepciones que se heredan
		 * de la clase Exception. Se tien que declarar la Excepcion
		 * en la firma del método (Si no se usa el bloque try y catch)
		 * 
		 * B) Unchecked Exceptions o Excepciones que se heredan
		 * de la clase RunTime Exception. No se esta obligado a procesarlas.
		 * Es opcional el uso de try y catch.
		 * 
		 * Los tipos Eroor son arrrojados por la JVM, que son errores de los 
		 * que no nos podemos recuperar. En cambio las de tipo
		 * Exception o RuntimeException son provocados por nuesto código.
		 * 
		 * ¿Qué es el bloque try y catch?
		 * 
		 * try: bloque de código para tratar de ejecutar líneas de instrucción
		 * catch: se ejecutara si ocurre un error en el boque try.
		 * finally: se ejecutará al finalizar el bloque try o catch.
		 * 
		 * El stacktrace de una excepción es el cojunto de mensajes 
		 * de error desde el origen del error hasta la última clase
		 * que recibe el error.
		 */
		
//		System.out.println("Se realiza una división");
//		double divide = 1000/0;
//		System.out.println(divide);
		
//		claeSuperior nombreOnj = instancia ClaseDerivada
		
		System.out.println("Agregamos und dato a un indice que no existe");
		int [] myArray = {1,2,3,4};
		try {
			double divide = 100/0;
			try {
				
				myArray[10] = 25;
			}
			
			catch(ArrayIndexOutOfBoundsException error) {
				System.out.println("No se puede continuar " + error);
			}
		}
//		catch(Exception e) {
//			System.out.println("Ocurrio algo " + e);
//		}
		catch(ArithmeticException er) {
			System.out.println("Error en la división " + er);
		}
		finally {
			System.out.println("Finaliza mi bloque try-catch");
		}
		System.out.println("Se continua la ejecución del programa");
		

	}

}
