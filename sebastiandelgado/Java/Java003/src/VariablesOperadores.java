
/**
 * @author uadec
 *
 */
/**
 * @author uadec
 *
 */
public class VariablesOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 * El valor mínimo es but que puede ser 1 o 0
		 * 1 byte = 8 bits. (00000000 - 11111111) = 256 combinaciones
		 * 
		 */
byte datoByte = 15;
		
		short datoShort = 1000;
		
		int datoInt = 150225;
		//Para el dato Long se recomienda poner una L al final,
		long datoLong = 122456698L;
		
		System.out.println("Max Byte: " + Byte.MAX_VALUE);
		System.out.println("Min Byte: " + Byte.MIN_VALUE);
		System.out.println("-------------------------------");
		System.out.println("Max Short: " + Short.MAX_VALUE);
		System.out.println("Min Short: " + Short.MIN_VALUE);
		System.out.println("-------------------------------");
		System.out.println("Max Int: " + Integer.MAX_VALUE);
		System.out.println("Min Int: " + Integer.MIN_VALUE);
		System.out.println("-------------------------------");
		System.out.println("Max Long: " + Long.MAX_VALUE);
		System.out.println("Min Long: " + Long.MIN_VALUE);
		
		System.out.println("-------------------");
		
		
		//Datos de Tipo float
		
		float datoFloat = 1256.256f;
		
		System.out.println("Max Float: " + Float.MAX_VALUE);
		System.out.println("Min Float: " + Float.MIN_VALUE);
		
		// Dato de TIPO Double 
		
		double datoDouble = 5256.256;
		System.out.println("-------------------");
		
		System.out.println("Max Double: " + Double.MAX_VALUE);
		System.out.println("Min Double: " + Double.MIN_VALUE);
		
		//Para declarar una variable se realiza lo siguiente:
		// tipo_Dato nombreVariable = valor ;
		//Donde el tipo de dato puede ser cualquier primitivo u objeto
		// *Apartir de la versión 10 de Java se puede usar la palabra
		// reservada 'var'.
		
		var edad = 18;
		var isAceptado = true;
		var caracter = 65;
		
		System.out.println("El caracter es: "+ caracter);
		
		System.out.println("Texto \n con línea aparte y con \"Caracter\" ");
		
		//Para saber de qué tipo es la variable se escribe
		System.out.println( ((Object)edad).getClass().getSimpleName());
		
		//Conversión de tipo de datos
		byte edadAbueActual = 25;
		int edadEnVidas = edadAbueActual;
		
		System.out.println("La edad de abue es: "+ edadEnVidas);
		
		int coquita2lts = 129; //Cuando se quiere guardar una variable más grande que el tipo de dato se
		// da la vuelta en el número de datos disponibles de ese dato, por ejemplo 
		//byte tiene la capacidad de -128 a +127, para guardad  un 129 termina guardada en
		// -127, le da una vuelta al número de datos de byte
		byte coquitaMini = (byte) coquita2lts;
		
		int costo =(int) 9.86;
		
		System.out.println("La cantidad de líquido es: "+coquitaMini);
		System.out.println("La cantidad de líquido es: " + costo);
		
		//para indicar literales de números se puede hacer uso de _
		//Esto pod´ria ayudar visiblemente a la comprensión
		
		costo = 2_5_6_5_8_9;
		System.out.println("Valor del costo: " + costo);
		float precio = 589_478.785_45f;
		
		// costo = 0x0a; // número 10 decimal
		// costo = 0b1010; // número 10 en binario valor decimal 10
		System.out.println("Calor de costo:"+ costo);
		
		
		
		
	}

}
