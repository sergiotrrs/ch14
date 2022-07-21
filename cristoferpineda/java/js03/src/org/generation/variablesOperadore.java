package org.generation;

public class variablesOperadore {
	
   public static void main(String[]args) {
	  /**
	   * El valor minimo es bit que puede ser 1 o 0
	   * 1 byte = 8 bits(00000000 - 11111111) = 256 combinaciones 
	   * El tipo byte puede almacenar numeros desde el -128 al 127
	   * 
	   * El tipo short puede almacenar numeros desde -32K a 32,762
	   * 
	   * El tipo int -2^31 a 2^31-1
	   * 
	   * El tipo long va desde -2^63 a 2^63-1
	   * 
	   * El tipo float acepta puntos decimales , es de 32 bits
	   */
	   byte datoByte=15;
	   short datoShort=1000;
	   int datoInt=150225;
	   //Para tipo long se recomienda poner una L al final
	   long datoLong=122456698L;
	                             //envolvente.atributo
	   System.out.println("Max Byte: " + Byte.MAX_VALUE);
	   System.out.println("Min Byte: " + Byte.MIN_VALUE);
	   System.out.println("Max Short: " + Short.MAX_VALUE);
	   System.out.println("Min Short: " + Byte.MIN_VALUE);
	   System.out.println("Max Int: " + Integer.MAX_VALUE);
	   System.out.println("Min Int: " + Integer.MIN_VALUE);
	   System.out.println("Max Long: " + Long.MAX_VALUE);
	   System.out.println("Min Long: " + Long.MIN_VALUE);
	   
	   //Dato de tipo float , se establece una f al final de el dato establecido
	   float datoFloat = 1256.256f;
	   System.out.println("Max Float: " + Float.MAX_VALUE);
	   System.out.println("Min Float: " + Float.MIN_VALUE);
	   
	   double datoDouble = 5256.256;
	   System.out.println("Max Double: " + Double.MAX_VALUE);
	   System.out.println("Min Double: " + Double.MIN_VALUE);
	   
	   //Para los booleanos los valores pueden ser true o false
	   boolean datoBool= true;
	   
	   //El tipo de dato char almacena un caracter 
	   char datoChar = 'a';
	   //datoChar = 'E'; 
	   //datoChar = '\u0045'; //se puede acceder al caracter unicode usando NumUni
	   datoChar = 69; //tambien con el valor decimal 
	   System.out.println("El caracter unicode 045:" + datoChar);
	   
	   //Para declarar una variable se realiza:
	   //tipo_Dato nombreVariable = valor;
	   //donde tipo de dato puede ser cualquier primitivo u objeto
	   //* A partir de la version 10 de java se puede usar la palabra reservada var
	   
	   var edad = 18;
	   var isAceptado = true;
	   var caracter = 'a';
	   
	   System.out.println("El caracter es: " + caracter);
	   
	   //Conversion de tipo de datos
	   byte edadAbueActual = 25;
	   int edadEnVidas = edadAbueActual;
	   System.out.println("La edad de abue es: " + edadEnVidas);
       
	   int coquita2lt = 266;
	   byte coquitaMini = (byte) coquita2lt;//se castea(se comprime) para que los 2k entren en los 150
	   
	   int costo = (int)9.86;//casting dentro del int 
	   System.out.println("La cantidad de liquido es: " + coquitaMini);//la cantidad de loquido seria 10 porque da la vuelta en el byte(0=>127=>-128=>0) hasta que caega el casteo 
	   
	   //para indicar literales de numeros , se puede hacer uso de "_"
	   //Esto para ayudar visualmente a la comprension 
	   //El guion bajo no puede ir al inicio , final o antes o despues de el punto 
	   costo = 2_5_6_5_8_9;
	   float precio = 5_89_478.785_45f;
	   
	   //costo = 0x0A; numero 10 en representacion hexadecimal
	   //costo = 0b1010; numero 10 en representacion binaria
	   costo = 012;// numero 10 en representacion octal
	   System.out.println("Valor de costo: " + costo);
	   
	   // para nombrar variables se puede poner 0-9 , a-z , A-Z , _ , $
	   //no se puede iniciar con numero la varibale
	   int $myVar;
	   int _myVar;
	   //int 1myVar, no se puede inicializar con num
	   int $my12V_ar;//Ejemplo de lo que se puede y no hacer
	   
	   /**
	    * new Class{
	    *     atributos_objeto; //fields o non static fields
	    *     static atributo_class; //static fields
	    * 
	    *   function accion(parametros){ //parametros de entrada
	    *      let var //variable
	    *   } 
	    * }
	    * 
	    */
   }
}
