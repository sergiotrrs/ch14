package org.generation;

import java.util.ArrayList;

public class ArrayListCollection {

	public static void main(String[] args) {
		/**
		 * Un ArrayList es una colección ordenada
		 * que permite elementos duplicados.
		 * Se basa en un array redimensionable que aumenta su tamaño
		 * según crece la colección de elementos.
		 * De las colecciones, es la que mejor rendimiento tiene.
		 * 
		 * Las colecciones no usan valores primitivos, usan los tipos
		 * envolventes.
		 * ej. int -> Integer
		 */
		
		//Definimos un arrayList de tipo String 
		ArrayList<String> cars = new ArrayList<String>();
		ArrayList<Integer> edades = new ArrayList<Integer>();
		//Agregamos elementos al arreglo
		cars.add("Volvo");
		cars.add("BMW");
		cars.add("Vochito");
		cars.add("Volvo");
		cars.add("Mazda");
		
		//Agregar un elemento en una posición indicada
		cars.add(1,"Mercedez Benz");
		System.out.println(cars);
		System.out.println(cars.size());
		
		//Desplegar una posición indicada con get
		String autoLucia = cars.get(1);
		System.out.println("Auto de Lucía: " + autoLucia);
		
		//Eliminar una posición de la colección, utilizamos remove
		String elektra = cars.remove(2);
		System.out.println(cars);
		System.out.println("Se lleva Elektra: " + elektra);
		
		var autos = new ArrayList<String>();
		autos = (ArrayList<String>) cars.clone(); //No se copean los datos, sino la referencias (id´s). (autos =cars;)
		System.out.println("HashCode Cars "+ cars.hashCode());
		System.out.println("HashCode Autos "+ autos.hashCode());
		autos.clear();
		System.out.println("HashCode Autos "+ autos.hashCode());
		System.out.println(autos);
		System.out.println(cars);
		
		for (int i = 0; i < cars.size(); i++) {
			System.out.println("Te regalo el auto: " + cars.get(i));
		}
		
		for (String elemento : cars) {
			System.out.println("Datos: " + elemento);
		}
		
		 cars.forEach(elemento -> {
			 System.out.println("Auto: " + elemento);
		 });	
		
	}
}
