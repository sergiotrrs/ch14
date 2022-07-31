package org.generation;

public class TryCatchTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/*
		 * Excepción
		 * 
		 * Una excepción es una situación
		 * no esperada durante la ejecución de un programa.
		 * 
		 * Existen dos tipos de excepciones.
		 * 
		 * A) Checked Exceptions o Excepciones que se heredan de clase Exception (parent o main)
		 * 		Se tiene que declarar excepción en firma del método (si no se usa el bloque try/catch)
		 * B) Unchecked Exceptions o excepciones que se heredan de la clase RunTimeException.
		 * 		No se está obligado a procesarlas.
		 * 		Es opcional el uso de try y catch.
		 * 
		 * 		Hay otros tipos: Error. Arrojados por JVM; son errores de los que no nos podemos recuperar.
		 * 		Las de tipo Exception o RuntimeException son provocados por nuestro código.
		 * 
		 * 
		 * Bloque Try-Catch
		 * 
		 * 	try: bloque de código para tratar de ejecutar líneas de instrucción
		 * 	catch: se ejecutará si ocurre un error en el bloque try
		 * 	finally: se ejecutará al finalizar el bloque try-catch
		 *   
		 *   
		 * 	Stacktrace exepción: conjunto de mensajes de error desde origen
		 * hasta último error.
		 * */
		
//		System.out.println("División que abre portales: ");
//		
//		double divide = 100/0;
//		System.out.println(divide);
		
//		System.out.println("ïndice no existente");
		Integer [] myArray = new Integer[5];
		try {
			double divide = 100/0;
			myArray[10] = 15;
		}
		catch (ArithmeticException error){
			System.out.println("Rdido un perro");
			System.out.println("Exc aritmético: " + error);
		}
		catch (ArrayIndexOutOfBoundsException e){
			System.out.println("Rdido un perro");
			System.out.println("Exc array: " + e);
		}
		catch (Exception e) {
			System.out.println("Ocurrió algo: " + e);
		}
		finally {
			System.out.println("Una lloradita y a seguirle");
		}
		
		/*
		 * try-catch anidados
		 * try {
		 * 		try {
		 * 		
		 * 		}
		 * 		catch {
		 * 		}
		 * }
		 * catch {
		 * }
		 * */
		
		System.out.println("A quién le digo te amo ahora?");

	}

}
