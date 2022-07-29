package org.generation;

public class ParticipantePrueba {

	public static void main(String[] args) {
//		Participante abue;
//		abue = new Participante();
//		
//		abue.nombre = "Jorge Andrés";
//		abue.apellido = "Gonzalez";
//		abue.edad = 25;
//		abue.musicaFav = "Happy Punk";
//		
//		System.out.println("Participante: " + abue.nombreCompleto());
//		
//		Participante moi = new Participante();
//		
//		moi.nombre = "Moises Arturo";
//		moi.apellido = "García";
//		moi.edad = 21;
//		moi.musicaFav = "Pop";
//		//Participante.totalPersonas = 2;
//		
//		System.out.println("Participante: " + moi.nombreCompleto());
//		//System.out.println("N. Total participantes: " + abue.totalPersonas);
//		System.out.println("Participante: " + Participante.totalPersonas);
		
		Participante miri = new Participante("Miriam de la Luz", "Loera", 1994);
		System.out.println("Participante: " + miri.datosCompletos());
		
		Participante sebas = new Participante("Sebastian", "Delgado", 2000);
		System.out.println("Participante: " + sebas.datosCompletos());
		System.out.println("N. total de personas: " + Participante.totalPersonas);
		System.out.println(Participante.bootCampCohorte());
		
		//System.out.println("Nombre Abue: " + abue.datosCompletos("Abue"));
		
		Participante abue = new Participante("Jorge","Gonzalez",1996);
		Participante moi = new Participante("Moises Arturo","García",2001);
		System.out.println("Participante: " + abue.datosCompletos());
		System.out.println("Participante: " + moi.datosCompletos());
		
		System.out.println("Participante: " + abue.datosCompletos("Abue"));
		System.out.println("Participante: " + moi.datosCompletos("Moi"));
		//abue.amonestacion = 1; No se puede acceder a un atributo encapsulado
		System.out.println("RFC Abue " + abue.getRfc());
	}

}
