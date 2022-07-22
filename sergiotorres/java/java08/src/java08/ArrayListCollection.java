package java08;

import java.util.ArrayList;

public class ArrayListCollection {

	public static void main(String[] args) {
		/**
		 *  Un ArrayLit es una coleccion ordenada
		 *  que permite elementos duplicados.
		 *  Se basa en un array redimensionable que aumenta su tamaño
		 *  según crece la colección de elementos.
		 *  De las colecciones, es la que mejor rendimiento tiene.
		 *  
		 *  Las colecciones no usan valores primitivos, usan los tipos
		 *  envolventes.
		 *  ej. int->Integer
		 */
		
		//Definimos un arayList de tipo String.
		ArrayList<String> cars = new ArrayList<String>();
		ArrayList<String> autos = new ArrayList<String>();
		//Agregamos elementos al arreglo
		cars.add("Volvo");
		cars.add("BMW");
		cars.add(0,"Vochito");
		cars.add("Volvo");
		cars.add("Mazda");
		
		System.out.println(cars);
		


	}

}
