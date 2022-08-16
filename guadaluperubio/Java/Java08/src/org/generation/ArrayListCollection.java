package org.generation;

import java.util.ArrayList;
import java.util.Iterator;

public class ArrayListCollection {

	public static void main(String[] args) {
		
		
		// TODO Auto-generated method stub
		
		/**
		 * Un ArrayList es una coleccion ordenada
		 * que permite elementos duplicados
		 * se basa en un array redimensionable que aumenta su tamaño
		 * segun crece la coleccion de elementos.
		 * de las colecciones, es la que mejor rendimiento tiene.
		 * 
		 * las colecciones no usan valores primiticos, usa los tipos
		 * envolventes
		 * 
		 * ej. int -> Integer
		 */
		
		//definimos un ArrayList de tipo String
		
		ArrayList<String> cars = new ArrayList<String>();
		
		//Agregamos elementos al arreglo
		
		cars.add("volvo");
		cars.add("BMW");
		cars.add("Bochito");
		cars.add("volvo");
		cars.add("Mazda");
		System.out.println(cars);
		
		
		//Agrega un elemento en la posición indicada
		cars.add(1, "Mercedes Benz");
		System.out.println(cars);
		System.out.println(cars.size());
		
//		desplegar una posiscion indicada
		String autoLucia =cars.get(1);
		System.out.println("Auto de Lucia: " +autoLucia);
		
//		Eliminar una posición de la colección, utilizamos remove
		cars.remove(1);
		System.out.println(cars);
		
//		PAra guardar la variable eliminada 
		String elektra= cars.remove(2);
		System.out.println(cars);
		System.out.println("Se lleva elektra a " +elektra);
		
		ArrayList<String>autos; 
		autos = new ArrayList<String>();
		autos = (ArrayList<String>) cars.clone();
		System.out.println("HashCode autos " +autos.hashCode());
		System.out.println("HashCode cars" +cars.hashCode());
		autos.clear();
		System.out.println(autos);
		System.out.println(cars);

		
		
		for (int i = 0; i < cars.size(); i++) {
			System.out.println("te regalo el auto: "+ cars.get(i));
		}
		
		for (String elemento : cars) {
			System.out.println("Datos: " +elemento);			
		}
		
		cars.forEach(elemento ->{
			System.out.println("Auto: " +elemento);
		});
		
	}

}


