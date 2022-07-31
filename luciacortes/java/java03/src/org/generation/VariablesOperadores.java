package org.generation;

public class VariablesOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/***
		 * El valor mínimo es bit puede ser 1 o 0
		 * 1 byte = 8 bits. (00000000- 1111111)=256
		 * El tipo byte puedo almacenar los números del
		 * -128 al 127
		 */
		byte datoByte = 15;
		short datoShort = 1000;
		int datoInt = 150225;
		long datoLong = 122456698L;
		
		//Rango de números mínimos y máximos que puedo guardar en cada valor
		System.out.println("Max Byte: "+ Byte.MAX_VALUE);
		System.out.println("Max Byte: "+ Byte.MIN_VALUE);
		System.out.println("Max Short: "+ Short.MAX_VALUE);
		System.out.println("Max Short: "+ Short.MIN_VALUE);
		System.out.println("Max Int: "+ Integer.MAX_VALUE);
		System.out.println("Max Int: "+ Integer.MIN_VALUE);
		System.out.println("Max Long: "+ Long.MAX_VALUE);
		System.out.println("Max Long: "+ Long.MAX_VALUE);
		
		// Datos de tipo float, hay que establecer un f al final
		
		float datoFloat =1256.256f;
		System.out.println("Max Float: "+ Float.MAX_VALUE);
		System.out.println("Min Float: "+ Float.MIN_VALUE);
		
		double datoDouble = 5256.566;
		System.out.println("Max Double: "+ Double.MAX_VALUE);
		System.out.println("Min Double: "+ Double.MIN_VALUE);
		
		//Para los booleanos los valores pueden ser true o false
		boolean datoBool =true;
		
		//El tipo de dato char almacena un caracter
		char datoChar ='a';
		//datoChar ='E';
		//datoChar ='\u0045';
		datoChar = 69;
		System.out.println("El caracter 045 " + datoChar);
		
		//Para declarar una varioable se realiza:
	    //tipo_Dato nombreVariable = valor;
	    //donde tipoDato piede ser cualquier primitivo u objeto
		//A partir de la versión 10 de java se puede usar la palbra reservada 'var' 

		var edad = 18;
		var isAceptado= true;
		var caracter = 65;
		
		System.out.println("El \"caracter\" \n es: "+ caracter);
		
		//Conversión de tipo de datos
		byte edadAbueActual = 25;
		int edadEnVidas = edadAbueActual;
		System.out.println("La edad de abue es: "+ edadEnVidas);
		
		int coquita2lt = 1546;
		byte coquitaMini = (byte) coquita2lt;
		
		int costo = (int) 9.86;
		
		System.out.println("La cantidad de líquido es: "+coquitaMini);
		
		//Para indicar literales de números se puede hacer uso de _
		//Esto podría ayudar visualmente a la comprensión.
		//El _ no puede ir al inicio, final o antes y después del punto.
		costo = 2_5_6_5_8_9;
		float precio = 589_478.785_45f;
		
		//costo = 0x0A; //n.10 decimal desde hexadecimal
		//costo= 0b1010; //n. 10 decimal desde binario
		costo = 01_2; //n. 10 decimal en representación octal
		System.out.println("Valor de costo: "+costo);
	
		//Para declarar variable: se puede poner 0-9, a-z, A-Z, _ , $
		//No se puede iniciar con número.
		int $myVar;
		int _myVar;
		int $my12V_ar;

		/***
		 *	 new Class{
		 * 		atributos_objeto; // también son fields o non-static fields
		 * 	static atributo_clase; // static fields
		 * 
		 * 	function accion(parametros){ //Parámetros de entrada
		 * 		let var//variable
		 * 
		 * 		}	
		 *  }
		 * */
	}
	

}
