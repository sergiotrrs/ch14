package org.generation;

public class ParticipantePrueba {

	public static void main(String[] args) {
		
		Participante abue;
		abue= new Participante();
		//()Es el método constructor
		
		abue.nombre="Jorge Andrés";
		abue.apellido="Gonzalez";
		abue.edad=25;
		abue.musicafav="Happy Punk";
		
		System.out.println("Participante: " + abue.nombreCompleto());
	
		Participante moi=new Participante();
		moi.nombre="Moises Arturo";
		moi.apellido="García";
		moi.edad=21;
		moi.musicafav="Pop";
		//moi.totalPersonas = 2;

		System.out.println("Participante: " + moi.nombreCompleto());
//		System.out.println("N. total participantes: " + abue.totalPersonas);
//		System.out.println("N. total participantes: " + Participante.totalPersonas);

		Participante Miri=new Participante("Miri de la Luz", "Loera",1994);
		System.out.println("Participante nuevo: "+ Miri.datosCompletos());

		Participante sebas=new Participante("Sebastian", "Delgado",2000);
		System.out.println("Participante nuevo: "+ sebas.datosCompletos());
		
		System.out.println("no. total de participantes: "+ Participante.totalPersonas);
		System.out.println(Participante.bootCampCohorte());
		
		System.out.println("Famosisimo Abue: "+ abue.datosCompletos("Abue"));
	}

}
