package org.generation;

import java.util.ArrayList;

public class ArrayListCollection {

	public static void main(String[] args) {
		/**
		 * Un array list es una coleccion ordenada que permite elemento duplicados. se
		 * basa en un array redimensionable que aumenta su tamaño Segun crece la
		 * coleccion de elementos. De las colecciones es la que mejor rendimiento tiene.
		 */
//		Las coleeciones no usan valores primitivos, usan los tipos envolventes
		//ejemplo int->Integer
		
		//Definimos un arrayList de tipo String
		ArrayList<String> cars = new ArrayList<String>();
		
		//Agregamos elementos al arreglo
		cars.add("Volvo");
		cars.add("BMW");
		cars.add("Vochito");
		cars.add("Volvo");
		cars.add("Mazda");
		
		System.out.println(cars);
	}

}
