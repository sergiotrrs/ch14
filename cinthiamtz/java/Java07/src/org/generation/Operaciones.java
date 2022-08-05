package org.generation;

public class Operaciones {

	//Atributos de objetos
	
	int precio=18;
	//Atributos de la clase
	
	static int aristas=4;
	static String material = "plastico";
	
	/**
	 * Para definir los metodos (funcionaes) se realiza la sig:
	 * 
	 * Modificador_aceeso Retorno NOmbreFuncio(ParametrosFuncion){
	 * }
	 */
	
	
	static void suma(int a, int b){
		System.out.println("La sumatoria es: " + (a+b));
		//No tengo return, por tanto no tengo retorno
		//Si no tengo retorno, debo de indicarlo con void
	}
	
	
	
	
	static int sumaRetorno (int a, int b){
		return (a+b);
	
	}
	
	static int resta (int a, int b){
		return (a-b);
	
	}
	
	static int multiplicador (int a, int b){
		return (a*b);
	
	}
	
	static double division (int a, int b){
		return (double)a/b;
	
	}
	
	static double raizCuadrada(double a) {
	
		return Math.round( Math.sqrt(a)*100 )/100.0;  //1.78542259*100-> 178.5422->179 /100.0=1.79

	
	}
	

	static int numMayor(int[] a) {
		int numeroMayor = 0;
//		for (int i = 0; i < a.length; i++) {
//			numeroMayor = Math.max(numeroMayor, a[i]);
//		}
		for (int numero: a) numeroMayor = Math.max(numeroMayor, numero);
		
		return numeroMayor;
	}

	
	static int pNum(String textoP, char letra) {
		textoP = textoP.toUpperCase();
		int contador = 0;

		for (int i = 0; i < textoP.length(); i++) {
			if (textoP.charAt(i) == letra)
				contador++;
		}
		return contador;
	}

	
	
	
}
