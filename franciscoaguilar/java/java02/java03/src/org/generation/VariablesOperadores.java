package org.generation;

public class VariablesOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		/**
		 * El valor mínimo es un bit puede ser 1 o 0 
		 * 1 byte = 8 bits (00000000-11111111) = 256 datos posibles (-128 a 127)
		 * En tipo byte puedo almacenar los números del -128 a 127
		 * */
			byte datoByte = 8;
			short datoShort = 1000;
			// Para un número, su tipo de dato por default es de tipo int
			int datoInt = 150225;
			//Se recomienda ponerle una L al final 
			long datoLong = 12245664L;
			
			System.out.println("Max Byte: "+Byte.MAX_VALUE);
			System.out.println("Max Byte: "+Byte.MIN_VALUE);
			System.out.println("Max Short: "+Short.MAX_VALUE);
			System.out.println("Max Short: "+Short.MIN_VALUE);
			System.out.println("Max Int: "+Integer.MAX_VALUE);
			System.out.println("Max Int: "+Integer.MIN_VALUE);
			System.out.println("Max Long: "+Long.MAX_VALUE);
			System.out.println("Max Long: "+Long.MIN_VALUE);
			
			// Datos de tipo float hay que establecer una f al final
			float datoFloat = 1256.256f; //Si no se pone la f se toma como dato long
			
			System.out.println("Max Float"+Float.MAX_VALUE);
			System.out.println("Max Float"+Float.MIN_VALUE);
			
			double datoDouble = 5256.256;
			
			System.out.println("Max Double"+Double.MAX_VALUE);
			System.out.println("Max Double"+Double.MIN_VALUE);
			
			// para los booleanos el valor es true o false
			boolean datoBool = true;
			
			//Solo almacena un caracter
			char datoChar = 'c';
			//datoChar = 'E';
			
			//Valor unicode
			//datoChar = '\u0045';
			
			//Valor decimal
			datoChar = 69;
			
			System.out.println("El caracter 045 "+ datoChar);
			
			//Para declarar una variable se realiza: 
			
			//tipo_dato nombreVariable = valor;
			
			//Tipo de dato puede ser cualquier dato primitivo u objeto
			
			///**********A PARTIR DE LA VERSIÓN 10 DE JAVA SE PUEDE USAR LA 
			/// PALABRA RESERVADA VAR.
			
			//Var nos ahorra determinar el tipo de dato al inicio
			var edad = 18;
			var isAceptado = true;
			//No se puede asignar un valor de otro tipo al que tenga la variable
			//ej: edad con var el programa lo determina como int y al querer 
			// asignarle un float... no te va a dejar.
			
			//edad = 89.98;
			
			var caracter = 'a';
			System.out.println("El caracter es: "+caracter);
			
			
			
			//Imprimir caracteres especiales en la consola.
			
			System.out.println("El \"caracter\" \n es : " + caracter);
			
			
			// 
			byte edadAbueActual = 25;
			int edadEnVidas = edadAbueActual;
			System.out.println("La edad de abue es: "+ edadEnVidas);
			
			//int nVidasAbue = 125697;
			
			//Castear: comprimir una variable en otra de menor almacenamiento
			//Cuando una variable con mayor valor se almacena en otra con tipo de dato de menor valor
			//El valor se "acomoda" dentro de los valores del tipo de dato menor 
			//recorriendo el rango completo de valores que puede admitir, el número de veces que tiene
			//el otro tipo de dato, por ejemplo: 		
			int coquita2lt = 1560;
			byte coquitaMini = (byte)coquita2lt; //1560(int) a byte ()
			
			System.out.println("La cantidad de líquido es: "+coquitaMini);
			
			int costo = (int) 9.86;
			System.out.println("Valor de costo: "+ costo);
			
			
			//Para indicar literales de números se puede hacer uso de _
			//Esto podría ayudar visualmente a la comprensión.
			//El guión bajo no puede ir al inicio, final o antes o después del punto
			//o antes o al final del valor del número.
			
			costo = 2_5_6_5_8_9;
			System.out.println("Valor de costo: "+ costo);
			
			float precio = 5_89_478.785_45f;
			System.out.println("Valor de precio: "+ precio);
			
			//En hexadecimal
			costo = 0x0A;
			System.out.println("Valor de costo en hexadecimal: "+ costo);

			
			//Binario
			costo = 0b1010;
			System.out.println("Valor de costo en binario: "+ costo);
			
			//Octal
			costo = 012;
			System.out.println("Valor de costo en octal: "+ costo);
			
			//Nombrar variables
			//Se pueden nombrar con 0-9, a-z, A-Z, $ , _ 
			//No se puede iniciar con número el nombre de las variables
			 
			int $myvar;
			int _myvar;
			//int 1myvar no se puede 
			int $myvar12_var;
			
			/**
			 * Clases
			 * 
			 * 		new Class{
			 * 			atributos_objeto; //fields o non-static fields
			 * 			static atributo_clase; //static field (static es el modificador de acceso)
			 * 
			 * 		function accion(parametros){ // parámetros de entrada
			 * 			let var // variable
			 * 		}
			 * }
			 * 
			 * 
			 */
			 
			
			
			
			
			
			
			
	}
}
