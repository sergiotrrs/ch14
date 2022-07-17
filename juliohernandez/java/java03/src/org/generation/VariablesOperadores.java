package org.generation;

public class VariablesOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/**
		 * El valor mínimo es bit, que puede ser 1 o 0
		 * 1 byte = 8 bit. (00000000 - 11111111) = 256 datos posibles
		 * Cuyos valores son: (-128,127] 
		 * Usar byte cuando el valor esté en ese rango.
		 * JS ocupaba 64 bits, desperdiciando memoria
		 */
		byte datoByte = -128;
		/**
		 * short = 16 bit. (-32,768,32,767] 
		 */
		short datoShort = 32767;
		
		/**
		 * int = 32 bits (-2^31,2^31-1)
		 */
		int datoInt = 150225;
		
		/**
		 * long = 64 bits(-2^63,2^63-1)
		 */
		
		//Se recomienda poner una L o l al final
		//Porque para una literal, su tipo de dato por default es int
		long datoLong = 122456698L;
		
		System.out.println("Una literal se toma como int: " + 121123123123123L);
		
		System.out.println("Max Byte: " + Byte.MAX_VALUE);
		System.out.println("Min Byte: " + Byte.MIN_VALUE);
		
		System.out.println("Max Short " + Short.MAX_VALUE);
		System.out.println("Min Short " + Short.MIN_VALUE);
		
		System.out.println("Max Int: " + Integer.MAX_VALUE);
		System.out.println("Min Int: " + Integer.MIN_VALUE);
		
		System.out.println("Max Long: " + Long.MAX_VALUE);
		System.out.println("Min Long: " + Long.MIN_VALUE);
		
		//Dato de tipo float: hay que establecer una f al final
		float datoFloat = 1256.256f;
		
		System.out.println("Max Float: " + Float.MAX_VALUE);
		System.out.println("Max Float: " + Float.MIN_VALUE);
		
		
		//En los punto flotante, el tipo default de dato es Double
		double datoDouble = 5256.256d; //Aunque la d no se requiere, en realidad.
		System.out.println("Max Double: " + Double.MAX_VALUE);
		System.out.println("Max Double: " + Double.MIN_VALUE);
		System.out.println(datoDouble);
		
		//En resumen, 6 tipos de datos para guardar números
		
		//Booleanos: true o false
		boolean datoBool=true;
		
		//El tipo char (16 bits) almacena un caracter Unicode
		char datoCh = 'a';
		//datoCh = 'E';
		datoCh = '\u0045';
		//datoCh = 69;
		System.out.println("El caracter Unicode 045: " + datoCh);
		
		/**
		 * Para declarar una variable se realiza:
		 * tipoDato nombreVariable = valor;
		 * tipoDato = {primitivos{}, objetos{}}
		 * *A partir de Java 10 se puede usar la palabra reservada 'var'
		 * 'VAAAAAAAAAAAR'
		 */
		
		//USO DE VAR: define el tipo de dato con la inicialización
		var edad = 18; //Lo toma como numérico
		var isAceptado = true; //Lo toma como Boolean
		var caracter = 'a'; //Toma como char
		
		edad = 'i'; //imprime valor decimal Unicode de l a'i'= 105

		System.out.println(edad);
		System.out.println(isAceptado);
		System.out.println(caracter);
		
		//IMPRESIÓN EN CONSOLA
		System.out.println("El \"caracter\" \n es: " + caracter); //imprime en nueva linea

		//Los envases de CocaCola
		
		//Envase de 600mL en uno de 2 L
		//Conversion de tipo de datos
		byte edadAbueActual = 25;
		int edadEnVidas = edadAbueActual; //OJO = diferentes tipos de datos menor en mayor.
		System.out.println("La edad de abue es: " + edadEnVidas);
		
		//Envase de 2L en uno de 600
		int coquita2lt = 125;
		//byte nVidaActual = nVidasAbue; No deja a menos que sea con un casting
		
		coquita2lt = 130; //si el número es mayor que su contenedor, le da la vuelta
		byte coquitaMini = (byte) coquita2lt;
		
		System.out.println("La cantidad de líquido es: " + coquitaMini);
		
		byte arrozBlanco = (byte) 139;
		System.out.println(arrozBlanco);
		
		//Para indicar literales de números, se puede hacer uso de _
		int costo =2_5_6_8_9;
		//RESTRICCION: Guion bajo no puede ir al inicio/final o antes/despues del punto
		System.out.println(costo);
		
		//Numeros en hexadecimal
		costo = 0x0A; //A = 10 en hexadecimal
		
		//Binarios
		costo = 0b1010; // 0b(numeroBinario)
		
		//Octal
		costo = 012; //0(numOctal)
		
		System.out.println("costo: " + costo);
		
		//RESTRICCION DE NOMBRES DE VARIABLES
		//No se puede iniciar con número la variable
		int $miVar;
		int _myVar;
		//int 1myVar;
		
		//TypeOf = 
		System.out.println( ((Object)costo).getClass().getSimpleName()); 
	}

}
