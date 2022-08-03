package org.generation;

import java.util.HashMap;

import org.generation.cohorte.Mentor;
import org.generation.cohorte.Participante;
import org.generation.mascota.Perrito;


public class Test {

	public static void main(String[] args) {
		Perrito chilaquil= new Perrito((byte)5, "Chilaquil","FrenchPudle",(short)30);
		Mentor nancy= new Mentor("Nancy","093743663783");
		Mentor montse= new Mentor("Montse","0932342352");
		
		Participante cristofer= new Participante("Cristofer",24,chilaquil,nancy);
		
		Participante lupita = new Participante(
				"Guadalupe",
				23, 
				new Perrito((byte)9, "kissie","husky",(short)60),
				montse
				);
		System.out.println(cristofer.datos());
		System.out.println(lupita.datos());
		
		HashMap<Integer,Participante> ch14 = new  HashMap<Integer,Participante>();
		ch14.put(1, lupita);
		ch14.put(2, cristofer);
		ch14.put(3, new Participante("Miri",
				28,
				new Perrito((byte)3, "Minerva","Blanca/cafe",(short)20),
				montse));
		for(Participante participante:ch14.values()) {
			System.out.println("Miembro de CH14: "+participante.datos());
		}
	}

}
