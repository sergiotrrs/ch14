package org.generation;

public class ParticipantePrueba {

	public static void main(String[] args) {
		Participante abue;
		abue = new Participante();
		
		abue.nombre = "Jorge Andrés";
		abue.apellido = "Gonzalez";
		abue.edad = 25;
		abue.musicaFav = "Happy Funk";
		
		System.out.println("Participante: " + abue.datosCompletos());
		System.out.println("N. total de particpantes: " + Participante.totalPersonas);
		
		Participante moi = new Participante();
		
		moi.nombre = "Moises Arturo";
		moi.apellido = "García";
		moi.edad = 21;
		moi.musicaFav = "Pop";
		moi.totalPersonas = 2;
		System.out.println("Participante: " + moi.datosCompletos());
		//System.out.println("N. total de particpantes: " + abue.totalPersonas);
		System.out.println("N. total de particpantes: " + Participante.totalPersonas);
		
		
		Participante miri = new Participante("Miri de la Luz ", "Loera", 1994);
		System.out.println("Participante: " + miri.datosCompletos() );
		System.out.println("N. total de particpantes: " + Participante.totalPersonas);
		Participante sebas = new Participante("Sebastian ", "Delgado", 2000);
		System.out.println("Participante: " + sebas.datosCompletos() );
		
		System.out.println("N. total de particpantes: " + Participante.totalPersonas);
		
		System.out.println(Participante.booCampCohorte());
		
		
		
		
		
		
		
		
		


	
	}
}
