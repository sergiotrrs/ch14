package java08;

import java.util.ArrayList;

public class ArrayListCollection {

	public static void main(String[] args) {
		/**
		 * Un ArrayList es una coleccion ordenada
		 * que permite elementos duplicados
		 * Se basa en un array redimensionable que aumenta su tamaño
		 * segun crece la coleccion de elementos.
		 * De las colecciones, es la que mejor rendimiento tiene.
		 * 
		 * Las colecciones no usan valores primitivos, usan los tipos envolventes.
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
		cars.add(1,"Mercedes-Benz");
		System.out.println(cars);
		System.out.println(cars.size());
		
		//Desplegar una posicion indicada con get
		String autoLucia = cars.get(1);
		System.out.println("El auto de Lucia es un:: " + autoLucia);
		
		//Eliminar una posicion de la coleccion, utilizamos remove
		String elektra = cars.remove(2); //eliminamos BMW y se lo asigansmos a la variable Elektra
		System.out.println(cars);
		System.out.println("El carro que se lleva Elektra es: " + elektra);
		ArrayList<String> autos = new ArrayList<String>();
		autos = (ArrayList<String>) cars.clone();
		System.out.println(autos.hashCode());
		System.out.println(cars.hashCode());
		autos.clear();
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
