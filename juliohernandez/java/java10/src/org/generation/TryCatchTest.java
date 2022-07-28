package org.generation;

public class TryCatchTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/**
		 * Excepciones
		 * Una excepción es una situación no esperada
		 * durante la ejecución de un programa.
		 * 
		 * Dos tipos:
		 * A) Checked Exceptions o Excepciones que se heredan
		 *de la clase Exception. Se tiene que declarar la Excepción
		 *en la firma del método (Si no se usa el bloque try y catch)
		 *
		 *B) Unchecked Exceptions o Excepciones que se heredan de la clase 
		 *RunTimeException. No se está obligado a procesarlas.
		 *
		 *Es opcional el uso de try y catch
		 *
		 *Tipos Error son arrojados por la JavaVirtualMachine JVM, que son errores de los que no nos 
		 *podemos recueperar. En cambio las de tipo Exception o RunTime son provocadas por nuestro código
		 *Ej: cuando la memoria se acaba
		 *
		 *¿Qué es el bloque try y catch?
		 *try: bloque de cód. para tratar de ejecutar líneas de instrucción. 
		 *catch: se ejecutará si ocurre un error en el bloque try. 
		 *finally: (no necesario) se ejecutará al finalizar el bloque try o catch
		 * 
		 *El stacktrace de una excepción es el conjunto de mensajes de error desde el origen del error hasta la última clase que recibe el error
		 *
		 */
		
		/*
		 * System.out.println("Se realiza una division"); double divide = 100/0;
		 * System.out.println("divide");
		 */
		
		System.out.println("Agregamos un dato a un índice que no existe");
		int[] myArray = {2,3,4,5};
		
		try {
			double logaritmo = Math.log(0.0);
			try {				
				myArray[10]=25;			
			}
			catch (ArrayIndexOutOfBoundsException error) { //Clase de excepción y quién va a tomar la variable
				System.out.println("No se puede continuar"+error);
			} //¿Y si esa no es la clase de excepción??
			double divide = 100/0;
		}
		//Si sólo se pone una clase de excepción pero había más de un error, se detiene el progama
		catch(Exception e) { //Clase superior de errores: No se conoce el error, se responde de manera general
			System.out.println("Error en la división "+ e);
		}
		finally {
			System.out.println("Se finaliza el bloque try-catch");
		}
		System.out.println("Se continua la ejecución del programa"); //Nos podemos recuperar!

	}

}
