package org.generation;

public class Operaciones {
	//Atributos de objetos
	int precio= 18;
	//Atributos de la clase
	static int aristas = 4;
	static String material="plastico";

/**
 * Para definir los métodos (funciones) se realiza lo siguiente.
 * 
 * Modificador_acceso Retorno NombredelaFuncion(ParámetrosFunción){
 * 
 * }
 */
	static void suma(int a, int b){
		System.out.println("La sumatoria es: "+(a+b));
		//No tengo return, no tengo retorno.
		//Si no tengo retorno debo indicarlo con void.
		//static sirve para que pertenezca a la clase.
	}
	static int sumaRetorno(int a, int b){
		return a + b;
	}
	static int resta(int a, int b){
		return a - b;
	}
	static int multiplicacion(int a, int b){
		return a * b;
	}
	static double division(int a, int b){
		return (double)a / b;
	}
	static double raizCuadrada (double a) {
		//return ((int)((Math.sqrt(a)*1000)) )/1000.0;
		return Math.round(Math.sqrt(a)*100)/100.0;//1.78542259*100-> 178.5422->179 /100.0=1.79
	}
	static int contarP(String texto) {
		int contador=0;
		texto=texto.toUpperCase();
		for (int i = 0; i < texto.length(); i++) {
			if (texto.charAt(i)=='P') {
				contador++;
			}
		}
		return contador;
	}
	
	static int numMax(int[] arreglo) {
		int maximo=arreglo[0];
		for (int i = 0; i < arreglo.length; i++) {
			maximo=Math.max(maximo, arreglo[i]);			
		}
		return maximo;
		
	}
	
}

