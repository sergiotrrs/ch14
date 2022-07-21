package java08;

import java.util.ArrayList;

public class ArrayListCollection {

	public static void main(String[] args) {
		/**
		 * Un ArraList es una colección ordenada
		 * que permite elementos duplicados.
		 * Se basa en un array rediensionable que aumenta su tamaño
		 * según crece la colección de elementos.
		 * De las colecciones, es la que mejor rendimiento tiene.
		 * 
		 * Las colecciones no usan valores primitivos, usan los evolventes.
		 * ej. int -> Integer
		 * */

		//Definimos un ArrayList de tipo String.
		ArrayList<String> cars = new ArrayList<String>();
		
		//Agregamos elemntos al arreglo
		cars.add("volvo");
		cars.add("BMW");
		cars.add("Vochito");
		cars.add("Volvo");
		cars.add("Mazda");
		
		System.out.println(cars);
		
		
		
		
		
	}

}
