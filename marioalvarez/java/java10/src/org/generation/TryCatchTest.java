package org.generation;

public class TryCatchTest {

	public static void main(String[] args) {
		/*
		 * Excepcciones.
		 * 
		 * Una Excepción es una situación no esperada durante la ejecución de un programa
		 * 
		 * Existe dos tipos de excepciones de tiempo de ejecución
		 * 
		 * a) Checked Exceptions o Exceptiones que se  heredan de la clase Exception. 
		 * Se tiene que declarara la excepción  en la firma del método (si no se usa el bloque try-catch)
		 * 
		 * b) Unchecked Exception o Exceptiones que se heredan  de la clase RunTimeException  que se heredan
		 * de la clase RunTimeException. No se está obligdo a procesarlas.
		 * Es opcional el uso de try y catch
		 * 
		 * Los tipos Error son arrojados por la JVM, que son errores de los que no nos podemos recuperar. En cambio las de tipo
		 * Exception o RuntimeException son provocadas por nuestro código. (no hay como evitarlo)
		 * 
		 * ¿Que es el bloque try y catch?
		 * 
		 * try:Boque de código para tratar de ejecutar lineas de intrucción
		 * catch: se ejecutará si ocurre un error en el bloque
		 * finally: se ejecutará al finalizar el bloque try-catch
		 * 
		 * el StackTrace de una excepción es el conjunto de mensajes de error, desde el origen del error  hasta la ultima clase que recibe el error 
		 * 
		 * */
		
		try {
			System.out.println("Se realiza una división");
			//Arithmetic Exception
			int division=100/0;		
			System.out.println("Resultado:" +division);
			System.out.println("Agregamos un dato a un indice que no existe");
			int [] array= {1,2,3};
			//Array Index Out Of Bounds
			array[10]=25;
		}catch(ArrayIndexOutOfBoundsException e){
			System.out.println("No se puede continuar "+e);
		}catch(ArithmeticException e) {
			System.out.println("Error  en la división "+e);
		}catch(Exception e) {
			System.out.println("Hubo un Error "+e);
		}finally {
			System.out.println("Se ejecuta sin importar que");
		}
		
		System.out.println("Se continua la ejecuación del programa");
		

	}

}
