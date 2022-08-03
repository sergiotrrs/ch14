package org.generation;

public class VariablesOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/**
		 * El valor min  es bit que puede ser 1 o 0
		 * 1 byte = 8 bits (00000000 - 11111111)
		 * En tipo byte puedo almacenar los número de -128 +127
		 * En tipo byte puedo almacenar los número de -1 +127 
		 */
		byte datoByte=15;
		short datoShort=1000;
		int datoInt=150225;
		//Para long se indica una L al final
		long datoLong=122356698L;
		
		System.out.println("Max Byte:"+Byte.MAX_VALUE);
		System.out.println("Min Byte:"+Byte.MIN_VALUE);
		System.out.println("Max Short:"+Short.MAX_VALUE);
		System.out.println("Min Short:"+Short.MIN_VALUE);
		System.out.println("Max Int:"+Integer.MAX_VALUE);
		System.out.println("Min Int:"+Integer.MIN_VALUE);
		System.out.println("Max Long:"+Long.MAX_VALUE);
		System.out.println("Min Long:"+Long.MIN_VALUE);
		//Datos  de tipo float, hay que establcer una f al final
		float datoFloat=1256.256f;
		System.out.println("Max Float:"+Float.MAX_VALUE);
		System.out.println("Min Float:"+Float.MIN_VALUE);
		double datoDouble=5256.256;
		System.out.println("Max Float:"+Double.MAX_VALUE);
		System.out.println("Min Float:"+Double.MIN_VALUE);
		//ALmacena true o false
		boolean datoBool=true;
		System.out.println(true +" o "+false);
		//Almacena un caracter
		char datoChar='E';
		datoChar='\u0045'; //guardado como su codigo unicode (E)
		datoChar=69; //Guardado como su valor decimal (E)
		System.out.println("Valor Char 045 es"+datoChar);
		/*
		 * La linea sigueinte me arará error, porque por defecto el número
		 * me lo marca como int, tengo que ponerle una L al fnal para que no marque error (se indica que es un long). 
		 *System.out.println("El numero es:"+ 1223566983456")
		*/
		
		
		/**
		 * Para declarar una variable se realiza:
		 * <tipo de dato> <numbre de la variable> = valor;
		 * 
		 * A partir de la versión  10 de java se pude usar la palabra reservada var
		 * El valor que se asigne a la variable definirá su tipo de dato, solo sirve
		 * para no especificar  el tipo dato explicitamente, sino a través del valor que le asigno (lo interpreta)
		 * Tengo que asignarle el valor en el momentoque asigno la varible;
		 */
		
		var edad=18;
		//edad=18.6; Esto ya marcaraá error
		
		//Conversión de tipo de datos (Byte to int) (de envase pequeño a envase grande)
		
		byte edadAbueActual=25;
		int edadEnVidas=edadAbueActual;
		System.out.println("La edad de abue es:"+edadEnVidas);
		
		//(Int to Byte) (de envase grande a envase pequeño, requiero hacer cast (byte))
		//Esto generará que se desborde (En un byte 127+1 =>-128) (-128-1=>127)
		int coquita2L=266; // 10+256=>266 Entonces el 266 me imprimirá 10, (una vuelta completa)
		byte coquita150ml=(byte) coquita2L;
		System.out.println("La cantidad de liquido es:"+coquita150ml);
		
		int costo = (int) 9.68; //Descarta decimales, solo deja parte entera
		
		//Para indicar literales de numeros, se puede hacer uso de _, esto podría ayudar  visualmente a la comprensión
		
		costo=256_589;
		float costo2= 567.898_748F;
		System.out.println("Valor de costo:"+costo);
		
		//costo=0x0A // 10 en hexadecimal
		//costo=0b1010 //10 en binario
		//costo=012 // 10 en representaci´´on octal
		
		/**
		 *  class Name{
		 *  	Atributos_objeto //Fields o non-static fields
		 *  	static atributo_clase //Static fields
		 *  	
		 *  	function  accion (parámetros){ // Parámetro de entrada
		 *  	let var //variable
		 *  }
		 *  
		 *  } 
		 */
		
	}

}
