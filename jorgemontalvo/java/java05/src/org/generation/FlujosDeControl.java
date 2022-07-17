package org.generation;

public class FlujosDeControl {

	public static void main(String[] args) {
		
		/**
		 * if (condicion){
		 * Bloque de instrucciones
		 * }
		 */
		int edad = 80;
		
//		if (edad>70) System.out.println("Ya requiere cambio, den su persión");
//		System.out.println("Instrcción al final del if");

		//Si se requiere más de una instrucción, realicé un bloque de 
		//codigo con {y}
		if (edad>50) {
			System.out.println("El director ya le duelen las dos rodillas");
			edad -=10; // edad = edad -10
			System.out.println("Se realizó cirujias al Dir, con uestros impuestos");
			System.out.println("Nueva edad del Dir: " + edad);
			
			//Essta cariable solo tiene alcance en el bloque
			int nAutos = 10;
			
		}
//		System.out.println("N. autos: " +nAutos); Esta var no tiene alcance a nAutos
		int nAutos = 40;
		if (nAutos>20 && edad<80) {
			System.out.println("El Dir puede conducir lo que quiera");
			int modeloAuto = 2019;
			//Tener un if, dentro de otro if, se llaman f anidadeos
			if (modeloAuto<2020) {
			System.out.println("El Dir. regalará estas antiguedades");
				modeloAuto-=5;
				System.out.println("N. de autos restantes: " + modeloAuto);
			}
		}
		/**
		 * En caso de que no se aplique la condicion if, podemos usar la 
		 * declaracion else, para que realice otra acción
		 * Si se realiza la declaracuon if, la declaracion else ya no se ejecuta
		 * 
		 * 	if (declaracion){
		 * Bloque de codigo
		 * }
		 * else{
		 * Bloque de codigo
		 * }
		 */
		int billonesSP = 23;
		int nBitcoins = 256;
		if (billonesSP > 200 || nBitcoins>5892 ) System.out.println("Sea mi padrino");
		else System.out.println("No compro en tiendas conocidad");
		
		/**
		 * if (condicion) bloqueInstruccion
		 * else if (condicion nueva) bloqueInstrccion
		 * else if (condicion nueva) bloqueInstrccion
		 * else bloqueInstruccion
		 */
		int retencionISR = 35;
		int retencionIVA = 16;
		
		if (retencionISR<30 && retencionIVA<15) System.out.println("Me alcanza");
		else if (retencionISR<30 && retencionIVA<17) 
			System.out.println("No me alcanza pero algo es algo");
		else
			System.out.println("Debo trabajar más, siempre contento =)");
		
		/**
		 * Una forma rápida de realizar una evaluación condicional es con
		 * el uso del operador terniario.
		 *  (condicional) ? instrucciones si es true" : "Insttrucciones si es false";
		 */
		boolean esFrontera = true;
		int impuestoAplicar = (esFrontera) ? 8 : 16;
		System.out.println("Impuesto a aplicar: " + impuestoAplicar);
		
	System.out.println("Tipo de región: " + ((impuestoAplicar>8) ? "Centro":"frontera"));
	
	/**
	 * La condicion switch, podemos evaluar multiples opciones
	 * 	switch (expresion a evaluar){
	 * 		case opcion1: bloque de codigo
	 * 					break; 
	 * 		case opcion2: bloque de codigo
	 * 					break;
	 * 		case opcion n: bloque de codigo
	 * 					break;
	 * 		default:
	 *			Bloque de codigo si ningun case cumple la extensión
	 *					break; 
	 * }
	 */
	
	int mes = 8;
	String mesTxt;
	switch (mes) {
		case 1: mesTxt = "Enero";
			break;
		case 2: mesTxt = "Febrero";
			break;
		case 3: mesTxt = "Marzo";
			break;
		case 4: mesTxt = "Abril";
			break;
		default: mesTxt = "No tiene registrado";
	}
	System.out.println("Mes seleccionado: " + mesTxt);
	}

}
