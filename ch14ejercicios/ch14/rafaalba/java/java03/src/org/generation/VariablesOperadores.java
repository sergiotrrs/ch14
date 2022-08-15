package org.generation;

public class VariablesOperadores {
	
	public static void main(String[] args) {
		/**
		 * El valor mínimo es bit que puede ser 1 o 0
		 * 1 byte = 8 bits. (00000000 - 11111111) = 256 combinaciones posibles
		 * En tipo byte puedo almacenar numeros
		 * del -128 al 127
		 */
		byte datoByte = 15;
		short datoShort = 1000;
		int datoInt = 150225;
		//Para Long se recomienda poner una L al final
		long datoLong = 1224566912255858L;
		System.out.println("Los ms que lleva este bootcamp es: " + 12569877456244L);
		
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
		boolean datoBoolean = true;
		
		//El tipo de dato char almacena un caracter
		char datoChar = 'a';
		//datoChar = 'E'; //el caracter
		//datoChar = '\u0045'; //o el codigo del unicode
		datoChar = 69; //o el valor
		System.out.println("El caracter Unicode 045: " + datoChar);

		//Para declarar una variable se realiza:
		//tipoDato nombreVariable = valor;
		//donde tipoDato, puede ser cualquier primitivo u objeto
		//*A partir de la version 10 de Java se puede usar la
		// palabra reservada 'var'.
		
		var edad = 18;
		var esAceptado = true;
		//edad = 'i';
		var caracter = 'a';
		//var caracter = 65;
		System.out.println("El \"caracter\" \n es: " + caracter);
		
		//Conversión de tipo de datos
		 byte edadAbueActual = 25;
		 int edadEnVidas = edadAbueActual;
		 System.out.println("La edad de abue es: " + edadEnVidas);
		
		 int coquita2lt = 266; //1546 // 1802 // 12554
		 byte coquitaMini = (byte) coquita2lt;
		 System.out.println("La cantidad de liquido es: " + coquitaMini);//10
		
		
	}
	
}
