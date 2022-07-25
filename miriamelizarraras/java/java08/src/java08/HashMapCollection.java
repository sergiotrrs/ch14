package java08;

import java.util.HashMap;

public class HashMapCollection {

	public static void main(String[] args) {
		/**
		 * Una colección HashMap relaciona una clave (key) con un valor
		 * formando una especie de tabla de datos.
		 * 
		 * HashMap<Key, value> varName
		 * 
		 */
		//Instanciamos una colección HashMap// El constructor son los parentesis 
		HashMap<Integer, String> rocket = new HashMap<Integer, String>();
		
		//Añadimos datos a la colección con put
		rocket.put(102, "Maga");
		rocket.put(256, "Rafa");
		rocket.put(458, "Jorge");
		rocket.put(589, "Francisco");
		rocket.put(859, "Lupita");
		rocket.put(1, "Max");
		rocket.put(10, "Beyra");
		System.out.println(rocket);
		rocket.put(1, "Miaw");
		System.out.println(rocket);
		
		//Conocer el tamaño de mi colección 
		System.out.println("Número de participantes: " + rocket.size());
		
		//Obtenemos un elemento indicando la llave(key)
		System.out.println("Scrum Master: " + rocket.get(256));
		
		//Remover un elemento con el método remove e indicamos la llave(key)
		rocket.remove(2);
		System.out.println(rocket);
		rocket.put(1, "Max");
		rocket.put(11, "Juan");
		System.out.println(rocket);
		
		
		for(int key: rocket.keySet()) {
			System.out.println("Salvamos al mundo de la devastación: " + rocket.get(key));
		}
		
		
		
		
	}

}
