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
		// ejemplo int->Integer

		// Definimos un arrayList de tipo String
		ArrayList<String> cars = new ArrayList<String>();
		ArrayList<Integer> edades = new ArrayList<Integer>();
		// Agregamos elementos al arreglo
		cars.add("Volvo");
		cars.add("BMW");
		cars.add("Vochito");
		cars.add("Volvo");
		cars.add("Mazda");
		System.out.println(cars);
		// Agregar un elemento en una posicion indicada
		cars.add(1, "Mercedez Benz");
		System.out.println(cars);
		System.out.println(cars.size());

		// Desplegar una posicion indicada
		String autoLucia = cars.get(1);
		System.out.println("El auto de Lucia es: " + autoLucia);

		// Eliminar una posicion de la coleccion, utilizamos remove
		String elektra = cars.remove(2);
		System.out.println(cars);
		System.out.println("Elektra se lleva el: " + elektra);

		ArrayList<String> autos = new ArrayList<String>();
		autos = (ArrayList<String>) cars.clone();
		System.out.println(autos);
		System.out.println(cars);
		System.out.println(autos.hashCode());
		System.out.println(cars.hashCode());
		autos.clear();
		System.out.println("Cars"+cars);
		System.out.println("Autos"+autos);
		
		for (int i = 0; i < cars.size(); i++) {
			System.out.println("Te regalo el auto: "+cars.get(i));
		}
		
		for (String carros : cars) {
			System.out.println("Te regalo el auto: "+carros);
		}

		cars.forEach(elemento->{
			System.out.println("Auto: "+ elemento);
		});
		
		
	}

}
