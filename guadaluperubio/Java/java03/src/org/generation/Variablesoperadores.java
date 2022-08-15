package org.generation;

public class Variablesoperadores {

	public static void main(String[] args) {
		/**
		 * El valor mínimo es bit que puede ser 1 o 0
		 * 1 byte= 8 bits (00000000 al 11111111)= 256 combinaciones
		 * En tipo byte puedo almacenar los numero del -128 al +127
		 * 
		 * */
		byte datoByte = 15;
		short datoShort = 1000;
		int datoInt = 150225;
		
		//para el tipo long se indica una L al final 
		long datoLong = 122456698L;
		
		System.out.println("Max Byte:" +Byte.MAX_VALUE);
		System.out.println("Min Byte:" +Byte.MIN_VALUE);
		System.out.println("Max Short:" +Short.MAX_VALUE);
		System.out.println("Min Short:" +Short.MIN_VALUE);
		System.out.println("Max Int:" +Integer.MAX_VALUE);
		System.out.println("Min Int:" +Integer.MIN_VALUE);
		System.out.println("Max Long:" +Long.MAX_VALUE);
		System.out.println("Min Long:" +Long.MIN_VALUE);
		
		//DATOS DE TIPO FLOTANTE, hay que establecer una f al final 
		float datoFloat = 1256.256f;
		System.out.println("Max Float:" +Float.MAX_VALUE);
		System.out.println("Min Float:" +Float.MIN_VALUE);
		
		double datoDouble =525.256;
		System.out.println("Max Double:" +Double.MAX_VALUE);
		System.out.println("Min Double:" +Double.MIN_VALUE);
		
		//para los booleano los valores pueden ser true o false
		boolean datoBolol = true;
		
		//El tipo de dato char que almacena una caracter(16 bits)
		//valor minimo 0 o maximo que puede tener es 65425
		char datoCh = 'a';
	 //datoCh = 'E'          //literal
	//	datoCh = '\u0045';  //unicode  o valor numérico
		
		//número decimal
		datoCh = 69; 
		
		System.out.println("El caracter Unicode 045: " + datoCh);
   
		//para declarar una variable se realiza:
		//tipoDato nombrevariable = Valor;
		//donde tipoDato, puede ser cualquien primitico u objeto
		//A partir de la version 10 de java se puede unsa la 
		//la palabra reservada 'var'.
		
		var edad = 18;
		var isAcept = true;
		var caracter = 'a';
		
		System.out.println("El \"caracter\" es: \n " +caracter);
		
		//conversion de tipo de datos
		byte edadAbueActual = 25;
		int edadEnvidas = edadAbueActual; 
		
		System.out.println("La edad de abue es: " + edadEnvidas);
		
		
		int coquita2lt = 266;
		byte coquitamini = (byte) coquita2lt;
		
		int costo=(int)9.86;
		
		System.out.println("La cantidad de liquido es: " +coquitamini);
		
		//para indicar literales de números, se puede hacer uso de _
		//Esto podria ayudar visualmente ala comprension
		//El guion bajo no puede ir al inicioo, final o antes o despues del punto
	
		costo = 2-5_6_5_8_9;
		
		float precio = 5_89_478.785_45f;
		
		//costo = 0x0A;  //numero 10 decimal
		//costo = 0b1010;   //numero 10 decimal en binario
		costo = 012;      //numero 10 decimal en representacion octal, se antepone un cero
		System.out.println("valor de costo: " +costo);
	
		//Recordar que se puede poner 0-9, a-z, A-Z, _, $
		//no se puede iniciar con número la variable.
		int $myVar;
		int _myVar;
		//int 1myVar; no se puede inicializar con un número
		int my12Var_ar;
		
		/**
		 * new Class {
		 *	     	atributos_objeto; //fields o non static fields
		 * 		static atributo_clase;    //statics fields
		 * 
		 * 		function accion(oaramtros){   //parametros de entrada
		 * 		
		 * }	
		 * }
		 * */
		
		
	}

}
