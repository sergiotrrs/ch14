package org.generation;

public class VariablesOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
/**
 * El valor mínimo es bit que puede ser 1 o 0
 * 1 byte= 8 bits
 * (00000000-11111111)=256 combinaciones
 * byte, short, int 
 */
		
		byte datoByte=15;
		short datoShort =1000;
		int datoInt=150225;
		long datoLong= 122456698;
		
		System.out.println("Max Byte: "+ Byte.MAX_VALUE);
		System.out.println("Min Byte: "+ Byte.MIN_VALUE);
		
		System.out.println("Max Int: "+ Integer.MIN_VALUE);
		System.out.println("Min Int"+ Integer.MIN_VALUE);

		System.out.println("Max Long: "+ Long.MAX_VALUE);
		System.out.println("Min Long"+ Long.MIN_VALUE);
		
		
		//Dato de tipo float, hay que establecer una f al final
		
		float datoFloat=1256.256f;
		System.out.println("Max Float: "+Float.MAX_VALUE);
		System.out.println("Min Float: "+Float.MIN_VALUE);

		double datoDouble=5256.256;
		System.out.println("Max Double: "+Double.MAX_VALUE);
		System.out.println("Min Double: "+Double.MIN_VALUE);
		
		//para los boleanos puede ser true o false
		boolean datoBool=true;
		
		//El tipo de dato char almacena un caracter
		char datoChar='a';
		//estas son las 3 formas de declarar un char:
//		datoChar='E'; con letra
//		datoChar='\u0045'; con su codigo utm 
		datoChar=69; //con su valor decimal (se busca en una tablita)
		System.out.println("El caracter unicode 045: "+ datoChar);		
		
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
				
				int coquita2lt= 2000;
				byte coquitaMini=(byte)coquita2lt;
				
				System.out.println("La cantidad de liquido es: "+ coquitaMini);
				
				/*Para indicar literales de números se puede
				*hacer uso de: _
				*esto puede ayudar a la comprensión visual
				*el _ no puede ir al inicio, final o antes del ;
				*/
				
				int costo=(int) 9.86;
				costo = 2_5_6_8_9;
				float precio = 5_89_478.785_45f;
				//costo=0x0A; // n.10 decimal en representacion
				costo=0b1010; //es el 10 decimal 
				
				System.out.println("Valor del costo: "+ costo);
				//Recordar que se puede poner 0-9, a-z, A-Z, _ , $
				//no se puede inciar 
				int $myVar;
				int _myVar;
				//int 1myVAr no se puede inicializar con un numero
				int $my12V_ar;
				/**
				 * new Class{
				 * 		atributos_objeto; //fields o non-static fields 
				 * 		static atributo_clase; //static fields
				 * 
				 * 		function accion(parametros){
				 * 		let var
				 * 		}
				 * }
				 * 
				 * */
				
	}

}
