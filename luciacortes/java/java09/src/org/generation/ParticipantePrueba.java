package org.generation;

public class ParticipantePrueba {

	public static void main(String[] args) {

//		Participante abue;
//		//Para instanciarlo se hace llamar al método constructor -> ()
//		abue = new Participante();
//				
//		abue.nombre = "Jorge Andrés";
//		abue.apellido = "Trinidad Gonzalez";
//		abue.edad = 25;
//		abue.musicaFav = "Happy Punk";
//			
//		System.out.println("Participante: " + abue.datosCompletos());
//			
//		Participante moi = new Participante();
//		moi.nombre = "Moises Arturo";
//		moi.apellido = "García";
//		moi.edad = 21;
//		moi.musicaFav = "Pop";
////		moi.totalPersonas = 2;
//		System.out.println("Participante: " + moi.nombreCompleto());
//		System.out.println("N. total participantes: " + Participante.totalPersonas);
//		
		Participante miri = new Participante("Miri de la Luz", "Elizarrarás", 1994);
		//miri.rfc="MiriMiri";
		System.out.println("Participante: "+miri.datosCompletos());
				
		Participante sebas = new Participante("Sebastián", "Delgado", 1993);
		System.out.println("Participante: "+sebas.datosCompletos());
		System.out.println("N. total participantes: " + Participante.totalPersonas);
		System.out.println(Participante.bootCampCohorte());
		
		Participante abue = new Participante("Jorge Andrés", "Gonzalez", 1996);
		Participante moi = new Participante("Moisés Arturo", "García", 2001);
		System.out.println("Participante: "+abue.datosCompletos("Abue"));
		System.out.println("Participante: "+moi.datosCompletos("Moi"));
		System.out.println("RFC Abue "+ abue.getRfc());
		
		/**
		 * Crear una clase (Tema abierto)
		 * 		Implementar por lo menos 3 métodos
		Por lo menos 3 atributos de objetos
		por lo menos un atributo de clsae
		implementar 2 constructores sobre cargadaos
		implementar setters and getters de los atributos
		Realizar pruebas de la clas
		 */

		
		
		
	}
}
