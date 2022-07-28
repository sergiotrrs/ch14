package java08;

import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/**
		 * un set es una collección que no permite
		 * elementos duplicados
		 * 
		 * Es una colección no ordenada
		 */
		
		//Crear una colección hashSet
		HashSet<String> names = new HashSet<String>();
		
		//Agregamos elementos: add
		names.add("Santiago");
		names.add("Benito");
		names.add("Aileen");
		names.add("Benito");
		names.add("Julio");
		names.add("Sebas");
		//No los agrega ordenadamente
		
		System.out.println(names);
		
		//Tamaño de la colección
		System.out.println("Tamaño de colección: "+names.size());
		
		//Buscar un elemento dentro
		boolean tieneNombre = names.contains("Sebas");
		System.out.println("Está Sebas? "+tieneNombre);
		
		//Remover un elemento
		boolean yaNoEsta = names.remove("Sebas");
		System.out.println("Se eliminó? "+yaNoEsta);
		System.out.println(names);
		
		//Iterar
		names.forEach(name->System.out.println("Participante: "+name));
		
		

	}

}
