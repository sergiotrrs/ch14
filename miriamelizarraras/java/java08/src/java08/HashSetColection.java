package java08;

import java.util.HashSet;

public class HashSetColection {

	public static void main(String[] args) {
		/**
		 * Un set es una colección que no permite elementos duplicados
		 * Cualquier elemento duplicado no se insertará	
		 * Es una coleccón ordenada
		 *	 
		 */
		//Crear una colección hashSet
		HashSet<String> names = new HashSet<String>();
		
		//Agegamos elementos con add
		names.add("Santiago");
		names.add("Benito");
		names.add("Aileen");
		names.add("Cori");		
		names.add("Santiago");//Elemento repetido
		names.add("Benito");//Elemento repetido
		names.add("Aileen");//Elemento repetido
		names.add("Cori");//este elemento lo van a omitir porque está repetido,
		//Sirve para que los elementos no se dupliquen cuando se imprimien en consola
		
		System.out.println(names);
		
		//indicamos el tamaño de la colección 
		System.out.println("Tamaño de la colección: " + names.size());
		
		//Buscar un elemento dentro de la colección
		boolean tieneNombre = names.contains("Santiago");
		System.out.println("Está Santiago? " + tieneNombre);
		
		//Remover un elemento de la colección con remove
		boolean eliminado = names.remove("Santiago");
		System.out.println("Se eliminó? " + eliminado);
		System.out.println(names);
		
		names.forEach(name -> System.out.println("Participante: " + name));
		
		HashSet<Integer> edades = new HashSet<Integer>();
		edades.add(25);
		edades.add(45);
		edades.add(55);
		edades.add(25);
		edades.add(65);
		names.forEach(nombre ->{
			System.out.println("foreach->: " + nombre);
		});

		
		
	}

}
