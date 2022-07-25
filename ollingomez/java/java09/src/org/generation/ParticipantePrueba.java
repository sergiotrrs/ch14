package org.generation;

public class ParticipantePrueba {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Participantes abue;
//		abue=new Participantes();
		
//		abue.nombre = "Jorge Andrés";
//		abue.apellido = "Gonzalez";
//		abue.edad = 25;
//		abue.musicaFav="Happy Punk";
		
//		System.out.println("Participante: "+ abue.datosCompletos());
//		
//		Participantes moi=new Participantes();
//		
//		moi.nombre = "Moi Arturo";
//		moi.apellido = "Garcia";
//		moi.edad = 21;

//		moi.totalPersonas=2;
		
//		System.out.println("Participante: "+ moi.datosCompletos());
//		System.out.println("N. Total participante: "+ abue.totalPersonas);
//		System.out.println("N. Total participante: "+ Participantes.totalPersonas);
		
		Participantes miri = new Participantes("Miri de la Luz", "Loera",1994);
//		miri.rfc="MiriMiri";
		System.out.println("Participante: "+ miri.datosCompletos());
		
		Participantes sebas = new Participantes("Sebastian", "Delgado",2000);
		System.out.println("Participante: "+ sebas.datosCompletos());
		
		System.out.println("N. Total participante: "+ Participantes.totalPersonas);
		System.out.println(Participantes.bootCampCohorte());
		
		Participantes abue = new Participantes("Jorge", "Gonzalez", 1996);
		Participantes moi = new Participantes("Moises Arturo", "Garcia", 2001);
		
		System.out.println("N. Total participante: "+ Participantes.totalPersonas);
		System.out.println(Participantes.bootCampCohorte());
		
		System.out.println("Participante: "+ abue.datosCompletos("Abue"));
		System.out.println("Participante: "+ moi.datosCompletos("Moi"));
		abue.setNAmonestacion(1);
		abue.setNAmonestacion(1);
		System.out.println("N. aminestaciones: "+ abue.getNAmonestacion());
		System.out.println("RFC Abue: " + abue.getRFC());
		
		//Crear una Clase (tema abierto)
		//implementar por lo menos 3 métodos
		//por lo menos 3 atributos de objeto
		//por lo menos 1 atributo de clase
		//implementar 2 constructores sobrecargados
		//implementar setters and getters de los atributos
		//Realizar pruebas de clase
		
	}

}
