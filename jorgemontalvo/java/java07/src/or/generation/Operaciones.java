package or.generation;

public class Operaciones {
	//Atributos de objetos
	int precio = 18;
	//Atributos de la clase
	static int aristas = 4;
	static String material = "plastico";
	
	/**
	 * Para definir los métodos (funciones) se realiza la sig.
	 * 
	 * Modif_acceso Retorno NombreFuncion((ParametrosFunncion) {
	 * 
	 */

	static void suma(int a, int b){
		System.out.println("La sumatoria es: " + (a+b));
		// No tengo return, por lo tanto no tengo retorno
		//Si no tengo retorno, debo indicarlo con void.
	}
	
	static int sumaRetorno(int a, int b) {
		return a + b;
	}
	static int resta(int a, int b) {
		return a - b;
	}
	static int multi(int a, int b) {
		return a * b;
	}
	static double divide(int a, int b) {
		return (double)a / b;
	}
	
	static double raizCuadrada(double a) {
//		return Math.sqrt(a); //sin redondear
		return (Math.round(Math.sqrt(a)*1000)/1000.0); //redondeado
		//return Math.round( Math.sqrt(a)*100 )/100.0;  //1.78542259*100-> 178.5422->179 /100.0=1.79

	}
	
	static int letras(String traba, char letra) {
		int imprimir=0;
		String trabaMini;
		
		trabaMini=traba.toLowerCase();
		for (int i=0 ; i<trabaMini.length() ; i++) {
			if (trabaMini.charAt(i) == letra)
				imprimir ++;
		}
				return imprimir;
				
	}
	
	static int numMayor(int a[]) {
		int numeroMayor = 0;
		for (int i = 0; i < a.length; i++) {
			numeroMayor = Math.max(numeroMayor, a[i]);
		}
		return numeroMayor;
	}

//	static int numeroMayor(int a) {
//		
//	}
}
