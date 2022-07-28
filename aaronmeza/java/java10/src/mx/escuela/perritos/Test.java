package mx.escuela.perritos;

import org.generation.mascota.Perrito;

import com.cohorte.Participantes;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Perrito chilaquil = new Perrito((byte)5, "chilaquil", "FrenchPull",(short)30 );
		Participantes cristofer = new Participantes("Cristofer", 24, chilaquil);
		Participantes lupita = new Participantes(
				"Guadalupe",
				23,
				new Perrito((byte)9, "Kissie", "Husky",(short)60)
				);
		System.out.println(cristofer.datos());
		System.out.println(lupita.datos());
		
		
	}
	

}
