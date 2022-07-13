package org.generation;

public class VariablesOperadores {

	public static void main(String[] args) {
		/**
		 * El valor mínimo es bit que puede ser 1 o 0.
		 * 1 byte = 8 bits. (00000000- 11111111) = 256= 2^{8} combinaciones :) 
		 * Abarca los valores del (-128, al 127)
		 * El tipo byte puede almacenar números del -128 al +127 
		 */
		 
		byte datoByte = 15;
		
		short datoShort = 1000;
		
		int datoInt = 150225;
		//Para el dato Long se recomienda poner una L al final,
		long datoLong = 122456698L;
		
		System.out.println("Max Byte: " + Byte.MAX_VALUE);
		System.out.println("Min Byte: " + Byte.MIN_VALUE);
		System.out.println("-------------------------------");
		System.out.println("Max Short: " + Short.MAX_VALUE);
		System.out.println("Min Short: " + Short.MIN_VALUE);
		System.out.println("-------------------------------");
		System.out.println("Max Int: " + Integer.MAX_VALUE);
		System.out.println("Min Int: " + Integer.MIN_VALUE);
		System.out.println("-------------------------------");
		System.out.println("Max Long: " + Long.MAX_VALUE);
		System.out.println("Min Long: " + Long.MIN_VALUE);
		
		System.out.println("-------------------");
		
		
		//Datos de Tipo flat
		
		float datoFloat = 1256.256f;
		
		System.out.println("Max Float: " + Float.MAX_VALUE);
		System.out.println("Min Float: " + Float.MIN_VALUE);
		
		// Dato de TIPO Double 
		
		double datoDouble = 5256.256;
		System.out.println("-------------------");
		
		System.out.println("Max Double: " + Double.MAX_VALUE);
		System.out.println("Min Double: " + Double.MIN_VALUE);
		
		
		//Para los booleanos los valores pueden ser true o false
		
		boolean datoBol = true;
		
		
		//Datos de Tipo Char 
		
		char datoChar = 'a';
		//datoChar = 'E';
		//datoChar = '\u0045';
		datoChar = 69;
		System.out.println("El caracter 045: " + datoChar);
		
		
		
		var edad = 18;
		var isAceptado = true;
		var caracter = 65;
		System.out.println("El caracter es: " + caracter);
		
		
		int coquita2lt = 130;
		byte coquitaMini = (byte)coquita2lt;
		System.out.println("La cantidad de liquido es: " + coquitaMini);
		
		
}

	
}
