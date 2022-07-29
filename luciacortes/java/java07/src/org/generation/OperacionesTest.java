package org.generation;

public class OperacionesTest {

	public static void main(String[] args) {
		
//		int aristas = Operaciones.aristas; //Se usa directamente la clase
//		Operaciones sapitoChoco = new Operaciones();// Instanciando mi clase
//		Operaciones sapitoJabon = new Operaciones();
//		sapitoJabon.precio = 9;
		
//		System.out.println("N. de aristas del molde "+ aristas);
//		System.out.println("Material del molde "+Operaciones.material);
//		System.out.println("Precio Sapito Chocolate "+sapitoChoco.precio);
//		System.out.println("Precio Sapito Jabón "+sapitoJabon.precio);

		//Operaciones
		//sapitoJabon.suma(5, 10);
		
		//USar directamente mi método desde la clase
		//Operaciones.suma(5, 10);
		//Operaciones.suma(2, 2);
		
		//Instanciando distinto la suma:
		//Operaciones calculadora = new Operaciones();
		//calculadora.suma(5, 10);
		
		int resultado= Operaciones.sumaRetorno(5,8);
		System.out.println("El resultado suma: "+resultado);
		System.out.println("El resultado resta: "+Operaciones.resta(resultado, 3));
		System.out.println("El resultado multiplica: "+Operaciones.multiplicacion(resultado, 2));
		System.out.println("El resultado division: "+Operaciones.division(resultado, 4));
		System.out.println("El resultado raíz2: "+Operaciones.raizCuadrada(3.14));
		
		
		String texto = "A Cinthia le gustan los limones";
		System.out.println("¿A quién le gustan los limones? "+ texto.substring(0,9));
		char letra = texto.charAt(2);
		
		System.out.println("Primera letra: "+letra);
		System.out.println("Número total de letras: "+texto.length());
		
		int[] myArray= {2,3,87,45,8};
		//System.out.println("Posición índice 2: "+myArray[2]);
		for(int i=0; i<myArray.length; i++) {
		System.out.println("Valor en "+i+": "+myArray[i]);
		}
		//Sirve para iterar arreglos y colecciones: Damos de alta una variable. 
		//Por cada iteración va a obtener el valor del arreglo.
		for(int numero: myArray) {
			System.out.println("Dato dentro del arreglo: "+numero);
		}	
	
	/**
	 * Actividad 1:
	 * Determinar cuántas letras P (mayúsculas y minúsculas) hay en total en:
	 * "Pepe Pecas pica papas con un pico y un palito"
	 * 
	 * Determinar el número mayor de:
	 * {23,56,7,98,23,1,6}
	 * Usar una función Math.
	 * 
	 */
	
	String frase = "Pepe Pecas pica papas con un pico y un palito";
	frase = frase.toUpperCase();
	
	System.out.println("El numero total de P's es: "+Operaciones.contarP(frase));
	
	int[] arreglo = {23,56,7,98,23,1,6};
	System.out.println("El numero mayor es: " + Operaciones.numMax(arreglo));
	}
}
