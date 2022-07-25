package org.generation;

public class Operaciones {
    //Atributos de objetos
	int precio = 18;
	//Atributos de la clase
	static int aristas = 4;
	static String material = "plastico";
	
	/**
	 * Para definir los metodos(funciones)  se realiza lo sig.
	 * Modif_acceso Retorno NombreFuncion(ParametrosFuncion){
	 * 
	 * }
	 */
	
	static void suma(int a, int b){
		System.out.println("La sumatoria es: " + (a+b));
	    //No tengo return , por lo tanto no tengo retorno
		//Si no tengo retorno  , debo indicarlo con void
		//con static puedes llamar a la clase para utilizar directamente
	}
		static int sumaRetorno(int a, int b){
			return a + b;
	}
		static int resta(int a, int b){
			return a - b;
		}
		static int multiplicaciones(int a, int b){
			return a * b;
		}
		static double divicion(int a, int b){
			return (double)a / b;
		}
		static double raizCuadrada(int a){
			return Math.sqrt(a); //la clase Math ya esta precargada en java por el pakete lang no tiene que hacerse ninguna importacion
			//return Math.round( Math.sqrt(a)*100 )/100.0;  1.78542259*100-> 178.5422->179 /100.0=1.79
		} 
		
}
