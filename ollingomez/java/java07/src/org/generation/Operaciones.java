package org.generation;

public class Operaciones {
	//Atributos de objetos
	int precio = 18;
	//Atributos de la clase
	static int aristas = 4;
	static String material="plastico";
	
	/*
	 * Para definir métodos (funciones) se realiza la siguiente
	 * 
	 * Modif_acceso Retorna NombreFunccion(ParámetrosFunción){
	 * 
	 * }
	 */
//	void suma(int a, int b){//de esta forma hay que instanciar un objeto
//		System.out.println("La sumatoria es: "+ (a+b));
//		//No tengo return, por lo tanto no tengo retorno
//		//Si no tengo return, debo indicarlo con void 
//	}
	static void suma(int a, int b){
		System.out.println("La sumatoria es: "+ (a+b));
		//No tengo return, por lo tanto no tengo retorno
		//Si no tengo return, debo indicarlo con void
	}
	
	static int sumaRetorno(int a, int b){
		return a+b;
	}
	
	static int resta(int a, int b){
		return a-b;
	}
	
	static int multiplicacion(int a, int b){
		return a*b;
	}
	static double division(int a, int b){
		return (double) a/b;
	}
	
	static  double raizCuadrada(double a) {
		//return ((int)((Math.sqrt(a)*1000)))/1000.0;
		return Math.round(Math.sqrt(a)*1000)/1000.0; //1.772004514666935*100->177.2004514666935->177 /100.0=1.77

	}
	

}
