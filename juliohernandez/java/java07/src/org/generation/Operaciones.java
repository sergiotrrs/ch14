package org.generation;

public class Operaciones {
	//Atributos de objetos
	int precio = 18;
	
	//Atributos de la clase
	static int aristas = 4; //Hasta que se coloca 'static' se convierte en a de c.
	static String material = "plástico";
	
	/**
	 * Para definir los métodos (funciones) se realiza la sig.
	 * Modif_acceso Retorno NombreFuncion(ParámetrosFuncion){
	 * 
	 * }
	 */
	
	static void suma(int a, int b){ //Como no hay 'return' ocupar void
		System.out.println("La suma es: "+(a+b));
	}
	static int resta(int a, int b){ 
		return a-b;
	}
	
	void sumas(int a, int b) {
		System.out.println("La suma es: "+(a+b));
	}
	
	static long sumaRetorno(int a, long b){ //Ocupar el tipo más grande en return
		return a+b;
	}
	
	static int multiplicacion(int a, int b) {
		return a*b;
	}
	
	static double division (int a, int b) {
		return (double)a/b;
	}
	
	static double raizCuadrada(double a) {
		//return ((int)((Math.sqrt(a)*1000)) )/1000.0;
		return Math.round( Math.sqrt(a)*100 )/100.0;  //1.78542259*100-> 178.5422->179 /100.0=1.79
	}
	
	static int pepes(String frase) {
		int pes=0;
		frase=frase.toUpperCase();
		char fraseArray[]=frase.toCharArray();
		
		for (char c : fraseArray)
			if (c=='P')pes++;
		return pes;
	}
	
	static int Mayor(int[] Arreglo) {
		int mayor=0;
		for (int i : Arreglo) {
			mayor = Math.max(mayor, i);			
		}
		
		return mayor;
	}
}
