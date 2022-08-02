package org.generation;

public class VariablesOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/**
		 * El valor mínimo es bit que puede ser 1 o 8
		 * 1 byte = 8 bits. (00000000 - 11111111)
		 * El typo byte puedo almacenar los numeros 
		 * del -125/ al 127
		 */
		byte datoByte = 15;
		short datoShort =1000;
		int datoInt= 150225;
		//Para long se indica una L al final
		float datoLong = 122456698L;
		

		System.out.println("Max Byte:" + Byte.MAX_VALUE);	
		System.out.println("Min Byte:" + Byte.MIN_VALUE);
		System.out.println("Max Short:" + Short.MAX_VALUE);
		System.out.println("Min Short:" + Short.MAX_VALUE);
		System.out.println("Max Integer:" + Integer.MAX_VALUE);	
		System.out.println("Min Integer:" + Integer.MIN_VALUE);
		System.out.println("Max Long:" + Long.MAX_VALUE);
		System.out.println("Min Long:" + Long.MAX_VALUE);
		//Datos de tipo float hayque establecer una f al final
		float datoFloat = 1256.256f; //si no se pone se consiera una long
		System.out.println("Max Float" + Float.MAX_VALUE);
		System.out.println("Min Float" + Float.MIN_VALUE);
		
		double datoDouble = 5256.256;
		System.out.println("Max Dpuble" + Double.MAX_VALUE);
		System.out.println("Min Double" + Double.MIN_VALUE);
		
		//Para los boleanos los valores pueden ser true o false
		boolean datoBool =true;
		
		//El ripo de dato char alamcena un caraacter
		char datoChar = 'a';
		//datoChar = 'E';
		//datoChar = '\u0045';
		datoChar = 69;
		System.out.println("El caracter 045 "+ datoChar);
		
		//Para declarar una variable se utiliza:
		//1.- tipoDato nombreVariable = valor;
		//donde tipoDato, puede ser cualquier primitivo u objeto
		//*A partir de la version 10 de Java se puede usar la palabra 
		//reseravada VAR
		
		var edad = 18;
		//edad = 'i'; si lo acepta pero impirme el numero asociado de la i
		var isAceptado=true;
		var caracter = 65;
		System.out.println("El \"caracter\" \n es: " + edad);						
		
		byte edadAbueActual = 25;
		int edadEnVidas = edadAbueActual;
		System.out.println("Edada de abue es: " + edadEnVidas);
		
		int coquita2lt = 3594;
		byte coquitaMini = (byte) coquita2lt;	
		
		int costo = (int) 9.68;
		//Para indicar literales de numeros, se puede hacer uso de_
		//esto pordia ayudar visualmente con la compresion
		costo = 2_5_6_5_8_9;
		
		//costo = 0x0A; //n.10 decimal en representacion hexadecimal
		//costo= 0b1010; //n.10 decimal en representacion binaria
		costo =01_2; //n10 decimal en representacion octal. se antepone un 0
		System.out.println("Valor del costo " + costo);
		//REcordar que se puede poner 0-9, a-z, A-Z,_,$
		//No se puede iniciar con número la variable
		int $myVar;
		int _myVar;
		//int 1myVar; no se puede inicializar con un numero
		int $my12V_ar
		/**
		 * 
		 * 	new class{
		 * atributo_objetos;//fields o non-static fields
		 * static atributo_clase; // static fields
		 * 
		 * 	fuction accion(parametro){//Parametros de entrada
		 *  	let var//variable
		 * 	}
		 * 
		 */
				
	}

}












