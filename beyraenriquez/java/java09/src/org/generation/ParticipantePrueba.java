package org.generation;

public class ParticipantePrueba {

	public static void main(String[] args) {
		
		Participante abue;
		abue = new Participante();
		
		abue.nombre = "Jorge Andrés";
		abue.apellido = "Gonzalez";
		abue.edad = 25;
		abue.musicaFav = "Happy Punk";
		
		System.out.println("Participante: " + abue.datosCompletos() );
		
		Participante moi = new Participante();
		moi.nombre = "Moises Arturo";
		moi.apellido = "García";
		moi.edad = 21;
		moi.musicaFav = "Pop";
		moi.totalPersonas = 2;
		System.out.println("Participante: " + moi.nombreCompleto());
//		System.out.println("N. Total participantes: " + abue.totalPersonas); 
		System.out.println("N. Total participantes: " + Participante.totalPersonas); //Es más adecuado
		
		Participante miri = new Participante("Miri de la Luz", "Loera", 1994);
		System.out.println("Participante: " + miri.datosCompletos());
		
		Participante sebas = new Participante("Sebastian", "Delgado", 2000);
		System.out.println("Participante: " + sebas.datosCompletos());
		System.out.println("N. Total participantes: " + Participante.totalPersonas); //Es más adecuado
		System.out.println(Participante.bootCampCohorte());
		
		//Completar sesión 40
	}

}
