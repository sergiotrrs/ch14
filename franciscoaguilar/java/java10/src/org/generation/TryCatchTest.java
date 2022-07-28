package org.generation;

public class TryCatchTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/**
		 * Excepciones:
		 * 
		 * Una excepción es una situación esperada
		 * durante la ejecución de un programa
		 * 
		 * Existen dos tipos de excepciones
		 * 
		 * a) Checked exceptions o Excepciones que se heredan.
		 * de la clase Exception. Se tiene que declarar la excepción
		 * en la firma del método(Si no se usa el bloque try y catch)
		 * 
		 * b)Unchecked exceptions o Excepciones que se heredan 
		 * de la clase RunTimeException 
		 * No se está obligado a procesarlas.
		 * Es opcional el uso de try y catch
		 * 
		 * Los tipos Error son arrojados por la JVM (JAVA VIRTUAL MACHINE) 
		 * que son errores de los que no nos podemos recuperar
		 * (Ej: gastarse o acabarse la memoria). 
		 * En cambio  las de tipo Exception o RunTimeException 
		 * son provocados por nuestro código
		 * 
		 * 
		 * Bloque Try y Catch
		 * 
		 * try: Bloque de código para tratar de ejecutar líneas de instrucción 
		 * catch: se ejecutará si ocurre un error en el bloque try
		 * finally: se ejecutará al finalizar el bloque try o catch
		 * 
		 * El stacktrace de una excepción es el conjuto de mensajes
		 * de error desde el origen del error hasta la última clase que recibe
		 * el error.
		 * 
		 * 
		 */

//		System.out.println("Se realiza una división");
//		double divide = 100/0;
//		
//		System.out.println(divide);
		
		System.out.println("Agregamos un dato a un índice que no existe");
		int[] myarray = {2,3,4,5};
		try {
			double divide = 100/0;
			try {
				myarray[10]=25;
				
			}
			catch(ArrayIndexOutOfBoundsException error){
				System.out.println("No se puede continuar " +error);
				
			}
			
		}
		catch(Exception e) {
			System.out.println("Ocurrió algo " +e);
			
		}
		finally {
			System.out.println("Finaliza bloque try-catch");
			
		}
		
		System.out.println("Se continua la ejecución del programa");
		
		
		
		
		
	}
	

}
