package org.generation;

public class TryCatchTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 * Excepciones.
		 * 
		 * Una excepción es una situación no esperada
		 * durante la ejecución de un progroama.
		 * 
		 * Existe dos tipos de excepciones
		 * 
		 * A) Checked Excetions o Excepciones que se heredan
		 * de la clase Exception. Se tiene que declarar la Excepción
		 * en la firma del método (Si no se usa el bloque try y catch)
		 * 
		 * 
		 * B) Unchecked Exceptions o Excepciones que se heredan
		 * de la clase RunTimeException. No se está obligado a procesarlas.
		 * Es opcional el uso de try y catch
		 * 
		 * Los tipos Error son arrojados por la JVM, que son errores de los
		 * que no nos podemos recuperar. En cambio las de tipo
		 * Exception o RuntimeException son provocadas por nuestro código.
		 * 
		 * ¿Que es el bloque try ycatch?
		 * 
		 * try: Bloque de código para tratar de ejecutar lineas de instrucción.
		 * catch: Se ejecutará si ocurre un error en el bloque tyr
		 * finally: Se ejecutará al finalizar el bloque try o catch.
		 * 
		 * El stacktrace de una exceptión es el conjunto de mensajes de
		 * error desde el origen del error hasta la última clase
		 * que recibe el error.
		 * */
		
		//System.out.println("Se realiza un división");
		//double divide = 100/0;
		//System.out.println(divide);
		
		//claseSuperior nombreObj = instancia ClaseDerivada
		//De donde proviene de todas las clases ----> Java Lan. objet
		System.out.println("Agregamos un dato a un indice que no existe");
		int[] myArray = {2,3,4,5};
		try {
			double divide = 100/0;
			myArray[10] =25;
		}
		catch (ArrayIndexOutOfBoundsException error){
			System.out.println("No se puede continuar " + error);
		}
		catch(Exception e) {
			System.out.println("Ocurrio algo " + e);
		}
		//catch(ArithmeticException e) {
		//	System.out.println("Error en la división " + e);
		//}
		System.out.println("Se continua la ejecución del programa");
		
		
		
		
	}

}
