package org.generation;

public class TryCatchTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 * Excepciones.
		 * 
		 * una excepción es una situación no esperada
		 * durabte la ejecución de un programa.
		 * 
		 * existen dos tipos de excepciones:
		 * 
		 * a) checked Exceptions o Excepcione que se heredan 
		 * de la calse Excepcion. Se tiene que declarar la Excepcion
		 * en la firma del método (si no se usa el bloque try y catch)
		 * 
		 * b Unchecked Exceptions que se heredan de l clase 
		 * RunTimeException. No se esta obligando a procearlas.
		 * ES opcional el uso de try y catch.
		 * 
		 * 
		 * Los tipos Error son arrojados por las JVM, que son errores de los
		 * que no nos podemos recueperar. En cambio las tipo
		 * Exceptions o RunTimeException son provocadas por nuestró código.
		 * 
		 * ¿Que es el loque try y catch?
		 * 
		 * try: bloque de código para tratar de ejecutar lineas de instruccin
		 * catch: se ejecutará si ocurre un erros en el bloque try
		 * finally: se ejecutará al finalizar el bloque try o catch.
		 * 
		 * El stacktrace de una excepción  es el conjunto de mensajes de error desde 
		 * el origen del error hasta la ultima clase que recibe le error
		 * 
		 */
//		
//		System.out.println("se realiza una división");
//		double divide = 100/ 0;
//		System.out.println(divide);
//		
		System.out.println("agregamos un dato a un indice que no existe");
		int[] myArray = {2, 3, 4, 4};
		try {
			double divide =100/0;
		myArray[10]=25;
		
		}
		catch(ArrayIndexOutOfBoundsException error) {
		System.out.println("No se puede continuar" +error);
	} 
		catch(ArithmeticException e){
			System.out.println("Error en la division " + e);
	}
		
		System.out.println("Se continua con la ejecución del programa");
		System.out.println("finaliza mi blooque de try");
	}
	
}
