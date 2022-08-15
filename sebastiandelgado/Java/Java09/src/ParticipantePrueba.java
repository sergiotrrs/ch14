
public class ParticipantePrueba {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Participante abue = new Participante();
		abue.nombre ="Jorge Andrés";
		abue.apellido="Gonzalez";
		abue.edad=25;
		abue.musicaFav ="Happu Punk";
		
		System.out.println("Participante: " + abue.datosCompletos());
		
		Participante moi = new Participante();
		moi.nombre ="Moises Arturo";
		moi.apellido ="García";
		moi.edad =21;
		moi.musicaFav ="Pop";
		//moi.totalPersonas =2;
		
		System.out.println("Participante: " + moi.datosCompletos());
//		System.out.println("Total de Participantes: " + abue.totalPersonas);
//		System.out.println("Total de Participantes: " + moi.totalPersonas);
		
		//Con argumentos para que lo reciba la clase instanciable es:
		Participante miri = new Participante("Miri de la Luz", "Loera" ,1994);
		System.out.println("Participante: " +miri.datosCompletos());
		
		Participante sebas= new Participante("Sebastian", "Delgado", 2000);
		System.out.println("Participante: " + sebas.datosCompletos());
		System.out.println("N. Total de participantes: " + Participante.totalPersonas);
		System.out.println(Participante.bootCampCohorte());
	}

}
