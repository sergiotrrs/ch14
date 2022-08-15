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
		
		
		//--------------------------- SESIÓN 2 ARRAYLIST
		
		
		
		
		//Agregamos los elementos al arreglo
		
		cars.add("Volvo");
		cars.add("BMW");
		cars.add("Vochito");
		cars.add("Volvo");
		cars.add("Mazda");
		
		System.out.println(cars);
		
		//Agregar elementos 
		cars.add(1,"Mercedes benz");
		System.out.println(cars);
		System.out.println(cars.size());
		
		//Desplegar una posición con get
		String autoLucia = cars.get(1);
		System.out.println("Auto de lucía: " +autoLucia);
		
		//Eliminar un aposición de la colección, utilizamos remove
		
		String elektra = cars.remove(2);
		System.out.println(cars);
		System.out.println("Se lleva Elektra: " + elektra);
		
		
		// COMO SE PUEDEN DIPLICAR COLECCIONES
		ArrayList<String> autos = new ArrayList<String>();
		//autos = cars;
		//otra forma de copiar es con método clone()
		autos = (ArrayList<String>) cars.clone();  //en clone son objetos totalmente separados
		System.out.println(autos.hashCode()); //Hashcode regresa longitud
		System.out.println(cars.hashCode());
		autos.clear();
		System.out.println(cars);
		
		for(int i=0; i<cars.size(); i++) {
			System.out.println("Te regalo el auto: " + cars.get(i));
		}
		
		//Para imprimir con forEach los carros
		for(String elemento: cars) System.out.println("Con for Each: "+ elemento);
		
		//Foreach con función flecha---- ES MÁS PRÁCTICO
		
		cars.forEach(elemento ->{
			System.out.println("Auto: "+ elemento);
		});
		
		
	}

}
