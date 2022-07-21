package org.generation;

import java.util.ArrayList;
public class ArrayListCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/*
		 * Un Arraylist es una colección ordenada
		 * que permite elementos duplicados.
		 * Se basa en un array redimensionable que aumenta su tamaño
		 * según crece la colección de elementos
		 * De las colecciones, es la que mejor rendimiento tiene.
		 * 
		 * IMPORTANTE: las colecciones no usan valores primitivos, usan los tipos
		 * envolventes.
		 * 
		 * ej. int --> Integer
		 */
		
		//Definimos (Declaramos) un arraylist de tipo String
		ArrayList<String> cars = new ArrayList<String>();
		
		//Agregamos los elementos al arreglo
		
		cars.add("Volvo");
		cars.add("BMW");
		cars.add("Vochito");
		cars.add("Volvo");
		cars.add("Mazda");
		
		System.out.println(cars);
	}

}
