package org.generation;

import java.util.ArrayList;

public class ArrayListCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 * Un arrayList es una colección ordenada
		 * que permite elementos duplicados
		 * 
		 * Se basa en un array redimensionable que aumenta su tamaño 
		 * según crece la colección de elementos.
		 * 
		 * De las colecciones, es la que mejor rendimiento tiene.
		 * 
		 * Las colecciones no usan valores primitivos, usan los tipos 
		 * envolventes
		 * ej: 
		 * int-->Integer
		 * 
		 * Se debe agregar el paquete util.ArrayList
		 */

		//Definimos un arrayList de tipo String
		
		ArrayList<String> cars = new ArrayList<String>();
		ArrayList<Integer> edades = new ArrayList<Integer>();
		
		// Agregamos elementos al arreglo 
		
		cars.add("Volvo");
		cars.add("BMW");
		cars.add("Ferrari");
		cars.add("Vochido");
		cars.add("Volvo");
		cars.add("Mazda");
		
		System.out.println(cars);
		
		System.out.println("***************Agregar datos***********************");
		System.out.println("");
		//Agregar un elemento en una posición indicada
		cars.add(1,"Mercedes");
		System.out.println(cars);
		System.out.println(cars.size());
		
		System.out.println("***************Mostrar posición de datos***********************");
		System.out.println("");
		//Desplegar una posición indicada con get
		String autoLucia = cars.get(1);
		System.out.println("Auto de Lucía: " + autoLucia);
		
		System.out.println("***************Quitar datos***********************");
		System.out.println("");
		//Eliminar una posicón de la colección, utilizamos remove
		String elektra = cars.remove(2);
		System.out.println(cars);
		System.out.println("Se lleva Elektra: "+elektra);
		
		System.out.println("***************Clonar datos***********************");
		System.out.println("");
		
		ArrayList<String> autos;
		autos = (ArrayList<String>) cars.clone();
		System.out.println("HashCode Cars"+autos.hashCode());
		System.out.println("HashCode Cars"+cars.hashCode());
		autos.clear();
		System.out.println("******************Clear datos********************");
		System.out.println("");
		System.out.println("HashCode Cars"+cars.hashCode());
		System.out.println(autos); //cars está vacío porque se limpió el espacio en memoria
		System.out.println(cars); //cars está vacío porque se limpió el espacio en memoria
		System.out.println("************Iterar el arreglo**************************");
		System.out.println("");
		
		for(int i = 0; i < cars.size(); i++ ) {
			System.out.println("Te regalo el auto: "+cars.get(i));
		}
		
		System.out.println("*************** ITERAR CON FOREACH***********************");
		System.out.println("");
		for(String carro : cars) {
			System.out.println("Te regalo el auto: "+carro);
		}
		
		System.out.println("");
		System.out.println("***************ForEach con arrow function************************");
		System.out.println("");
		
		cars.forEach(elemento ->{
			System.out.println("Auto: "+elemento);	
		});
		
			
	}
}
