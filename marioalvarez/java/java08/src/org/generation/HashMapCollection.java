package org.generation;

import java.util.HashMap;

public class HashMapCollection {

	public static void main(String[] args) {
		
		/**
		 * Una collecion HasMap relaciona una clave (key) con un valor,
		 * formando una escpecie de tabla de datos
		 * 
		 * HashMap<key,value> varName
		 * Es la colecion más rápida para encontrar elementos
		 */
		HashMap<Integer,String> users = new HashMap<Integer,String>();
		
		//Añadimos datos a la coleccion con put
		users.put(102,"Maga");
		users.put(256,"Rafa");
		users.put(458,"Jorge");
		users.put(589,"Francisco");
		users.put(859,"Lupita");
		users.put(10, "Beyra");
		users.put(1,"Max");
		System.out.println(users);
		users.put(1,"Miaw"); //Reemplaza el valor, porque uso la misma clave
		users.put(2,"Miaw"); //Puedo tener dos elementos con el mismo valor pero diferente llave
		System.out.println(users);
		
		//Conocer el tamaño de mi colección
		System.out.println("Tamaño"+users.size());
		System.out.println("Obetner elemento"+users.get(256));
		
		//remover un elemento
		users.remove(2);
		System.out.println(users);
		
		for(int key:users.keySet()) {
			System.out.println("ELementos"+key);
		}
	} //FIN

}
