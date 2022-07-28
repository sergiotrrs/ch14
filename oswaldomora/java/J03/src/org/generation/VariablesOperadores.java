package org.generation;

public class VariablesOperadores {

	public static void main (String [] args) {
	/**
	 * El valor mínimo es bit que puede ser 1 o 0
	 * 1 byte = 8 bits. (0000000 - 1111111) = 256 combinaciones
	 * 
	 * 	
	 */
	byte datoByte = 15;
	short datoShort = 1000;
	int datoInt = 150225;
	//Para Long se indica una L al final
	long datoLong = 1234435656768788899L;
	
	System.out.println("Max Byte: " + Byte.MAX_VALUE);
	System.out.println("Min Byte: " + Byte.MIN_VALUE);
	System.out.println("Max Short: " + Short.MAX_VALUE);
	System.out.println("Min Short: " + Short.MIN_VALUE);
	System.out.println("Max Int: " + Integer.MAX_VALUE);
	System.out.println("Min Int: " + Integer.MIN_VALUE);
	System.out.println("Max Long: " + Long.MAX_VALUE);
	System.out.println("Min Long: " + Long.MIN_VALUE);
	
	//Dato de tipo float, hay que establecer una f al final
	float datoFloat= 1256.256f;
	System.out.println("Max Float: " + Float.MAX_VALUE);
	System.out.println("MIN Float: " + Float.MIN_VALUE);
	
	double datoDouble = 5256.256;
	System.out.println("Max Double: " + Double.MAX_VALUE);
	System.out.println("MIN Double: " + Double.MIN_VALUE);
	
	//Para los booleanos los valores pueden ser true o false
	boolean datoBool = true;
	
	//El tipo de dato char almacena un caracter
	char datoChar = 'a';
	// datoChar = 'E';
	  //datoChar = '\u0045';
	 datoChar = 69;
	 System.out.println("El caracter Unicode 045: " + datoChar);
	 
	 //Para declarar una variable se realiza:
	 //tipo_Dato nombreVariable = valor;
	 //donde tipoDato, puede ser cualquier primitivo u objeto
	 //* A partir de la versión 10 de Java se puede usar la 
	 // palabra reservada 'var'.
	 
	 var edad = 18;
	 var isAceptado = true;
	 var caracter = 65;
	 
	 System.out.println("El \"caracter\" \n es " + caracter);
	
	
	//Conversion de tipo de datos
	 byte edadAbueActual = 25;
	 int edadEnVidas = edadAbueActual;
	 System.out.println("La edad de abue es: " + edadEnVidas);
	 
	 int coquita2lt = 266;
	 byte coquitaMini = (byte) coquita2lt;
	
	 int costo = (int) 9.86;
	 System.out.println("La cantidad de liquido es: " + coquitaMini);//10
	System.out.println("Valor de costo: " + costo);
	
	//Para indicar literales de números, se puede usar "_"
	//Esto podría ayudar visualmente a la comprensión
	
	 costo = 245_456;
	 System.out.println("Valor de costo: " + costo);
	 float precio = 5_89_478.785_45F;
	 
	 costo =0x0A;
	 System.out.println("Valor de costo: " + costo);
	 
	 
	
	}
}
