package org.generation.mascota.perritos;

import java.util.HashMap;

import org.generation.cohorte.Mentor;
import org.generation.cohorte.Participante;
import org.generation.mascota.Perrito;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Perrito chilakil = new Perrito((byte)5, "Chilakil", "poodle", (short) 45);
		Mentor Nancy = new Mentor("Nancy Moreno", "65 4652 6654", "Lasi");
		Mentor Montse = new Mentor("Montse Mentora", "23 2342 6546", "Laska");
		
		Participante cristofer = new Participante("Cristofer", 22, chilakil, Nancy);
		
		System.out.println(cristofer.getMascota().getNombre());
		
		Participante lupita = new Participante (
				"Guadalupe",
				23,
				new Perrito((byte)9, "Kissie", "Husky", (short) 150),
				Montse
				);
		System.out.println(lupita.getMascota().getNombre());
		System.out.println(cristofer.datos());
		System.out.println(lupita.datos());
		
		HashMap<Integer, Participante> ch14 = new HashMap<Integer, Participante>();
		ch14.put(1, lupita);
		ch14.put(2, cristofer);
		ch14.put(3, new Participante(
						"Miri",
						25,
						new Perrito((byte )5, "Milka", "Pitbull", (short) 30),
						Nancy));
		for (Participante participante: ch14.values()) {
			System.out.println("Miembro de CH14: " + participante.datos());
		}
		
		for (int key : ch14.keySet()) {
			System.out.println("Keyset miembrx CH14: " + ch14.get(key).datos());
		}
		
		
		/**
		 * Crear un proyecto con mínimo dos paquetes
		 * y en cada paquete al menos dos clases
		 * en un paquete. Relacionar las clases entre sí
		 * 
		 * Realizar una clase de prueba
		 * Hacer una colección de la clase que relaciona al resto de clases
		 * 
		 * 
		 * Nota: Las clases deben estar encapsuladas
		 * */

	}

}
