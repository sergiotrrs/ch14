package com.personas;


import java.util.HashMap;

import com.accesorios.AccesoriosHombre;

public class PersonaTest {

	public static void main(String[] args) {

		Persona juan = new Persona(20, "Juan", 170, "Pop");
		System.out.println(juan.datos());
		AccesoriosHombre informal = new AccesoriosHombre("Tenis", "Mezclilla", juan);
		System.out.println(informal.datos());
		
		System.out.println(juan.datos()+","+informal.datos());
		
		
		HashMap<Integer, AccesoriosHombre> usuario= new HashMap<Integer, AccesoriosHombre>();
		
		usuario.put(1, informal);
		usuario.put(2, new AccesoriosHombre("tenis", "Mezclilla", new Persona(29, "Tona", 176, "Jazz")));
		usuario.put(3, new AccesoriosHombre("Tenis", "deportivo", new Persona(29, "Ollin", 176, "Jazz fussion")));
		
		for (AccesoriosHombre info : usuario.values()) {
			System.out.println("Este es "+info.datos());
		}
		
		
	}

}
