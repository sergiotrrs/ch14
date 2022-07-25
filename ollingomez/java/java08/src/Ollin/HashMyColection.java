package Ollin;

import java.util.HashMap;

public class HashMyColection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 * Una colección HashMap relaciona una Clave (key) con un valor,
		 * formando una especie de tabla de datos.
		 * 
		 * HashMap <key,value> varName
		 * 
		 */
		
		//Instanciamos una colección HashMap
		HashMap<Integer, String>rocketR=new HashMap<Integer,String>();
		
		//Añadimo datos a la coleccion con put
		rocketR.put(102,"Maga");
		rocketR.put(256,"Rafa");
		rocketR.put(458,"Jorge");
		rocketR.put(589,"Francisco");
		rocketR.put(859,"Lupita");
		rocketR.put(1,"Max");
		rocketR.put(10,"Veira");
		
		System.out.println(rocketR);
		
		rocketR.put(1,"Miaw");
		rocketR.put(2,"Miaw");
		
		System.out.println(rocketR);
		
		//Conocer el tamaño de mi collección
		System.out.println("N. de paticipantes: "+ rocketR.size());
		
		//Obtenemos un elemento, indicado la llave (key)y método get
		
		System.out.println("Scrum Master: "+ rocketR.get(256));
		
		//Remover un elememnto con el método remove e indicamos la llave(key)
		rocketR.remove(2);
		System.out.println(rocketR);
		rocketR.put(1,"Max");
		rocketR.put(11,"Juan");
		System.out.println(rocketR);
		
		for(int key: rocketR.keySet()) {
			System.out.println("Salvamos la mundo de la devastación: "+rocketR.get(key));			
		}
		
		
		

	}

}
