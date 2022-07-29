package org.generation;

public class TryCathTest {

	public static void main(String[] args) {
		/**
		 * Excepciones. Una excepcion es una situacion no esperada durante la ejecucion
		 * de un programa. Existen 2 tipos de excepciones a) Checked Exception o
		 * Excepciones que se heredan de la clase Exception. Se tiene que declarar la
		 * Excepcion en la firma del metodo (Si no s usa el bloque try y catch)
		 * 
		 * b)Uchecked Exception o Excepciones que se heredan de la clase
		 * RunTimeException. No se esta obligado a procesarlas. Es opcional el uso de
		 * try y catch
		 * 
		 * Los tipos Error son arrojador por la JVM (Java Virtual Machine) que son
		 * errores de los que no nos podemos recuperar, en cambio las de tipo Exception
		 * o RunTimeException son provocadas por nuestro codigo ¿Que es el bloque try y
		 * cath? Try: bloque de codigo para tratar de ejecutar linas de intruccion.
		 * Catch: se ejecuta si ocurre un error en el bloque try. Finally: se ejecutara
		 * al finalizar el bloque try o catch.
		 * 
		 * El StackTrace de una excepcion es el conjunto de mensajes de error desde el
		 * origen del error hasta la ultima clase que recibe el error.
		 */

//		System.out.println("Se realiza una division");
//		double divide = 100/0;
//		System.out.println(divide);

//		claseSuperior nombreObj = instancia ClaseDerivada;
		
		System.out.println("Agregamos un dato a un indice que no existe");
		int[] myArray = { 2, 3, 4, 5 };
		try {
			double divide = 100/0;
			myArray[10] = 25;
		} catch (ArrayIndexOutOfBoundsException error) {
			System.out.println("No se puede continuar " + error);
		}
//		catch (Exception e) {
//			System.out.println("Error en algo "+e);
//		}
		catch (ArithmeticException e) {
			System.out.println("Error en la division "+e);
		}
		System.out.println("Se continua la ejecucion del programa");
	}

}
