package java08;

import java.util.ArrayList; //ArrayList + f2

public class ArrayListCollection {

	public static void main(String[] args) {
		/**
		 * Un ArrayList es una colección ordenada permite elementos duplicados. Se basa
		 * en nu array redimensionable que aumenta su tamaño según crece la colección de
		 * elementos. De las colecciones es la que mejor rendimiento tiene.
		 *
		 * Las colecciones no usan valores primitivos, usan los tipos envolventes
		 * 
		 * ejemplo. int -> Interger
		 * 
		 */
		// Definimos un arrayList de tipo String.
		ArrayList<String> cars = new ArrayList<String>();
		// ArrayLista<Integer> edades = new ArrayList<Integer>();
		// Agregamos elementos al arreglo
		cars.add("Volvo");
		cars.add("BMW");
		cars.add("Vochito");
		cars.add("Volvo");
		cars.add("Mazda");

		// Agregar un elemento en una posición indicada
		cars.add(1, "Mercedes Benz");
		System.out.println(cars);
		System.out.println(cars.size());

		// Desplegar una posición indicada con get
		String autoLucia = cars.get(1);
		System.out.println("Auto de Lucía: " + autoLucia);

		// Eliminar una posición de la colección, utilizamos remove
		String elektra = cars.remove(2);
		System.out.println(cars);
		System.out.println("Se lleva Elektra: " + elektra);

		// ArrayList de tipo autos, autos es una variable = se tiene que crear un
		// objeto, para que se de de alta se crea con new ->tipo, en este caso String ->
		// () importante poner parentesis para que se cree + ;
		var autos = new ArrayList<String>();
		autos = (ArrayList<String>) cars.clone();
		System.out.println("HashCode Autos: " + autos.hashCode());
		System.out.println("HashCode Cars: " + cars.hashCode());
		autos.clear();
		System.out.println(autos);
		System.out.println(cars);

		// Se itera con for
		for (int i = 0; i < cars.size(); i++) {
			System.out.println("Te regalo el auto: " + cars);

		}
		
		// se intera con una forma de for each
		for (String elemento : cars) {
			System.out.println(elemento);
		}
		
		// se itera otra forma de for each
		cars.forEach(elemento -> {
			System.out.println("Auto: " + elemento);
		});
		
		


	}
}
