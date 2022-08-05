package org.generation;

import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/**
		 * Un set que  no permite elementos duplicados
		 * Cualquier elemento duplkicado no se interara 
		 */
		
		//Crear una colección hashSet
		HashSet <String> names = new HashSet<String>();
		
		//Agregamos elementos con add
		names.add("Santiago");
		names.add("Benito");
		names.add("Ailen");
		names.add("Cori");
		names.add("Benito");
		names.add("ASSbi");
		names.add("Santiago");
		
		System.out.println(names);
		//Es una coleccion no ordenada
		//Indicamos el tamaño de la colección
		System.out.println("Tamañlo de la coleccióm," + names.size());
		 boolean tieneNombre = names.contains("Santiago");
		 System.out.println("Esta santiago?: "+ tieneNombre);
		
		 //Renover de la coleccion con remove
		 boolean eliminado = names.remove("Santiago");
		 System.out.println("Se elimino? "+ eliminado );
		 System.out.println(names);
		
		 names.forEach(name-> System.out.println("participante" + name) );
		
		
	}

}
