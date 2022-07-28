package org.generation;

public class OperacionesTest {

	public static void main(String[] args) {
		int aristas = Operaciones.aristas;  //Se usa directamente la clase
		
		Operaciones sapitoChoco = new Operaciones(); //instanciando mi clase operaciones
		Operaciones sapitoJabon = new Operaciones();
		
		sapitoJabon.precio = 9;
		
		/*
		 * System.out.println("Num. de aristas del molde: "+ aristas);
		 * System.out.println("Material de sapitos: "+ Operaciones.material);
		 * System.out.println("Precio de Sapito Chocolate: "+ sapitoChoco.precio);
		 * System.out.println("Precio de Sapito Jabón: "+ sapitoJabon.precio);
		 */
		
		//Con instanciar objetos se puede acceder al método (de objeto)
		sapitoJabon.sumas(5, 10);
		
		
		//Usar directamente mi método desde la clase (O definir la funcion como método de clase)
		Operaciones.suma(2, 2);
		
		long resultado = Operaciones.sumaRetorno(5, 8);
		System.out.println("El resultado es: "+resultado);
		System.out.println("El resultado resta es: "+(Operaciones.resta((int)resultado, 3)));
		System.out.println("El resultado multiplicacion es: "+(Operaciones.multiplicacion((int)resultado, 3)));
		System.out.println("El resultado division es: "+(Operaciones.division((int)resultado, 3)));
		System.out.println("El resultado raiz2 es: "+(Operaciones.raizCuadrada(3.15))); //De int a double no se ocupa casteo
		
		String texto = "A Cinthia le gustan los limones";
		
		System.out.println("¿A quién le gustan los limones? "+texto.substring(2,9)); //No inclusive el último
		
		char letra = texto.charAt(2);
		System.out.println("Primera letra: "+letra);
		System.out.println("Num. total de letras: "+texto.length());
		
		//For con Arreglos
		int[] myArray = {2,5,87,45,8};
		int miArreglo[]; //La long del arreglo es estática
		
		for (int i = 0; i < myArray.length; i++) {
			System.out.println("Valor en "+i+": "+myArray[i]);
		}
		
		/**
		 * Actividades
		 * 1. Determinar cuántas letras P(mayusc. y minusc) hay en "Pepe Pecas, Pica papas con un pico y un palito"
		 * 2. Determinar el número mayor de {23,56,7,98,23,1,6}
		 * Usaar anterior con una función Math
		 */
		
		System.out.println("-----\n");
		for (int i : myArray) {
			System.out.println("Dato dentro del arreglo: "+i);
		}
		
		int pes = Operaciones.pepes("Pepe Pecas, Pica papas con un pico y un palito");
		System.out.println("El número de pes es: "+pes);
		
		int numeros[]={23,56,7,98,23,1,6};
		int mayor = Operaciones.Mayor(numeros);
		System.out.println("El número mayor es: "+mayor);
	}

}
	