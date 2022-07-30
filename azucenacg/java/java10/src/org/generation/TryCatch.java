package org.generation;

public class TryCatch {

	public static void main(String[] args) {
		/**
		 * Excepciones 
		 * 
		 * Una excepción es una situación no esperada
		 * durante la ejecución de un programa
		 * 
		 * Existen dos tipos de exepciones
		 * 
		 * A) Checked Exeption o excepciones heredadas
		 * de la clase Exeption. 
		 * Se tiene que declarar la exepción en la firma
		 * del método 
		 * (si no se usa el bloque try y catch)
		 * 
		 * B)Unchecked exeptions o exepciones que se heredan
		 * de la clase RunTimeExeption. No se está obligado a 
		 * procesarlas
		 * 	Es opcional el uso de try y catch 
		 * 
		 * Los tipos error son arrojados por la jvm
		 * (Java Virtual Machine) que son los errores
		 * de los que no nos podemos recuperar
		 * en cambio las de tipo exeption o runtimeexeption
		 * son provocadx por nuestro codigo 
		 * 
		 *  que es el bloque trycatch?
		 *  
		 *  try: bloque de codigo que trata de ejecutar lineas
		 *  de instrucción 
		 *  catch: se ejecutará si ocurre un error en el bloque try
		 *  finally: se ejecutará al finalizar el bloque try o catch
		 *El stracktrace de una exepción es el conjunto de mensajes 
		 *de errordesde el origen del error hasta la última clase que recibe el error.

		 */
		
		System.out.println("Agregamos un dato a un indice que no existe");
		int[]myArray= {2,3,4,5};
		try {
			double divide=100/0;
			myArray[10]=25;
		}
		catch (ArrayIndexOutOfBoundsException error) {
			System.out.println("No se puede continuar " + error);
		}
		
		catch(Exception e) {
			System.out.println("ocurrió algo: "+e);
		}
		//si no cachamos los errores, ya no podemos 
		//continuar con el programa

		System.out.println("Se continua la ejecución del programa");
		
	}
}
