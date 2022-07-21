package org.generation;

import javax.swing.Spring;

public class Operaciones {
	//Atributos de objeto
	int precio = 18;
	//Atributos de la clase
	static int aristas = 4;
	static String material = "plastico";
	
	/**
	 * Para definir los métodos(funciones se realiza la sig.
	 * 
	 * 	Modif_acceso Retorno Nombre Function(ParámetroFuncion){
	 * 
	 * }
	 */
	
	static void suma(int a, int b) {
		System.out.println("La sumatoria es: " + (a+b));
		//No tengo return, por lo tanto no tengo retorno
		//Si no tengo retorno, debo indicarlo con void
	}
	
	static int sumaRetorno(int a, int b) {
		 return a+b;
	}
	
	static int resta(int a, int b) {
		 return a-b;
	}
	
	static int multiplicacion(int a, int b) {
		 return a*b;
	}
	static double division(int a, int b) {
		 return (double)a/b; //Se hace casteo para que el resultado aparezca con decimales
	}
	
	static double raizCuadrada(double a) {
		//Dos decimales, con 1000 son 3 decimales
		return Math.round( Math.sqrt(a)*100 )/100.0;  //1.78542259*100-> 178.5422->179 /100.0=1.79

	}
	
	static int letraP(int cont) {
		String[] myArray= {"Pepe Pecas pica papas con un pico y un palito"};
		for(int i = 0; i < myArray.length; i++) {
			if(i=='p' || i=='P') {
				cont = 0;
				cont++;
			}
		}
		return cont;
	}
}
