package java08;

import java.util.HashMap;

public class HashMapCollection {

	public static void main(String[] args) {
		/**
		 * Una colección HashMap relaciona una clave (key) con un valor, 
		 * formando una especia de tabla de datos
		 * 
		 * HashMap<key, value> varName
		 * 		 
		 */
		
		//Instanciamos una colección HashMap
		HashMap<Integer, String> rocketR = new HashMap<Integer, String>();
		
		//Añadimos datos a la colección con put
		rocketR.put(102, "Maga" );
		rocketR.put(256, "Rafa" );
		rocketR.put(458, "Jorge" );
		rocketR.put(589, "Francisco" );
		rocketR.put(1, "Lupita" );
		rocketR.put(10, "Max" );
		rocketR.put(52, "Beyra" );
		System.out.println(rocketR);
		rocketR.put(1, "Miaw");
		rocketR.put(2, "Miaw");
		System.out.println(rocketR);
		
		//Conocer el tamaño de de mi colección
		System.out.println("N. de participantes: " + rocketR.size());
		
		//Obtenemos un elemento, indicando la llave (key) y métdo get
		System.out.println("Scrum Master: " + rocketR.get(256));
		
		//Remover un elemento con el método remove e indicamos la llave (key)
		rocketR.remove(2);
		System.out.println(rocketR);
		rocketR.put(1, "Max");
		rocketR.put(11, "Juan");
		
		for (int key: rocketR.keySet()) {
			System.out.println("Salvamos al mundo de la devastación: " + rocketR.get(key));
		}
		
		

	}

}
