package java08;

import java.util.HashMap;

public class HashMapCollection {

	public static void main(String[] args) {
		/*
		 * Una colección HashMap relaciona una clave (key) con un valor,
		 * formando una especi de tabla de datos.
		 * 
		 * HashMap <key, value > varName
		 * 
		 * */
		
		//Instanciamos una colección HashMap
		HashMap <Integer, String> users = new HashMap<Integer, String>();

		//Añadimos datos a la coleeción con put
		users.put(102, "Maga");
		users.put(256, "Rafa");
		users.put(458, "Jorge");
		users.put(589, "Francisco");
		users.put(859, "Lupita");
		users.put(1, "Max");
		users.put(10,"Beyra");
		
		System.out.println(users);
		users.put(1, "Miaw"); //Reemplaza el valor de la clave (key)
		System.out.println(users); //Podemos tener diferentes valor pero no la misma clave
		users.put(2, "Miaw");
		System.out.println(users);
		
		//Conocer el tamaño de mi colección
		System.out.println("N. de participantes: " + users.size());
		
		//Obtenemos un elemento, indicando la llave (key) y método get
		System.out.println("Scrum Master: " + users.get(256));
		
		//Remover un elemento con el método remove e indicamos la llave(key)
		
		users.remove(2);
		System.out.println(users);
		users.put(1, "Max");
		users.put(11, "Juan");
		System.out.println(users);
		
		for (int key:users.keySet() ){
			System.out.println("Salvamos al mundo de la devastación: " + users.get(key));
		}
		
		
		
		
		
		
		
	}

}
