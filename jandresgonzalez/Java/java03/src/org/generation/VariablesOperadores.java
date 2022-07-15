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
		
		int coca2lt = 127;
		byte coquita150ml = (byte) coca2lt;
		
		System.out.println(coquita150ml);
	}

}
