package mx.escuela.perritos;

import java.util.HashMap;

import org.generation.Perrito;

import com.cohorte.Mentor;

import com.cohorte.Participante;

public class Test {

	public static void main(String[] args) {
		Perrito chilaquil = new Perrito((byte)5, "Chilaquil", "FrenchPoodle", (short)30);
		Mentor nancy = new Mentor("Nancy", "00000000000");
		Mentor montse = new Mentor("Montse", "00000000000");
		
		Participante cristofer = new Participante("Cristofer", 24, chilaquil, nancy);
		
		Participante lupita = new Participante (
				"Guadalupe",
				23,
				new Perrito((byte)9, "Kissie", "Husky", (short)60)
				,montse
				);
		
//		System.out.println(cristofer.datos());
//		System.out.println(lupita.datos());
		
		HashMap<Integer, Participante> ch14 =new HashMap<Integer, Participante>();
		
		ch14.put(1, lupita);
		ch14.put(2, cristofer);
		ch14.put(3, new Participante(
				"Miri",
				28,
				new Perrito((byte)12, "Milka", "Husky-Pitbull", (short)60),
				nancy)
				);
		
		for(Participante participante: ch14.values()) {
			System.out.println("Miembro de Ch14: " + participante.datos());
		};
		
		/**
		 * Actividad:
		 *  Crear un proyecto que tenga mínimo dos paquetes
		 *  Por lo menos 2 clases en 1 paquete
		 *  Relacionar las clases entre sí.
		 *  Realizar una clase de prueba.
		 *  	Hacer una colección de la clase que relaciona al resto de clases.
		 * 
		 * Nota: las clases deben estar encapsuladas.
		 */
	}

}
