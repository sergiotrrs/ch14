package org.generation;

import java.util.HashMap;

public class HashMapColletion {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
/**
 * Una colecci+on HashMap relaciona una clave (key) con un valor, 
 * formando una especie de tabkla de datos
 * HashMap<key, value> VarName
 */
		
		
		//Instanciaomos una coleccion HashMap
		HashMap<Integer,String> rocketR = new HashMap <Integer, String>();
		
		//Añadimos datos a la coleccion con put
		rocketR.put(102,"Maga");
		rocketR.put(256,"Rafa");
		rocketR.put(458,"Jorge");
		rocketR.put(589,"Francisco");
		rocketR.put(859,"lupita");
		rocketR.put(1, "Max");
		rocketR.put(10,"Beyra");
		
		System.out.println(rocketR);
		
		rocketR.put(1, "Miae");
		System.out.println(rocketR);
		//Conocer el tamaño de mi coleccion
		System.out.println("N. de participantes: "+ rocketR.size());
		
		//Obtneenmos un elemento, indicando la llave (key) y metodo getb
		System.out.println("Scrum master" + rocketR.get(256));
		
		//Remover un elemeento con el metodo remove e idnicamos la llave (key)
		rocketR.remove(2);
		System.out.println(rocketR);
		rocketR.put(1,"max");
		rocketR.put(11, "Juan");
		System.out.println(rocketR);
		
		for (int key: rocketR.keySet()) {
			System.out.println("Salvamos al mundo "+ rocketR.get(key));
		}
		
		
		
		
	}

}
