package Generation;

public class VariablesOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/**
		 * El valor mínimo es bit que puede ser 1 o 0
		 * 1 byte = 8 bits. (00000000 - 11111111) = 256 convinaciones de datos el rango es [-128 , 127]
		 * En tipo byte puedo almacenar numeros del rango anteriormente mensionado
		 * 
		 * El valor short es de 16 bits y va del rango [-32768, 32767]
		 * 
		 * El valor int es de 32 bits y su rango es de [-2elevaqdo(31),2elevaqdo(31)-1 ]
		 * 
		 * El valor float es de 64 bits y su rango es de [-2elevaqdo(31),2elevaqdo(31)-1]
		 * 
		 * */
		
		byte datoByte = 15;
		short datoShort = 1000;
		int datoInt = 150225;
		//Para Long se indica una L al final
		long datoLong = 122456698444444L;
		
		System.out.println("Max Byte: " + Byte.MAX_VALUE);
		System.out.println("Max Byte: " + Byte.MIN_VALUE);
		
		System.out.println("Max Short: " + Short.MAX_VALUE);
		System.out.println("Max Short: " + Short.MIN_VALUE);
		
		System.out.println("Max Integer: " + Integer.MAX_VALUE);
		System.out.println("Max Integer: " + Integer.MIN_VALUE);
		
		System.out.println("Max Long: " + Long.MAX_VALUE);
		System.out.println("Max Long: " + Long.MIN_VALUE);
		
		
		
		//Datos de tipo float, hat que establecer una f al final
		float datoFloat= 1256.256f;
		System.out.println("Max float: " + Float.MAX_VALUE);
		System.out.println("Max float: " + Float.MIN_VALUE);
		
		double datoDoubel= 5256.25;
		System.out.println("Max Double: " + Double.MAX_VALUE);
		System.out.println("Max Double: " + Double.MIN_VALUE);
		
		//Para los booleanos los valores pueden ser true o false 
		boolean datoBool = true;
		
		//El tipo de dato chart almacena un caracter
		char datoChar ='a';
		//datoChar = 'E';
		//datoChar = '\u0045'; codigo uml
		datoChar = 69;
		System.out.println("El caracter Unicode 045: " + datoChar);
		
		//Para declarar una veriable de realiza lo siguiente:
		//tipoDato nombreVariable = valor;
		//donde tipoDato, puede ser cualquier primitivo u objeto
		//* A partir de la versión 10 de java se pude udar la 
		// palabra reservada 'var'.
		
		var edad = 18;
		var isAceptado = true;
		var caracter = 'a';
		
		System.out.println("El caracter es: "+ edad);
		
		//Conversion de tipo de dato
		
		byte edadAbueActual = 25;
		int edadEnVidas = edadAbueActual;
		System.out.println("La edad de abue es: "+ edadEnVidas);
		
		
		int coquita2lt = 266;
		byte coquitaMini = (byte) coquita2lt; //Casteo cuando cambiamos de tipo de dato primitivo
		
		int costo = (int) 9.85;
		
		System.out.println("La cantidad de liquido es: "+ coquitaMini);
		
		//Para indicar literales de números, se puede hacer uso de 
		//Esto podria ayudar visualmente a la comprencsión.
		//El guión bajo no puede ir al inicio, final o antes o despues del punto
		costo=2_5_6_5_8_9;
		float precio = 5_89_478.785_45f;
		//costo =0x0A; //incluimos el nuemro 10 en hexadecimal y no lo imprime en decimal
		//costo=0b1010; //Escribimos el numero en binario y no los entrega en decimal 
		//costo = 012; //n.10 decimal en reprecentación octal
		costo = 01_2; //los separadores solo sirven en decimal y octal
			
		System.out.println("Valor de costo: " + costo);
		

	}

}
