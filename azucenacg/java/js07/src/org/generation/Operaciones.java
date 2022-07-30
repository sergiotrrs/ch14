package org.generation;

public class Operaciones {

	//Atributos de objeto
	int precio=18;
	
	//Atributos de la clase
	static int aristas=4;
	static String material="Plástico";
	/**
	 * Para definir los métodos (funciones)
	 * se realiza lo siguiente:
	 * Modif_acceso Retorno NombreFuncion(ParametrosFuncion){
	 * }
	 */
	
	//Si no tengo retorno, se usa void
//	void suma(int a, int b) {
//		System.out.println("Suma es: "+ (a+b));
//	}
	
	//con el static ya se da a entender que es un atributo de 
	//clase 
	
	static void suma(int a, int b) {
		System.out.println("Suma es: "+ (a+b));
	}
	
	//el int es pa indicar que tipo de dato retorna 
	//cuando estamos haciendo la función son parámetros
	//Esto es la firma del método o de la función
	static int sumaRetorno(int a,int b) {
		return a+b;
	}

	static int resta(int a,int b) {
		return a-b;
	}

	static int mul(int a,int b) {
		return a*b;
	}

	static double div(int a,int b) {
		return (double)a/b;
	}
	static double raiz(int a) {
		//return Math.sqrt(a);
		return Math.round((Math.sqrt(a)*100))/100.0; //1.772004514666935*100->177.2004514666935->177 /100.0=1.77

	}
	
	static int	max(int a, int b) {
		return (int)Math.max(a, b);
	}
	
}
