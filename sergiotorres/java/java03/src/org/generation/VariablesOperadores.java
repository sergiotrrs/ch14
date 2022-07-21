package org.generation;

public class VariablesOperadores {

	public static void main(String[] args) {
		/**
		 * El valor mínimo es bit que puede ser 1 o 0
		 * 1 byte = 8 bits. (00000000 - 11111111) = 256 combinaciones
		 * En tipo byte puedo almacenar los números
		 * del -128 al +127 
		 * 
		 */
		byte datoByte= 15;		
		short datoShort = 1000;
		int datoInt = 150225;
		//Para Long se indica una L al final
		long datoLong = 1224566912255858L;
		
		System.out.println("Max Byte: " + Byte.MAX_VALUE);
		System.out.println("Min Byte: " + Byte.MIN_VALUE);
		System.out.println("Max Short: " + Short.MAX_VALUE);
		System.out.println("Min Short: " + Short.MIN_VALUE);
		System.out.println("Max Int: " + Integer.MAX_VALUE);
		System.out.println("Min Int: " + Integer.MIN_VALUE);
		System.out.println("Max Long: " + Long.MAX_VALUE);
		System.out.println("Min Long: " + Long.MIN_VALUE);
		
		//Dato de tipo float, hay que establecer una f al final
		float datoFloat = 1256.256f;
		System.out.println("Max Float: " + Float.MAX_VALUE);
		System.out.println("Min Float: " + Float.MIN_VALUE);
		
		double datoDouble = 5256.256;
		System.out.println("Max Double: " + Double.MAX_VALUE);
		System.out.println("Min Double: " + Double.MIN_VALUE);
		
		//Para los booleanos los valores pueden ser true o false
		boolean datoBool = true;
		
		//El tipo de dato char almacena un caracter
		char datoChar = 'a';
		//datoChar = 'E';
		//datoChar = '\u0045';
		datoChar = 69;
		System.out.println("El caracter Unicode  045: " + datoChar);
		
		//Para declarar una variable se realiza:
		// tipoDato nombreVariable = valor;
		//donde tipoDato, puede ser cualquier primitivo u objeto
		//* A partir de la versión 10 de Java se puede usar la 
		// palabra reservada 'var'.
		
		var edad = 18;
		var isAceptado = true;
		var caracter = 'a';
		
		System.out.println("El \"caracter\" \n es: "+ caracter);
		//Obtener el tipo de dato
		System.out.println("Type of " + ((Object)caracter).getClass().getSimpleName() );
		
		//Conversion de tipo de datos
		byte edadAbueActual = 25;
		int edadEnVidas = edadAbueActual;
		System.out.println("La edad de abue es: " + edadEnVidas);
		
		int coquita2lt = 512;
		byte coquitaMini = (byte) coquita2lt;
		
		int costo = (int) 9.86;
		
		System.out.println("La cantidad de liquido es: " + coquitaMini);//10
		
		//Para indicar literales de números, se puede hacer uso de _
		//ESto podría ayudar visualmente a la comprensión.
		//El guión bajo no puede ir al inicio, final o antes o despúes del punto
		
		costo = 2_5_6_5_8_9;
		float precio = 5_89_478.785_45f;
		
		//costo = 0x0A; //n.10 decimal en representación hexadecimal
		//costo = 0b1010; //n.10 decimal en representación binária
		costo = 012; //n.10 decimal en representacion octal
		
		System.out.println("Valor de costo: " + costo);
		
		// REcordar que se puede poner 0-9, a-Z, A-Z, _ , $
		//No se puede iniciar con número la variable.
		int $myVar;
		int _myVar;
		//int 1myVAr; No se puede inicializar con un número
		int $my12V_ar;
		
		/**
		 *    new Class {
		 *           atributos_objeto; //fields o non-static fields
		 *    static atributo_clase;   // static fields
		 *    
		 *      function accion(parametros){  //Parámetros de entrada
		 *         let var //variable
		 *      }
		 *    }
		 * 
		 */
		 
		
		
		
			
		
		
		
		
	}

}
