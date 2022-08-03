package org.generation;

public class ParticipantesPrueba {

	public static void main(String[] args) {
//		Participante abue; // Creamos variable de tipo participante
//		abue= new Participante(); // Intanciamos un objeto y lo asginamos a la variable
//		
//		abue.nombre="Jorge Andrés";
//		abue.apellido="Gonzales";
//		abue.edad=25;
//		abue.musicaFav= "Happy Punk";
		
//		System.out.println("Participante "+abue.nombreCompleto());
//		
//		Participante moi = new Participante();
//		moi.nombre="Moises Arturo";
//		moi.apellido="Garcia";
//		moi.edad=21;
//		moi.musicaFav= "Pop";
		//Me pone un warningn porque deberia hcerlo desde la clase Prsonas.totalPersonas=2;
//		moi.totalPersonas=2;
		//System.out.println("Partipante: "+moi.nombreCompleto());
		// me marca un warning por que al ser sttatic deberia leerlo desde la clase
//		System.out.println("N total de Partipantes: "+abue.totalPersonas);
//		System.out.println("N total de Partipantes: "+Participante.totalPersonas);
		Participante miri=new Participante("Miri de la luz","loera",2000);
		Participante abue= new Participante("Jorge","Gonzales",1996);
		Participante moi= new Participante("Moises","García",1996);
		System.out.println(Participante.bootCampCohorte());
		System.out.println("CURP abue: "+abue.getCurp());
		//System.out.println("Famosisimo Abue "+abue.datosCompletos("Abue"));
		
		
	}
	


}
