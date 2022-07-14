package org.generation;

public class VariablesOperadores {

	public static void main(String[] args) {
		/**El valor minimo es bity que puede ser 1 o 0 
		 * 1 byte = 8bite (00000000-11111111)= 256 combinaciones
		 * Acepta -128-----0-----127 = 256num la suma de 128+127.
		 * Etipo byte puedo almanenar del -128 al +127 
		 * */
			
		byte datoByte = 15;
		
		System.out.println("Max Byte: " + Byte.MAX_VALUE);
		System.out.println("Min Byte: " + Byte.MIN_VALUE);
		
		/**Short -32.768----------32.767
		 * */
		
		short datoShort = 1000;
		
		System.out.println("Max short: " + Short.MAX_VALUE);
		System.out.println("Min short: " + Short.MIN_VALUE);
		
		/**int -2147483648----------2147483647

		 * */
		
		int datoInt = 150225;
		
		
		System.out.println("Max int: " + Integer.MAX_VALUE);
		System.out.println("Min int: " + Integer.MIN_VALUE);
		
		/**long -9223372036854775808----------9223372036854775807

		 * numeros enteros mas grandes
		 * */
		// se recomienda L al final
		long datoLong= 12254458L;
		
		System.out.println("Max long: " + Long.MAX_VALUE);
		System.out.println("Min long: " + Long.MIN_VALUE);
		
		//DATOS DE TIPO FLOAT, debe llevar f porque si no se toma como dato long
		
		float datoFloat = 1256.256f;
		
		
		System.out.println("Max Float: " + Float.MAX_VALUE);
		System.out.println("Min Float: " + Float.MIN_VALUE);
		
		// Dato double
		
		double datoDouble = 5256.256;
		
		System.out.println("Max Double: " + Double.MAX_VALUE);
		System.out.println("Min Double: " + Double.MIN_VALUE);
	
		// Dato boolean trae un true y un false
		
		boolean datoBol = true;
		
		// Dato char almacena un caracter
		
		char datoChar = 'a';
		datoChar = 'E';//forma de utilizar dato de tipo char
		System.out.println("El caracter unicode 045: " + datoChar);
		
		//Para declarar una variable se realiza
		//tipoDato nombreVariable = valor;
		//donde tipo Dato, puede ser cualquier primitivo u objeto
		//A partir de la version 10 de java se puede usar la palabra reservada var
		
		var edad = 18;
		var isAceptado = true;
		var caracter = 'a';
		
		System.out.println("El caracter: " + caracter);
		
		//Esto es para saber que tipo de variable es
		//System.out.println( ((Object)variable-a-evaluar).getClass().getSimpleName());
		
		
		//conversion de tipos de datos
		
		byte edadAbueActual = 25;
		int edadEnVidas = edadAbueActual;
		System.out.println("La edad de abue es: " + edadEnVidas);
		
		int coquita2lt = 129;
		byte coquitaMini = (byte) coquita2lt;
		
		System.out.println("La cantidad de liquido es: " + coquitaMini);
		
	}

}
