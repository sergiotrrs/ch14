package org.generation;

public class ParticipantePrueba {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

//		Participante abue;
//		abue = new Participante();
//		abue.nombre = "Jorge Andres";
//		abue.apellido = "Gonzalez";
//		abue.edad = 25;
//		abue.musicaFav = "Happy Punk";
//
//		System.out.println("Participante: " + abue.datosCompletos());
//
//		Participante moi = new Participante();
//		moi.nombre = "Moises Arturo";
//		moi.apellido = "Garcia";
//		moi.edad = 21;
//		moi.musicaFav = "Pop";
////		moi.totalPersonas = 4;
//		System.out.println("Participante: " + moi.datosCompletos());
		System.out.println("N. Total de participantes " + Participante.totalPersonas);

		Participante miri = new Participante("Miri de la Luz", "Loera", 1994);
//		miri.rfc="MiriMiri";
		System.out.println("Participante: " + miri.datosCompletos());

		Participante sebas = new Participante("Sebastian", "Delgado", 2000);
		System.out.println("Participante: " + sebas.datosCompletos());

		System.out.println("N. Total de participantes " + Participante.totalPersonas);
		System.out.println(Participante.bootCampCohorte());

//		System.out.println("Famosisimo Abue: "+ abue.datosCompletos("abue"));
		Participante abue = new Participante("Jorge", "Gonzalez", 1996);
		Participante moi = new Participante("Moises Arturo", "Garcia", 2001);
		System.out.println("Participante: " + abue.datosCompletos("Abue"));
		System.out.println("Participante: " + moi.datosCompletos("Moi"));
		System.out.println(Participante.bootCampCohorte());
		System.out.println("RFC de abue " + abue.getRfc());
		abue.setNAmonestacion(1);
		abue.setNAmonestacion(1);
		System.out.println("Amonestaciones totales: " + abue.getNAmonestacion());

		// Crear una clase de tema abierto e implementar por lo menos 3 metodos,por lo
		// menos 3 metodos de objeto, 1 atributo de clase 2 costructores sobrecargados e
		// implementar setters en getters de los atributos y realizar pruebas de la clase
	}

}
