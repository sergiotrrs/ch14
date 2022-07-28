package org.generation;

import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/**
		 * Un set es una colección que no permite elementos duplicados
		 * Cualquier elemento duplicado no se insertará
		 * 
		 * */
		System.out.println("Hashset");
		
		HashSet<String> names = new HashSet<String>();
		names.add("Santiago");
		names.add("Benito");
		names.add("Cori");
		names.add("Tanix");
		names.add("Benito");
		names.add("AbiMoreno");
		
		System.out.println(names);
		System.out.println("Tamaño colección: " + names.size());
		
		boolean hasName = names.contains("Santiago");
		String condicion = hasName ? "Si" : "No";
		
		System.out.println("¿Hay Santiago? "+ condicion);
		boolean byeDeCH14 = names.remove("Santiago");
		String eliminadito = byeDeCH14 ? "Se eliminó" : "Sigue acá";
		System.out.println("¿Y Santiago? " + eliminadito);
		
		names.forEach(name -> System.out.println("Iterando nombres: " + name));
		
		HashSet<Integer> edades = new HashSet<Integer>();
		edades.add(24);
		edades.add(34);
		edades.add(22);
		edades.add(69);
		edades.add(36);
		
		edades.forEach(edad -> System.out.println(edad + 2));
		
		
		

	}

}
