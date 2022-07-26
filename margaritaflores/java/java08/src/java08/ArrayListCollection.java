package java08;

import java.util.ArrayList;

public class ArrayListCollection {

	public static void main(String[] args) {
		/**
		 * Un ArraList es una colección ordenada
		 * que permite elementos duplicados.
		 * Se basa en un array rediensionable que aumenta su tamaño
		 * según crece la colección de elementos.
		 * De las colecciones, es la que mejor rendimiento tiene.
		 * 
		 * Las colecciones no usan valores primitivos, usan los evolventes.
		 * ej. int -> Integer
		 * */

		//Definimos un ArrayList de tipo String.
		ArrayList<String> cars = new ArrayList<String>();
		ArrayList<Integer> edades = new ArrayList<Integer>();
		
		
		//Agregamos elemntos al arreglo
		cars.add("volvo");
		cars.add("BMW");
		cars.add("Vochito");
		cars.add("Volvo");
		cars.add("Mazda");
		
		//Agregar un elemento en una posición indicada
		cars.add(1,"Merecedes Benz"); //Se agrega en el índice que le colocas al principio.
		System.out.println(cars);
		System.out.println(cars.size()); //Con size te da el tamño de tu arreglo
		
		//Desplegar una posición indicada con get
		String autoLucia = cars.get(1);
				System.out.println("Auto de Lucia: " + autoLucia);
		
		//Eliminar una posición de la colección, utilizamos remove
				String elektra = cars.remove(2);
				System.out.println(cars);
				System.out.println("Se lleva Elektra: " + elektra);
				
		//Dar de alta otra collección(haciendo una collection de tipo arrayList con variables
				ArrayList <String> autos; //Aquí solo indicamos que nuestra variable será un string y una arrayList
				autos = new ArrayList <String>(); //Se crea el objeto con new y (), para llamar al método constructo
			autos = (ArrayList<String>) cars.clone();
			System.out.println("HashCode autos: " + autos.hashCode());
			System.out.println("HashCode Cars: " + cars.hashCode());
			autos.clear();
			System.out.println("HashCode autos: " + autos.hashCode());
			System.out.println(autos); //Aunque borraramos autos y si imprimos cars nos sale vacio, porque
			//recordemos que hace refencia al mismo espacio de memoria (id).
			System.out.println(cars);
			
			//INTERAR
			
			for (int i = 0; i < cars.size(); i++) {
				System.out.println("Te regalo el auto: " + cars.get(i));
			}
			
			for (String elemento : cars) {
				System.out.println("Te regalo el auto for2: " + elemento);
			}
			
			cars.forEach(elemento ->{
				System.out.println("Auto: " + elemento);
			});
			
			
			//cuando le damos clear a auto crea otro hashCode por eso nos arroja otro id.
			
	}

}
