package org.generation;

import java.util.HashMap;

import org.generation.cohorte.Mentor;
import org.generation.cohorte.Participante;
import org.generation.mascotas.Perrito;

public class Test {

	public static void main(String[] args) {
		Perrito chilaquil = new Perrito((byte)5, "Chilaquil", "French Poodle", (short)30);
		Mentor nancy = new Mentor("Nancy", "552677456610");
		Mentor montse = new Mentor("Montse", "4188956610");
		
		Participante cristofer = new Participante("Christofer", 24, chilaquil, nancy);
		
		Participante lupita = new Participante (
				"Gudalupe",
				23,
				new Perrito((byte)9, "Kissie", "Husky", (short)60), 
				montse
				);
				
//				System.out.println(cristofer.datos());
//				System.out.println(lupita.datos());
				
				HashMap<Integer, Participante> ch14 = new HashMap<Integer, Participante>();
				
				ch14.put(1, lupita);
				ch14.put(2, cristofer);
				ch14.put(3, new Participante(
						"Miri",
						25,
						new Perrito((byte)3, "Milka", "Husky-Pitbull", (short)60),
						nancy)
						);
				
				
				
				for(Participante participante: ch14.values()){
					System.out.println("Miembro de Ch14: " + participante.datos());
				}
				
				/**
				 * Actividad: 
				 * Crear un proyecto que tenga mínimo 2 paquetes
				 * Por lo menos 2 clases
				 * Relacionar las clases entre sí
				 * Realizar una clase de prueba.
				 * 			Hcer una coleccion de la clase que relaciona al resto de clases
				 * 
				 * nota: las clases deben estar encapsuladas.
				 */

	}

}
