package org.generation;

public class Operaciones {
	//Atributos de objetos
	int precio = 18;
	//Atributos de la clase
	static int aristas = 4;
	static String material = "plastico";
	/**
	 * Para definir los métodos(funciones) se realiza lo siguiente:
	 * 
	 * Modificador de acceso Retorno Nombre de la Función (Parámetros de la función )
	 * ModifAcceso  Retorno  NombreFuncion (ParámetrosFunción){
	 * 
	 * 	}
	 * 
	 * 
	 */
	
	static void suma (int a, int b){
		System.out.println("La sumatoria es: " + (a+b));
		//no tiene return, por lo tanto no tiene retorno
		//si no tiene retorno se debe indicar con void.
	}
	
	static int sumaRetorno(int a, int b /*parámetros*/) {
		return a+b;
	}
	
	static int resta(int a, int b /*parámetros*/) {
		return a-b;
	}
	
	static int multiplicacion(int a, int b /*parámetros*/) {
		return a*b;
	}
	
	static double division(int a, int b /*parámetros*/) {
		return (double)a/b;
	}
	
	static double raizCuadrada(double a) {
		
		//return Math.sqrt(a);
		//return Math.round(Math.sqrt(a)*100)/100.0;
		return Math.round( Math.sqrt(a)*100 )/100.0;  //1.78542259*100-> 178.5422->179 /100.0=1.79

		//return Math.round(Math.sqrt(a));
		
	}
	
	
	
	
	
	
	
}
