package Ollin;

import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 * Un set es una coleccion que no permite elementos duplicados
		 * Cualquier elemento duplicado no se insertará
		 */
		
		//Crear una colección hashSet
		HashSet<String>names=new HashSet<String>();
		
		//Agregamos elementos con add
		names.add("Santiago");
		names.add("Benito");
		names.add("Ailen");
		names.add("Cori");
		names.add("Benito");
		names.add("Abi");
		names.add("Santiago");
		
		System.out.println(names);
		
		//Indicamos el tamaño de la collección 
		System.out.println("Tamaño de la collección: "+ names.size());
		
		boolean tieneNombre=names.contains("Santiago");
		System.out.println("¿Está Santiago?: "+tieneNombre);
		
		//Remove un elemento de la colección
		boolean eliminado =names.remove("Santiago");
		System.out.println("¿Se eliminó? " + eliminado);
		System.out.println(names);
		
		names.forEach(name -> System.out.println("Participante: "+ name));
		HashSet<Integer>edades=new HashSet<Integer>();
		
		edades.add(25);
		edades.add(45);
		edades.add(55);
		edades.add(55);
		edades.add(65);
		edades.forEach(edad->System.out.println("La edad actual es: " +edad+1));
		
		
	}

}
