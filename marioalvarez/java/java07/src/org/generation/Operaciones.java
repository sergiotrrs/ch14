package org.generation;

public class Operaciones {

	/*
	//Atributos de la clase
	int precio =18;
	//Atributos de la clase
	static int aristas =18;
	static String material="plastico";
	*/
	
	/*
	 * Para definir los métodos(funciones) se realiza lo siguiente
	 * 
	 * Modif_acceso Retorno NombreFuncion(Parámetros){
	 *  //Suerpo de la función
	 * }
	 */
	
	void suma(int a, int b) {
		System.out.println("La sumatoria es: "+(a+b));
		//Funcitón tipo void, porque no tengo retorno
	}
	
	static void suma2(int a, int b) {
		System.out.println("La sumatoria es: "+(a+b));
		//Funcitón tipo void, porque no tengo retorno
	}
	
	static int sumaRetorno(int a, int b) {
		return a+b; 
	}
	
	static int restaRetorno(int a, int b) {
		return a-b; 
	}
	static int multiplicacionRetorno(int a, int b) {
		return a*b; 
	}
	static double divisionRetorno(int a, int b) {
		return (double)a/b; 
	}
	static double raizCuadrada(int a) {
		//Quitar decimales Math.round(Math.sqrt(a)*100)/100.0;  1.7854*100->178.54->179/100.0 ->1.79
		//El método Math.round() se usa en Java para redondear un número dado a su entero más cercano. Como en este artículo, aprenderemos a redondear un double a dos decimales, la aplicación de Math.round() incluirá (double*100.0)/100.0.
		//https://www.delftstack.com/es/howto/java/how-to-round-a-double-to-two-decimal-places-in-java/#:~:text=trav%C3%A9s%20de%20ejemplos.-,Redondea%20un%20double%20a%20dos%20decimales%20usando%20Math.,a%20su%20entero%20m%C3%A1s%20cercano.
		
		//double valorfinal = Math.round(resulado*100d)/100d;
		return Math.sqrt(a);
	}
	
	static int pCounter(String text) {
		int result=0;
		text=text.toUpperCase();
		for(int i=0; i<text.length();i++) {
			if(text.charAt(i)=='P')
				result++;
		}
		return result;
	}
	
	static int maxNumber(int[] array) {
		int max=array[0];
		for(int i=1; i<array.length;i++) {
			max=Math.max(max, array[i]);
		}
		return max;
	}
	
	static int maxNumber2(int[] array) {
		int max=Integer.MIN_VALUE;
		for(int i: array) {
			max=Math.max(max,i);
		}
		return max;
	}
	
	

}
