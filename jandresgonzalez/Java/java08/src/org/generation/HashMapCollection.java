package org.generation;

import java.util.HashMap;

public class HashMapCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/**
		 * HashMap tiene key y value
		 * formando una especie de table
		 * HashMap<key, value> var name*/
		
		HashMap<Integer, String> jjD = new HashMap<Integer, String>();
		jjD.put(0, "Abue");
		jjD.put(1, "Venus");
		jjD.put(99, "Julio");
		jjD.put(66, "Adrian");
		jjD.put(133, "Moi");
		jjD.put(77, "Waldo");
		jjD.put(100, "Lau :(");
		
		System.out.println("Poderoso JavaJavaDo!: " + jjD);
		
		//Reemplaza valor, partiendo de la clave
		jjD.put(100, "Maau");
		
		System.out.println(jjD);
		
		//tamaño
		System.out.println("El equipo tiene " + jjD.size() + " integrantes");
		
		//Obtener con key (método get)
		System.out.println("Product Owner: " + jjD.get(77));
		
		//Remover elemento con key (método remove)
		jjD.remove(100);
		System.out.println("Ahora el equipo es de " + jjD.size());
		
		jjD.put(1001, "Tanix");
		System.out.println("Entró alguien a ayudar: " + jjD);
		
		
		for (int key: jjD.keySet()) {
			System.out.println("Vamo a checar l_s integrant_s: " + jjD.get(key));
		}
		
		

	}

}
