package or.generation;

public class OperacionesTest {

	public static void main(String[] args) {
		
//		int aristas = Operaciones.aristas; // Se usa directamente la clase
//		Operaciones sapitoChoco = new Operaciones(); //Instanciando mi clase
//		Operaciones sapitoJabon = new Operaciones(); //Instanciando mi clase
//		sapitoJabon.precio = 9;
		
//		System.out.println("N. de aristas del molde " + aristas);
//		System.out.println("Material del molde: " + Operaciones.material);
//		System.out.println("Precio Sapito Chocolate " + sapitoChoco.precio);
//		System.out.println("Precio Sapito Chocolate " + sapitoJabon.precio);
		
		//Operaciones
//		sapitoJabon.suma(5, 10);
		
		//Usar directamente mi método desde la clase
//		Operaciones.suma(5, 10);
//		Operaciones.suma(2, 2);
		
		int resultado = Operaciones.sumaRetorno(5, 10);
		System.out.println("El resultado suma: " + resultado);
		System.out.println("El resultado resta: " + Operaciones.resta(resultado,3));
		System.out.println("El resultado multiplica: " + Operaciones.multi(resultado,2));
		System.out.println("El resultado divide: " + Operaciones.divide(resultado,4));
		System.out.println("El resultado de la raíz es: " + Operaciones.raizCuadrada(3.14));
		
		String texto ="A Cinthia le gustan los limones";
		System.out.println("¿A quién le gustan los limones?" + texto.substring(0,9));
		char letra = texto.charAt(2);
		System.out.println("Primera letra " + letra);
		System.out.println("N. total de letras: " + texto.length());
		
		int [] myArray = {2,5,48,7,19,4};
		System.out.println("Psición índice 2 " + myArray[2]);
		for (int i = 0; i < myArray.length; i++) {
			System.out.println("Valor en " +i+ " : " + myArray[i]);
		}
		for (int numero: myArray) {
			System.out.println("Dato dentro del arreglo: " + numero);
		}
		
		/**
		 * Actividad 1: 
		 * Determinar cuantas letras P (minusculas y mayusculas) hay en
		 * "Pepe Pecas pica papas con un pico y un palito"
		 * 
		 * Determinar el número mayor de:
		 * {23,56,98,23,1,6}
		 * Usar una función Math
		 */
		
		int imprimir = Operaciones.letras("Pepe Pecas pica papas con un pico y un palito", 'p');
		System.out.println("El número de veces que se repite es: " + imprimir);
		
		int [] myArray2 = {2,56,1,20,112};
		System.out.println("Numero mayor: " + Operaciones.numMayor(myArray2));
	}

}
