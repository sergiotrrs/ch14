package org.generation;

public class ParticipantePrueba {

	public static void main(String[] args) {
		Participante abue;   //Participante (tipo de dato), abue(variable)
		abue = new Participante(); //Ya se creo el objeto abue(Instanciando la clase)
		
		abue.nombre = "Jorge Andres";
		abue.apellido = "Gonzalez";
		abue.edad =25;
		abue.musicaFav = "Happy Punk";
		
		System.out.println("Participante 1: " + abue.nombreCompleto()); //Este se creo en la siguiente hoja
		
		Participante moi = new Participante();
		
		moi.nombre = "Moises Arturo";
		moi.apellido = "García";
		moi.edad = 21;
		moi.musicaFav = "Pop";
		moi.totalPersonas = 2; //Por el static de la otra hoja es que distingue que no es parte de Mo, si no un atributo de clase
		System.out.println("Participante 2: " + moi.nombreCompleto());
		System.out.println("N. Total de participantes: " + abue.totalPersonas);
		System.out.println("N. Total de participantes: " + Participante.totalPersonas);
		
	
		static String bootCampCohorte() {
			return bootCamp + " " + cohorte+ " con " + totalPersonas + "personas";
		}
		
		Participante sebas = new Participante ("Sebastian", "Delagado", 2000);
			
	}
	
}
