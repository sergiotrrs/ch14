package org.generation;

import java.util.ArrayList;


public class ArrayListCollection {

	public static void main(String[] args) { 
		//se puede añadir con main+ctrl+espacio
		/**
		 * Un ArrayList es una coleccion ordenada 
		 * que permite elementos duplicados
		 * se basa en un array redimensionable
		 * que aumenta su tamaño 
		 * segun crece la coleccion de elementos 
		 * de las colecciones, es la que mejor rendimiento
		 * tiene
		 * 
		 * Las colcciones no usan valores primitivos,
		 * usan los tipos envolventes 
		 * ej. int->integer
		 */
		
		/**
		 * ArrayList tiene un tamaño dinámico, 
		 * mientras que el de un Array es 
		 * definido en su creación
		 * 
		 * Orden y duplicados
		 */
		
		//Definimos un arraylist de tipo string 
		ArrayList<String> cars =new ArrayList<String>();
		ArrayList<Integer> edades=new ArrayList<Integer>();
		
		//Pa que agarre el arraylist tenemos que poner 
		//esto al principio: import java.util.ArrayList;
		
		//Agregamos elementos al arreglo 
		cars.add("Volvo");
		cars.add("BMW");
		cars.add("Mazda");
		cars.add("Volvo");
		
		
		cars.add(1, "Mercedes Benz");
		
		System.out.println(cars);
		System.out.println(cars.size());
		
		//Desplegar una posición indicada con get
		String autoLucia=cars.get(1);
		System.out.println("Auto de Lucía: "+ autoLucia);
		
		//Eliminar una posición de la colección con REMOVE
		String elektra=cars.remove(2);
		System.out.println(cars);
		System.out.println("Elektra se lleva un: "+ elektra);
		
		//los () es para llamar al elemento constructor
		
		//coleccion con cosas tipo string 
		//autos está de tipo arraylist
		//objeto de tipo arraylist
		
		ArrayList<String> autos=new ArrayList<String>();
		//autos=cars; //como son objetos aqui van a 
		//apuntar a la misma dirección de memoria
		//por eso se debe clonar la info de cars
		
		autos=(ArrayList<String>) cars.clone();
		System.out.println("hash de autos: "+ autos.hashCode());
		System.out.println("hash de cars: "+ cars.hashCode());
		autos.clear();
		System.out.println("valor de autos: "+autos);
		System.out.println("Valor de cars: "+ cars);
		
		System.out.println("hashn de autos: "+ autos.hashCode());
		System.out.println("hashn de cars: "+ cars.hashCode());
	
		for (int i=0;i<cars.size();i++) {
			System.out.println("Te regalo el auto: "+ cars.get(i));
		}
		
		for (String elemento : cars) {
			System.out.println("con el for: : "+ elemento);
		}

		cars.forEach(elemento ->{
			System.out.println("foreach->: " + elemento);
		});

		
		
	}
}
