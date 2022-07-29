package org.generation;

public class EstudiantePrueba {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Estudiante harry = new Estudiante("Harry","Griffindor",11);
		System.out.println("Estudiante: "+harry.datosEstudiante());
		System.out.println("Harry "+harry.jefeCasa());
		System.out.println(harry.NumEstudiantes());
		
		harry.setPatronus("Ciervo");
		
		String patronusHarry = harry.getPatronus();
		System.out.println("Patronus Harry: "+patronusHarry);
		
		harry.setAgno(1);
		System.out.println("Año Harry: "+harry.getAgno());
		
		
		Estudiante Paco = new Estudiante("Ravenclaw");
		
		
	}

}
