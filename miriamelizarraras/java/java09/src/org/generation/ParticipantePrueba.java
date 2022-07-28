package org.generation;

public class ParticipantePrueba {

	public static void main(String[] args) {
		Participante abue;
		//Para instanciaarlo se hace llamar al método constructor -> ()
		abue = new Participante();
		
		abue.nombre = "Jorge Andrés";
		abue.apellido = "Trinidad Gonzalez";
		abue.edad = 25;
		
		abue.musicaFav = "Happy Punk";
		
		System.out.println("Participante: " + abue.nombreCompleto());
		
		Participante moi = new Participante();
		moi.nombre = "Moises Arturo";
		moi.apellido = "García";
		moi.edad = 21;
		moi.musicaFav = "Pop";
		//moi.totalPersonas = 2;
		
		
		System.out.println("Participante: " + moi.nombreCompleto());
		System.out.println("N. total participantes: " + Participante.totalPersonas);
		
		//Se crea con método sobrecargados
		Participante miri = new Participante("Miri de la Luz", "Loera", 1994);
		System.out.println("Participante: " + miri.datosCompletos());
		
//		Participante sebas = new Participante("Sebastian", "Delgado", 1994);
//		System.out.println("Participante: " + miri.datosCompletos());

		
		System.out.println("No. Total participantes: " + Participante.totalPersonas);
		System.out.println(Participante.bootCampCohorte());
		
		System.out.println("Famosisimo Abue " + abue.datosCompletos("abue"));
		
		/* AQUI SE HICIERON COSAS... SE ENCAPSULARON DATOS POR LO QUE VAMOS A ACCEDER A SUS DATOS */
		
		Participante abue = new Participante("Jorge", "Gonzalez", 1996);
		Participante moi = new Participante("Moises Arturo", "García", 2000);
		System.out.println("Participante: " + abue.datosCompletos());
		System.out.println("Participante: " + moi.datosCompletos());
		
		void setNAmonestacion(int nAmonestaciones){
			this.nAmonestacion += nAmonestaciones;
		}
		int getNAmonestacion(int nAmonestaciones){
			return this.nAmonestacion;
		}
//		void setRfc(String rfc) {
//			this.rfc = rfc;
//		} El rfc no debería poderse modificar, ese se crea de forma automática
		
		//Con el rfc 
		String getRfc() {
			return this.rfc;
		}

		
		

		
	}

}
