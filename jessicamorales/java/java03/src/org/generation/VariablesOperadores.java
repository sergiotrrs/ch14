package org.generation;

public class VariablesOperadores {

	public static void main(String[] args) {
		/**
		 * El valor minimo de un bit que puede ser 0 o 1 1 byte = 8 bits. (00000000 -
		 * 11111111)=256 combinaciones En tipo byte puedo almacenar los numeros del -128
		 * al 127
		 */

		byte datoByte = 15;
		short datoShort = 1000;
		int datoInt = 150225;
		//Para Long se indica una L al final
		long datoLong = 122456698L; //Se la agrega L 

		System.out.println("Max Byte: " + Byte.MAX_VALUE);
		System.out.println("Min Byte: " + Byte.MIN_VALUE);
		System.out.println("Max Short: " + Short.MAX_VALUE);
		System.out.println("Min Short: " + Short.MIN_VALUE);
		System.out.println("Max Int: " + Integer.MAX_VALUE);
		System.out.println("Min Int: " + Integer.MIN_VALUE);
		System.out.println("Max Long: " + Long.MAX_VALUE);
		System.out.println("Min Long: " + Long.MIN_VALUE);

		// Datos de tipo float, hay que establecer una f al final
		float datoFloat = 1256.256f;
		System.out.println("Max Float: " + Float.MAX_VALUE);
		System.out.println("Min Float: " + Float.MIN_VALUE);

		double datoDouble = 5256.256;
		System.out.println("Max Double: " + Double.MAX_VALUE);
		System.out.println("Min Double: " + Double.MIN_VALUE);
		
		//Para los boleanos los valores pueden ser true o false
		boolean datoBool = true;
		
		//El tipo de dato chart almacena un caracter
		char datoChar = 'a';
		//datoChar = 'E'; //Con la literal (caracter)
		//datoChar = '\u0045'; Número 
		datoChar = 69; 
		System.out.println("El caracter 045: " + datoChar);
		
		//Para declarar una variable se realiza:
		//tipoDato nombreVariable = valor;
		//donde tipoDato, puede ser cualquier primitivo u objeto
		//*A partir de la versión 10 de Java se puede usar la 
		//palabra reservada 'var'.
		
		var edad = 18;
		var isAceptado = true;
		//edad = 'i';
		var caracter = 65; //Imprimi el caracter
		
		System.out.println("El \"caracter\" \n es: " + caracter); //Imprime el número
		
		// Conversion de tipo de datos
		byte edadAbueActual = 25;
		int edadEnVidas = edadAbueActual;
		System.out.println("La edad de abue es: " + edadEnVidas);
		
		int coquita2lt = 266;
		byte coquitaMini = (byte) coquita2lt;
		
		System.out.println("La cantidad de líquido es: " + coquitaMini);

	}

}