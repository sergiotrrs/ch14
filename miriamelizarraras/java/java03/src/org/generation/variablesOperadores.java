package org.generation;

public class variablesOperadores {

		public static void main(String[] args) {
			/**
			 *BYTE:
			 * 	El valor mínimo es bit, puede ser 1 o 0
			 * 	1 byte = 8 bits. (00000000 - 11111111) = 256 posibles combinaciones, valor mínimo -128 máximo 127
			 * 	El tipo byte puede almacenar los números del -128 al +127
			 * 	NO ACEPTA DECIMALES
			 * 
			 * SHORT:
			 * 	El valor 
			 * 	1 short = 16 bits
			 * 	NO ACEPTA DECIMALES
			 * 
			 * INT:
			 * 	El valor va de -2^31 al 2^31 -2147483648 a 2147483647
			 * 	1 int = 32 bits
			 * 	NO ACEPTA DECIMALES
			 * 
			 * LONG: 
			 * 	El valor va de -9223372036854775808 a 9223372036854775807
			 * 
			 * 
			 * FLOAT:
			 * 
			 *	 Max Float: 3.4028235E38
			 *	 Max Float: 1.4E-45
			 * 
			 * DOUBLE: 
			 * 
			 * 
			 * 
			 * BOOLEAN:
			 * 
			 * CHAR:
			 * 
			 * 
			 * 
			 * 
			 */
			byte datoByte = 15;
			short datoShort = 1000;
			int datoInt = 150225;
			//Para Long se indica una L al final
			long datoLong = 122443432L;
			
			System.out.println("Max Byte: " + Byte.MAX_VALUE);			
			System.out.println("Min Byte: " + Byte.MIN_VALUE);	
			
			System.out.println("Max Byte: " + Short.MAX_VALUE);			
			System.out.println("Min Byte: " + Short.MIN_VALUE);	
			
			System.out.println("Max Byte: " + Integer.MAX_VALUE);			
			System.out.println("Min Byte: " + Integer.MIN_VALUE);	
			
			System.out.println("Max Byte: " + Long.MAX_VALUE);			
			System.out.println("MIN Byte: " + Long.MIN_VALUE);	
			
			//Dato de tipo float, hay que establecer una f al final, sino es tomado como tipo LONG
			float datoFloat = 1256.256f;
			System.out.println("Max Float: " + Float.MAX_VALUE);
			System.out.println("Max Float: " + Float.MIN_VALUE);
			
			double datoDouble = 5256.256;
			System.out.println("Max Double: " + Float.MAX_VALUE);
			System.out.println("Max Double: " + Float.MIN_VALUE);
			
			
			//Para los booleanos los valores pueden ser true o false
			boolean datoBool = true;
			
			//El tipo de dato char almacena un caracter
			char datoChar = 'a';
			datoChar = 'E'; //carácter
			datoChar = 69; // númerico
			//datoChar = '\u0045'; // código único 
			System.out.println("El caracter 045: " + datoChar);
			
			/**
			 * Para declarar una variable se realiza lo siguiente:
			 * tipoDato nombreVariable = valor;
			 * tipoDato puede ser cualquier primitivo u objeto.
			 * 
			 * ****A partir de la versión 10 de Java se puede usar la palabra reservada 'var'
			 * 
			 * 
			 */
			
			var edad = 18;
			var esAceptado =  true;//con var se debe dar el valor automatico a la variable
			var caracter = 'a';//como aquí se escribió var se escribe la letra a en lugar del valor decimal
			//edad = 'i' // se imprimie el valor decimal de i en lugar de la letra i
			
			System.out.println("El \"caracter\" \n es: " + caracter);
			
			//Conversión de tipo de datos
			int edadAbue = 25871;
			byte edadAbueActual = 25;
			int edadEnVidas = edadAbueActual;
			System.out.println("La edad de abue es: " + edadEnVidas);
			
			int coquita2lts = 129;//Cuando se quiere guardar una variable más grande que el tipo de dato se da la vuelta en al  número de datos disponibles de ese dato, por ejemplo
			//byte tiene la capacidad de -128 a +127, para guardar un 129 variable termina guardada en -127, le da una vuelta al numero de datos de byte
			byte coquitaMini = (byte) coquita2lts;
			
			int costo = (int)9.86;
			
			System.out.println("La cantidad de líquido es: " + coquitaMini); 
			System.out.println("La cantidad de líquido es: " + costo);
			
			//Para indicar literales de números se puede hacer uso de _
			//Esto podría ayudar visualmente a la comprensión.
			
			costo = 2_5_6_5_8_9;
			System.out.println("Valor de costo: " + costo);
			float precio = 589_478.785_45f;
			
			//costo = 0x0a; //número 10 decimal en representación hexadecimal
			//costo = 0b1010; //número 10 decimal en representación hexadecimal
			costo = 012; //n.10 decimal en representación octal;
			
			System.out.println("Valor de costo: " + costo);
			
			//Recordar que se puede poner 
			//No se puede inicializar la variable con número.
			int $myVar;
			int _myVar;
			//int 1myVAr; No se puede inicializar con número 
			int $my12V_ar;
			
			/**
			 * new Class {
			 * 		atributos_objeto; // fields o non-static fields
			 * static atributo_clase;  // static fields
			 * 
			 * 	EN JS	function acción(parametros){ //parametros de entrada
			 * 				let var // variable
			 * 			}
			 *         }
			 *
			 *	
			 *
			 * 
			 * 
			 */
			
			
			
		}
		
		
}
 