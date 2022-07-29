package org.generation;

import java.util.*;

import org.generation.cohorte.Participante;
import org.generation.mascota.Michi;
import org.generation.mascota.Perrito;

public class Test {

	public static void main(String[] args) {
		Perrito chilaquil = new Perrito((byte) 5, "Chilaquil", "FrencPoodle", (short) 30);
		Mentor nancy = new Mentor("Nancy", "000251");
		Mentor montse = new Mentor("Montse", "000254");

		Participante cristofer = new Participante("Cristofer", 24, chilaquil, nancy);

		Participante lupita = new Participante("Guadalupe", 23, new Perrito((byte) 9, "Kissie", "Huskye", (short) 60),
				montse);
		System.out.println(cristofer.datos());
		System.out.println(lupita.datos());

		HashMap<Integer, Participante> ch14 = new HashMap<Integer, Participante>();

		ch14.put(1, lupita);
		ch14.put(2, cristofer);
		ch14.put(3, new Participante("Miri", 28, new Perrito((byte) 12, "Milka", "Husky-Pitbull", (short) 60), nancy));

		for (Participante participante : ch14.values()) {
			System.out.println("Miembro de CH14: " + participante.datos());
		}

		/**
		 * Crear un proyecto que tenga minimo 2 paquetes. 
		 * En cada paquete por menos 2
		 * clases en 1 paquete. Relacionar las clases entre si.
		 * Realizar una clase de prueba.
		 * 		Hacer una coleccion de la clase que relaciona al resto de clases
		 * 
		 * nota las clases deben estar encapsuladas
		 */
	}

}
