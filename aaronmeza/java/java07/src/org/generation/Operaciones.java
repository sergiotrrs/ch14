package org.generation;

public class Operaciones {
	
	
	//Atributos de Objetos
	int precio = 18;
	
	//Atributos de la Clase
	
	static int aristas = 4;
	static String material = "Plastico";
	
	//Para definir los métodos o funciones se realiza lo siguiente :) 
	
	static void suma(int a, int b){
		System.out.println("La suma es: "+ (a + b));
		//No tengo return, si es así debo usar void
	}
	
	static int sumaRetorno(int a, int b) {
		return a + b;
	}
	
	
	
	static int resta(int a, int b) {
		return a - b;
	}
	
	
	
	static int multiplicacion(int a, int b) {
		return a * b;
	}
	
	
	
	static  double division(int a, int b) {
		return (double)a / b;
	}
	
	
	static double raizCuadrada(double a) {
		//return Math.sqrt(a);
		return Math.round(Math.sqrt(a)*1000)/1000.0;
	}
	
	
	static int buscaPs(String  enunciado) {
		
			int contador = 0;
			
			char[] aCaracteres = enunciado.toCharArray();
			for(int i = 0; i < aCaracteres.length; i++) {
				if(aCaracteres[i] == 'p' || aCaracteres[i] == 'P') {
					contador++;
					
				}
			}
			
			return contador;
		
	}
	
	
	static int valorMax(int[] lista) {
		
		int valueMax = lista[0];
		
		
		
		for(int i = 1; i < lista.length; i++) {
			if( valueMax < lista[i]) {
				valueMax = lista[i];
			}
		}
		return valueMax;
	}
	
	
	
	

	

	
	

}
