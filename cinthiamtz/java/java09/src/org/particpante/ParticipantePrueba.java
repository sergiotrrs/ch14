package org.particpante;

public class ParticipantePrueba {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Participante abue;
//		//Cremaos o intanciamos y mandamos a llamar al contsrutcor()
//		abue =new Participante();
//				
//		//Ahora si lo asignamos
//		abue.nombre= "Jorge Andres";
//		abue.apellido= "Gonzalez";
//		abue.edad =25;
//		abue.musicaFay = "Happy Punk";
//		//mandamos a llamr a nuestro metodo 
//		System.out.println("Participante: " + abue.datosCompletos () );
//		
//		Participante moi = new Participante();
//		moi.nombre = "Moises Arturo";
//		moi.apellido = "garcia";
//		moi.edad =21;
//		moi.musicaFay="pop";
////		moi.totalPersonas = 2;
//		System.out.println("Participante: " + moi.datosCompletos () );
//		System.out.println("Participante: " + Participante.totalPersonas);				
//		
		Participante miri =new Participante("Miri de la Luz", "Loera", 1994);
//		System.out.println("Participante: " + miri.datosCompletos () );
		
		Participante Sebas =new Participante("Sebastian", "Delgado", 2000);
		System.out.println("Participante: " + miri.datosCompletos () );
		System.out.println("Participante: " + Participante.totalPersonas);	
		System.out.println(Participante.bootCampCohorte());
		
//		System.out.println("Famosisimo ABue " + abue.datosCompletos("abue"));
		
		Participante abue = new Participante("Jorge", "Gonzales",1996);
		Participante moi = new Participante("Moise", "Garcia",2001);
		
		System.out.println("Participante: " + abue.datosCompletos("Abue"));
		System.out.println("Participante: " + moi.datosCompletos("Moi"));
		//abue.amonestacion = 1; No se puede acceder a un atributo encapsulado
		System.out.println("RFC Abue " + abue.getRfc());

	
		
		
		
		
		
		
		
		
	}

}
