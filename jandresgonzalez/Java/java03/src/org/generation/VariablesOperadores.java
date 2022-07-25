package org.generation;

public class VariablesOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		byte datoByte = 100;
		short datoShort = 30000;
		int datoInt = 350000;
		//lleva una L al final el dato Long
		long datoLong = 2147483648L;
		System.out.println("Max byte " + Byte.MAX_VALUE);
		System.out.println("Min byte " + Byte.MIN_VALUE);
		
		System.out.println("Max short " + Short.MAX_VALUE);
		System.out.println("Min short " + Short.MIN_VALUE);
		
		System.out.println("Max int " + Integer.MAX_VALUE);
		System.out.println("Min int " + Integer.MIN_VALUE);
		
		System.out.println("Max long " + Long.MAX_VALUE);
		System.out.println("Min long " + Long.MIN_VALUE);
		
		//float lleva una f al final
		float datoFloat = 3.141596f;
		double datoDouble = 3.4028235E52d;
		
		System.out.println("Max float " + Float.MAX_VALUE);
		System.out.println("Min float" + Float.MIN_VALUE);
		
		System.out.println("Max Double " + Double.MAX_VALUE);
		System.out.println("Min Double " + Double.MIN_VALUE);
		
		//Jala true o false
		boolean datoBool = true;
		//Character alamacena caracter
		char datoChar = 'a';
		//El caracter se puede guardar como literal
		//datoChar = 'E';
		//Como unicode '\u0000'
		//datoChar = '\u0045';
		//o como decimal:
		datoChar = 69;
		System.out.println("El caracter 045 es: " + datoChar);
		
		//Para declarar una variable se realizA:
		//tipo_Dato nombreVariable = valor;
		//donde el tipo de dato envuelve uno de los ocho primitivos
		//a partir de la versión 10 Java se puede usar
		//----var----
		
		var edad = 19;
		//Lo traduce al mismo tipo de variable
		edad = 'i';
		var isAceptado = true;
		var caracter = 'a';
		
		System.out.println("El caracter es: " + caracter);
		
		if (datoDouble > Float.MAX_VALUE) {
			System.out.println("YEs");
			
			//Evalua variable
			System.out.println("Tipo de dato: " + ((Object)datoDouble).getClass().getSimpleName());

		}
		else {
			System.out.println("N00");
		}
		
		System.out.println("El \"caracter\" \n es:\n " + caracter);
		
		//Conversión de datos
		long edadAbueActual = 24654654654655L;
		//int edadEnVidas = edadAbueActual;
		//System.out.println("La edad es: " + edadEnVidas);
		
		//Casting de una variable
		//Casteo
		int coca2lt = 127;
		byte coquita150ml = (byte) coca2lt;
		int deVuelta = (int) coquita150ml;
		float costo = 9.86f;
		double cost = 9.86f;
		//Se declara la nueva variable y se pone cómo se convierte
		System.out.println(coquita150ml);
		System.out.println(deVuelta);
		System.out.println(cost);
		
		//Para indicar literales de números se pueden usar guiones bajos
		//Ayuda a lo visual
		//Guión bajo no va al inicio, final o antes o despues de punto
		costo = 2_5_3_4;
		System.out.println(costo);
		float precio = 12_12_478.6534_32f;
		System.out.println(precio);
		
		//Hexadecimal se representa: 0x0__;
		//costo = 0x0a; //10
		//Binario: 
		//costo = 0b1010; //10
		costo = (int) 012; //n 10 en octal
		System.out.println(costo);
		
		//Se puede poner 0-9, a-z, A-Z,_, $
		//para nombre de variable
		//No se puede iniciar con número la variable;
		int $myVar;
		int _myVar;
		//int 1myVar = 124 da error de sintaxis pq no se puede iniciar con núm
		int my12V__ar;
		
		/*
		new Class {
			atributos_objeto; //fields o non-static-fields
			static atributo_clase; //static fields
			
			function accion(parametros) {}
		}
		*/
	}

}
