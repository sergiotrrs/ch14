package org.generation;

import java.util.HashMap;

public class HashMapCollection {

	public static void main(String[] args) {
		// Una coleccion HashMap relaciona una clace (key) con un valor, formando una
		// especie de tabla de datos

//		HashMap<Key, value> varName
		// Instanciamos una coleccion HashMap

		HashMap<Integer, String> rR = new HashMap<Integer, String>();

		// Añadimos datos a la coleccion con put

		rR.put(102, "Maga");
		rR.put(256, "Rafa");
		rR.put(458, "Jorge");
		rR.put(589, "Francisco");
		rR.put(859, "Lupita");
		rR.put(1, "Max");
		rR.put(10, "Beyra");
		System.out.println("" + rR);
		rR.put(1, "Miaw");
		rR.put(2, "Miaw");
		System.out.println("" + rR);

		// Conocer el tamaño de mi coleccion
		System.out.println("N. de participantes en el equipo: " + rR.size());

		// Obtener un elemento, indicando la llave
		System.out.println("El scrum master es: " + rR.get(256));

		// Remover un elemento con el metodo remove, se le indica la llave
		rR.remove(2);
		System.out.println(rR);
		rR.put(1, "Max");
		rR.put(11, "Juan");
		System.out.println(rR);

		for (int key : rR.keySet()) {
			System.out.println("Salvamos al mundo de la devastacion: " + rR.get(key));

		}
	}

}
