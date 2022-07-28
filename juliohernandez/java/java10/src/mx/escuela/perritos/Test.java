package mx.escuela.perritos;
import java.util.HashMap;

import org.generation.Perrito;
import org.generation.cohorte.Mentor;
import org.generation.cohorte.Participantes;

public class Test {

	public static void main(String[] args) {
		Perrito chilaquil = new Perrito((byte)5, "Chilaquil", "FrenchPud", (short)30);
		Participantes cristofer = new Participantes("Christofer", 24, chilaquil);
		
		//Para mejor visualización
		Participantes lupita = new Participantes (
				"Guadalupe",
				23,
				new Perrito((byte)9,"Kissie","Husky",(short)60) //Aquí ya no va un ;
				);
		
		System.out.println(cristofer.datos());
		System.out.println(lupita.datos());
				
		var ch14 = new HashMap<Integer, Participantes>();
		var nancy = new Mentor("Nancy", "23454331");
		
		ch14.put(1, lupita);
		ch14.put(2, cristofer);
		ch14.put(3, new Participantes(
				"Miri", 28,
				new Perrito((byte)12, "Milka", "Husky-Pitbull", (short)60),
				nancy));
		
		for(Participantes participante:ch14.values()) {
			System.out.println("Miembro de Ch14: "+participante.datos());
		}
		
		/**
		 * Actividad:
		 * Crear un proyecto que tenga mín. 2 paquetes
		 * Por lo menos 2 clases en cada paquete
		 * Relacionar las clases entre sí
		 * Realizar una clae de prueba
		 * 		Hacer una coleccion de las clases corelacionadas
		 * 
		 * nota: las clases deben estar encapsuladas
		 */
	}

}
