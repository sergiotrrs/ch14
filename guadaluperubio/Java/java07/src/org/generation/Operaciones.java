package org.generation;

public class Operaciones {
		//Atributos de objetos
		int precio = 18;
		
		//Atributos de la clase
		static int aristas = 4;
		static String material = "plastico";
		
		
		/**
		 * Para definir los métodos (funiones) se realiza la sig.
		 * 
		 * Modifi:acceso Retorno NOmbreFuncion(parametroFunciones){
		 * }
		 * */
	
		static void suma(int a, int b){
			System.out.println("La sumatoria es: " + (a+b));
			//no tengo return, por lo tanto no tengo retorno
			//si no tengo retorno, debo indicarlo con void
		}
	
		static int sumaRetorno(int a, int b){    //importante decir que tipo de retorno vamos a tener
			return a + b;
		}

		
		static int resta(int a, int b){    //importante decir que tipo de retorno vamos a tener
			return a - b;
		}
		static int multiplicacion(int a, int b){    //importante decir que tipo de retorno vamos a tener
			return a * b;
		}
		static double division(int a, int b){    //importante decir que tipo de retorno vamos a tener
			return (double) a / b;
		}
		
		static double raizCuadrada(double a) {
//			return ((int)((Math.sqrt(a)*1000)))/1000);
			return Math.round( Math.sqrt(a)*100)/100.0;  //1.766547578584*100 -> 1.766 -> 177 /100.0=1.77
			
		
		}

		
			
	
