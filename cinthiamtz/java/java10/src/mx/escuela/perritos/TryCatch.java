package mx.escuela.perritos;

public class TryCatch {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/**
		 * Errores de tipo de ejecucion:
		 * Excepciones: Una excepcion es una situacion no esperada durante la 
		 * ejecución de un programa: Dos tipos:
		 * a)Checked exceptions o excepciones que se heredan de la clase exception. Se tiene
		 * que declarar la Excepcion en la firma del metodo. (Sin se usa el bloque try y catch)
		 * 
		 *  b)Unchecked Exceptions  o exceciones que se heredan de la clase RunTimeException. No
		 *  se esta obligado a procesarlas. Es opcional el uso de try y catch
		 *  
		 *  
		 *  
		 *  Los tipos error (Ejemplo termina la memoria) son arrojados por la JVM, que son errores de los que nonos podemos 
		 *  recuperar. En cambio las de tipo Exception o RunTimeException son provocados por nuestro codigo
		 *  
		 * * ¿Que es el bloque try y catch?
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
		
//		System.out.println("Se realiza una divisón");
//		double divide = 100/0;
//		System.out.println(divide);
		//claseSuperior nombreObj =
		
		System.out.println("Agregamos un dato a un indice que no existe");
		
		int [] myArray= {2,3,4,5};
		try {
			double divide =100/0;
		myArray[10]=25;
		}
		
		
		catch(ArrayIndexOutOfBoundsException error) {
			System.out.println("No se puede continuar"+ error);
		}
		catch(Exception e) {
			System.out.println("Ocurrio algo "+e);
		}
		
		
//		catch(ArithmeticException e) {
//			System.out.println("Error de la divisi+on "+ e);
//		}
//		
		
		System.out.println("Se continua la ejecución del programa");
		
	}

}
