package org.generation;

import java.util.HashMap;

public class HashMapCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/*
		 * Una colección HashMap relaciona una clave (key) con un valor, 
		 * formando una especie de tabla de datos.
		 * 
		 * HashMap<key, value> varname  (pueden ser de cualquier tipo.
		 */
		
//		Instanciamos una colección HashMap
		HashMap<Integer,String> rocketR= new HashMap<Integer, String>();
		
//		Añadimos datos a la colección con put
		rocketR.put(102,  "Maga");
		rocketR.put(256,  "Rafa");
		rocketR.put(458,  "Jorge");
		rocketR.put(589,  "Francisco");
		rocketR.put(859,  "Lupita");
		rocketR.put(1,  "Max");
		rocketR.put(10,  "Beyra");
		System.out.println(rocketR);
		rocketR.put(1, "Miaw");			//Sustituye a Max (no puede dos elementos con el mismo valor
		rocketR.put(2, "Miaw");
		System.out.println(rocketR);

		
//		conocer el tamañap de mi colección
		System.out.println("N. de participantes: " +rocketR.size());
		
//		obtenermos un elemento, indicando la llave(key) y metodo get
		System.out.println("Scrum Master: " +rocketR.get(256));
		
//		Remover un elemento con e método remover e indicamos la llave(key)
		rocketR.remove(2);
		rocketR.put(2, "Max");
		rocketR.put(11, "Juan");
		System.out.println(rocketR);
		
		for(int key:rocketR.keySet()){
			System.out.println("Salvamos al mundo: " +rocketR.get(key));
		}
		
		
		
	}

}
