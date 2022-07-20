package or.generacion;

public class Operaciones {
	//Atributos de objetos
	int precio = 18;	
	//Atributos de la clase
	static int aristas = 4;
	static String material = "plastico";
	
	/**
	 * Para definir los métodos(funciones) se realiza la sig.
	 * Modific_acceso Retorno NombreFunción(ParámetrosFunción){
	 * 
	 * }
	 * @return 
	 * */
	
	
	static void suma(int a, int b){
		System.out.println("La sumatoria es: " + (a+b));
		//No tengo return, por lo tanto no tengo retorno
		//Si no tengo retorno, debo indicarlo con void
	}
	
	static int sumaRetorno(int a, int b){ // Se tiene que especificar el tipo de retorno que va a dar en este caso int
		return a + b;
	}
	static int resta(int a, int b){ 
		return a - b;
	}
	
	static int multiplicacion(int a, int b){ 
		return a * b;
	}
	
	static float division(int a, int b){ 
		return (float) a / b; //casteamos para que el resultado en decimal
	}
	
	static double raizCuadrad(double a) {
		
		return Math.round(Math.sqrt(a)*100)/1000.0;
		
	}
	
	static int numero(String text) {
		int resultado = 0;
		text = text.toUpperCase();
		for(int i=0; i<text.length(); i++) {
			if(text.charAt(i)=='P')
				resultado++;
		}
		return resultado;
		}
	}
	

