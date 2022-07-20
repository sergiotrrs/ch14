package org.generation;

import java.util.Iterator;

public class OperacionesTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int aristas = Operaciones.aristas;
		Operaciones sapitoChoco = new Operaciones();
		Operaciones sapitoJabon = new Operaciones();
//		System.out.println("Numero de aristas " + aristas);
//		System.out.println("Precio sapito: " + sapitoChoco.precio);
//		System.out.println(sapitoJabon.aristas);
//		aristas = 6;
//		int nuevoPrecioJabon = sapitoJabon.precio = 10;
//		sapitoChoco.precio = 15;
//		sapitoChoco.aristas = 34;
//		System.out.println(nuevoPrecioJabon);
//		System.out.println(aristas + " " + sapitoChoco.precio + " " + sapitoChoco.aristas);
//		System.out.println(sapitoJabon.aristas);
		
		//Un sapito sumador que instancia sumas:
		//sapitoJabon.suma(5, 10);
		Operaciones.suma(6, 10);
		System.out.println("lA SUMA DEL RETORNO ES: " + Operaciones.sumaConReturn(5, 30));
		System.out.println("Resta: " + Operaciones.resta(5, 3));
		System.out.println("Multiplicación: " + Operaciones.multiplicacion(5, 6));
		System.out.println("División: " + Operaciones.division(5, 2));
		System.out.println("Raíz: " + Operaciones.raizCuadrada(3.14));
		
		
		String texto = "A Cinthia le gustan los limoncitos";
		
		System.out.println(texto);
		System.out.println("\n¿Cómo? ¿A quién le gustan los limones?");
		System.out.println(texto.substring(2, 9));
		char letra = texto.charAt(2);
		System.out.println("Primera letra: " + letra);
		System.out.println("N. total de letras: " + texto.length());
		
		int [] myArray = {2, 5, 33, 46};
		System.out.println("índice dos: " + myArray[2]);
		
		for (int i = 0; i < myArray.length; i++) {
			System.out.println("Valor en " + i + " : " + myArray[i]);
		}
		for (int numero: myArray) {
			System.out.println("Dato dentro del arreglo: " + numero);
		}
		
		
		/**
		 * Actividad 1:
		 * Determinar cuántas p hay en
		 * "Pepe Pecas pica papas con un pico y un palito"
		 * 
		 * Actividad 2:
		 * Determinar el número mayor de:
		 * {23, 56, 7, 98, 23, 1, 6}
		 * Usar una función Math.
		 * 
		 * 
		 * */
		String cadena = "Pepe Pecas pica papas con un pico y un palito";
		cadena = cadena.toUpperCase();
		String [] trabalenguas = {cadena};
		int contador = 0;
		char letter = 'P';
		for (int i=0; i<trabalenguas.length; i++) {
			if (cadena.charAt(i) == letter){
				System.out.println(i);
				contador+=1;
			}
			System.out.println(i);
		}
		System.out.println(contador);
		
		
	}

}
