package org.generation;

import java.util.HashMap;

import org.generation.cohorte.Mentor;
import org.generation.cohorte.Participante;
import org.generation.mascota.Michi;
import org.generation.mascota.Perrito;

public class Test {

	public static void main(String[] args) {
		Perrito chilaquil =new Perrito((byte) 5,"Chilaquil", "FrenchPoodle", (short)30);
		Mentor nancy = new Mentor("Nancy", "0909124750");
		Mentor montse = new Mentor("Montse", "0909167840");
		Participante cristofer = new Participante("Cristofer", 24, chilaquil, nancy);

		Participante lupita = new Participante(
				"Guadalupe",
				23,
				new Perrito((byte)9, "Kissie", "Husky", (short)60),
				montse
				);
			
//	System.out.println(cristofer.datos());
//	System.out.println(lupita.datos());
	
	
	//Creamos una colección de ch14
	HashMap<Integer, Participante> ch14 = new HashMap <Integer, Participante>();
	
	//Para agregar a la colección es put:
	ch14.put(1, lupita);
	ch14.put(2, cristofer);
	ch14.put(3, new Participante(
			"Miri",
			28,
			new Perrito((byte)12,"Milka", "Husky-Pitbull",(short)60 ), nancy));
	
	//Para saber cómo se imprimen los datos de la colección
	for(Participante participante: ch14.values()) {
		System.out.println("Miembro de ch14: " + participante.datos());
	}
	
	
	
	/*
	 * Actividad: 
	 * Crear un proyecto que tenga como mínimo dos paquetes
	 * por lo menos 2 clases en 1 paquete.
	 * Relacionar las clases entre si.
	 * Realizar una clase de prueba.
	 * Hacer una colección de la clase que relaciona al resto
	 * de clases
	 * 
	 * Nota: las clases deben estar en capsuladas
	 */
	
	
	
	
	}

}
