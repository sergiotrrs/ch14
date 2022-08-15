package org.generation;

import java.util.ArrayList;

public class ArrayListCollection {

	public static void main(String[] args) {
		/**
		 *  Un ArrayList es un colección ordenada
			que permite elementos duplicados
			se basa en un array redimensionable que aumenta su tamaño
			según crece la colección de elementos.
			De las colecciones, es la que mejor rendimiento tiene.
			Las colecciones no usan valores primitivos, usan los
			tipos envolventes.
			ej: int->Integer
		 */
		
		//Definimos un Array de tipo String.
		ArrayList<String> cars = new ArrayList<String>();
		ArrayList<Integer> edades = new ArrayList<Integer>(); 
		
		//Agregamos elementos al arreglo
		cars.add("Volvo");
		cars.add("BMW");
		cars.add("Vochito");
		cars.add("Volvo");
		cars.add("Mazda");
		
		//Agregar un elemento en una posicion indicada
		cars.add(1,"Mecedes-benz");
		System.out.println(cars);
		System.out.println(cars.size());//Tamaño de la colección
		
		//Desplegar una posición indicada con get
		String autoLucia = cars.get(1);
		System.out.println("Auto de Lucía: "+autoLucia);
		
		//Eliminar una posición de la colección utuilizamos remove
//		cars.remove(2);
//		System.out.println(cars);
		
		//Guardándolo en una variable
		String elektra= cars.remove(2);
		System.out.println(cars);
		System.out.println("Se lleva Elektra: "+elektra);
		
		//Para instanciar mi clase de tipo Array List necesito llamar a mi constructor con los paréntesis
		ArrayList<String> autos = new ArrayList<String>();
		//o var autos = new ArrayList<String>(); //No se puede en Java 8
		autos = (ArrayList<String>) cars.clone();
		System.out.println("HashCode Autos: " +autos.hashCode());
		System.out.println("HashCode Cars: " +cars.hashCode());
		autos.clear();
		System.out.println("HashCode Autos: " +autos.hashCode());
		System.out.println(autos);
		System.out.println(cars);
		
		for (int i = 0; i<cars.size(); i++) {
			System.out.println("Te regalo el auto "+ cars.get(i));
		}
		
		for (String autoRegalo: cars){
			System.out.println("El segundo regalo: " + autoRegalo);
		}
		
		cars.forEach(elemento->{
			System.out.println("Auto: "+ elemento);
		});
		
		
	}

}
