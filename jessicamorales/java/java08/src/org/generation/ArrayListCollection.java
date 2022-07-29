package org.generation;

import java.util.ArrayList;

public class ArrayListCollection {

	@SuppressWarnings({ "unchecked", "unused" })
	public static void main(String[] args) {
		/**
		 * Un ArrayList es una colleccion ordenada
		 * que permite elementos duplicados
		 * un array redimencionable que aumenta su tama;o
		 * segunse crece la coleccion de elementos
		 * de las colecciones, es la que mejor rendimieno tiene.
		 * 
		 * las colecciones no usan valores primitivos,usan los tipos
		 * envolventes.
		 * ej. int -> integer
		 * 
		 * ArrayList tiene un tamaño dinámico, mientras que el de un 
		 * Array es definido en su creación
		 * 
		 */
		
		//definimos un arrayList de tipo String.
		ArrayList<String> cars = new ArrayList<String>();
		//Se deben utilizar valores envolventes no los primitivos
		ArrayList<Integer> edades = new ArrayList<Integer>();
		// agregamos elementos
		cars.add("volvo");
		cars.add("BMW");
		cars.add("vochito");
		cars.add("volvo");
		cars.add("mazda");
		
		cars.add("Mercedes Benz");
		System.out.println(cars);
		System.out.println(cars.size());
		
		//Desplegar una posición en una posición indicada
		String autoLucia = cars.get(1);
		System.out.println("Auto de Lucia: " + autoLucia);
		//Eliminar una posciión de la colección, utilizamos remove
		String elektra = cars.remove(2);
		System.out.println(cars);
		System.out.println(cars.size());
		System.out.println("Se lleva Elektra: " + elektra);
		
		//Con "new" se crea un nuevo objeto y se instancea
		//ArrayList<String> autos = new ArrayList<String>();
		var autos = new ArrayList<String>();
		autos = (ArrayList<String>)cars.clone();
		System.out.println("Hash Autos: " + autos.hashCode());
		System.out.println("Hash Cars: " + cars.hashCode());
		System.out.println(autos);
		System.out.println(cars);
		//autos = cars;
		System.out.println(autos);
		System.out.println(cars);
		System.out.println(autos.hashCode());
		System.out.println(cars.hashCode());
		autos.clear();
		System.out.println("Hash Autos: " + autos.hashCode());
		System.out.println(autos);
		System.out.println(cars);
		
		for (int i = 0; i < cars.size(); i++) {
			System.out.println("Te regalo el auto: " + cars.get(i));
		}
		
		for (String elemento : cars) {
			System.out.println(elemento);
		}
		
		cars.forEach(elemento ->{
			System.out.println("Auto: " + elemento);
		});

	}

}
