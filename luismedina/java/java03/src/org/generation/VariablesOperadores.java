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
		// Para Long se indica una L al final
		long datoLong = 1224566984649846464L;

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

		// Para los datos Booleanos los valores pueden ser true o false
		boolean datoBool = true;

		// El tipo de dato char almacena un caracter
		char datoChar = 'a';
//		datoChar = 'E';
//		datoChar='\u0045';
		datoChar = 69;
		System.out.println(datoChar);
		System.out.println("El caracter Unicode 045 es: " + datoChar);

		// Para declarar una variable se realiza lo siguiente:
		// tipoDato nombreVAriable = valor;
		// Donde tipoDato, puede ser cualquier primitivo u objeto
		// *A partir de la version 10 de Java se puede usar la palabra reservada 'var'.

		var edad = 21;
		var isAceptado = true;
		var caracter = 65;

		System.out.println("El caracter es " + caracter);

		System.out.println("El \"caracter\" \n es: " + caracter);

		// Conversion de tipo de datos
		byte edadAbueActual = 25;
		int edadEnVidas = edadAbueActual;
		System.out.println("La edad de abue es: " + edadEnVidas);

		int coquita2lt = 266;
		byte coquitaMini = (byte) coquita2lt;

		System.out.println("La cantidad de liquido es: " + coquitaMini);

		int costo = (int) 9.86;

		/**
		 * Para indicar literales de numeros Se puede hacer uso de _ Esto podria ayudar
		 * visualmente a la comprension El guin bajo (_) no puede ir al inicio o fianl o
		 * antes o despues del punto (.)
		 */

		costo = 2_5_6_5_8_9;
		System.out.println("El valor de costo es; " + costo);

		float precio = 589_478.785_45f;
		System.out.println("El valor de precio es; " + precio);

		// Definiendo numero de manera hexadecimal
		costo = 0x0b;
		// Definiendo numero de manera binaria
		costo = 0b1010;
		//Definiendo numero de manera Octal
		costo = 012;
		System.out.println("El valor de costo binario es; " + costo);
		
		//Recordar que se puede poner 0-9, a-z, A-Z, _ , $
		//No se puede iniciar numero con la variable.
		int $myvar;
		int _myvar;
		//int 1myvar; Esto no se puede hacer ya que no se puede inicializar con numero
		
		
//		 new Class {
//		 		atributos_objetos; //fields o non-static
//		 static atributo_clase
		 
//		 function accion(parametros){
//		let var//variable
//	}
//	}

}}
