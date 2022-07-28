package org.generation;

public class VariablesOperadores {

	public static void main(String[] args) {
		//El valor mínimo es bit que puede ser 1 ó 0
		/**
		 * 1 byte = 8 bits. (00000000 - 11111111) = 256 combinaciones.
		 * En tipo byte puedo almacenar los números
		 * del -128 al 127
		 * 
		 * 
		 */
		byte datoByte = 15;
		short datoShort = 1000;
		int datoInt = 150225;
		//Para Long se indica una L al final
		long datoLong = 122456698L;
		
		System.out.println("Max Byte: " + Byte.MAX_VALUE);
		System.out.println("Max Byte: " + Byte.MIN_VALUE);
		System.out.println("Max Short: " + Short.MAX_VALUE);
		System.out.println("Max Short: " + Short.MIN_VALUE);
		System.out.println("Max Int: " + Integer.MAX_VALUE);
		System.out.println("Max Int: " + Integer.MIN_VALUE);
		System.out.println("Max Long: " + Long.MAX_VALUE);
		System.out.println("Max Long: " + Long.MIN_VALUE);
		
		//Dato de tipo float, hayq ue establecer una f al final
		float datoFloat = 1256.256f;
		System.out.println("Max Long: " + Float.MAX_VALUE);
		System.out.println("Max Long: " + Float.MIN_VALUE);
		
		double datoDouble = 5256.542;
		System.out.println("Max Long: " + Double.MAX_VALUE);
		System.out.println("Max Long: " + Double.MIN_VALUE);
		
		//Para los booleanos los valores pueden ser true o false
		boolean datoBool = true;
		
		//El tipo de dato chart almacena un caracter
		char datoChar = 'a';
		//datoChar = 'E';
		//datoChar = '\u0045';
		datoChar = 69;
		System.out.println("El caracter Unicode 045 y 69 decimal: " + datoChar);
	
		//Para declarar una variable se realiza: 
		//tipoDato nombreVariable = valor;
		//donde tipoDato, puede ser cualquier primitivo u objeto
		/**
		 * Apartir de la version 10 de Java se puede usar la 
		 * palabra reservada 'var'.
		 * 
		 */
		
		var edad = 18;
		var isAceptado = true;
		var caracter = 65;
		System.out.println("El \"caracter\" \n es: " + caracter);
		
		//Conversion de tipo de datos
		byte edadAbueActual = 25;
		int edadEnVidas = edadAbueActual;
		System.out.println("La edad de abue es: " + edadEnVidas);
		
		int coquita2lt = 522;
		byte coquita150ml = (byte) coquita2lt;
		
		int costo = (int) 9.68;
		
		System.out.println("La cantidad de líquido es: " + coquita150ml);
		
		//Para indicar literales de numeros, se puede hacer uso de _
		//Esto podria ayudar visualmente a la comprensión.
		//El guion bajo no puede ir al inicio, final o antes o despues del punto
		
		costo = 2_5_6_5_8_9;
		float precio = 589_478.785_45f;
		
		//costo = 0x0A;// n. 10 decimal en hexadecimal
		//costo = 0b1010;//n. 10 decimal en binario
		costo = 012; //n.10 decimal en representacion octal
		
		System.out.println("Valor de costo: " + costo);
		
		//Recordar que se puede poner 0-9, a-z, A-Z, _ , $
		//No se puede iniciar con número la variable
		int $myVar;
		int _myVar;
		//int 1myVar; No se puede inicializar con un númeroo
		int $my12V_ar;
		
		/**
		 *	new Class{ 
		 * 		atributos_objeto; //fields o non-static fields
		 * 	static  atributo_clase; // static fields
		 * 
		 * 		function accion(parametros){ //Parametros de entrada
		 *			let var //variable
		 * 
		 * /
		 */
	}

}
