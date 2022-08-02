package org.particpante;

public class Escuela {
	//Definciones atributos de los objetos	
		
		String nombreAlumno;
		String nombreMaestro;
		String materiaFavoroto;
		int grupo;
		int grado;	
		
		
		//Definimos atributos de la clse
		static String nombreEscuela ="Secundaria";
		static String turno ="Todo el dia";
		static int totalEstudiantes;
		
			//Definimos el constructor
		
		Escuela(){
			System.out.println("Pertenece al comunidad educativa");			
		}
		
		Escuela (String nombreAlumno, String nombreMaestro, int grupo , int grado){
			//this.nombre objeto nombre es de parameroo
			this.nombreAlumno = nombreAlumno;
			this.nombreMaestro= nombreMaestro;
			this.grupo= grupo;
			this.grado=grado;
						
		}
		
		Escuela (String nombreAlumno, int grupo , int grado){
			//this.nombre objeto nombre es de parameroo
			this.nombreAlumno = nombreAlumno;			
			this.grupo= grupo;
			this.grado=grado;
						
		}
	

		 String datosCompletosAlumno() {
			 //this hace refencia al objeto que lo esta invocando
			 return (this.nombreAlumno + "esta en el grado " +this.grado+"en el grupo "+this.grupo +" su maestra es " +this.nombreMaestro );
		 }
		 
		 String datosCompletosMaestra() {
			 //this hace refencia al objeto que lo esta invocando
			 return (this.nombreMaestro + "es la profesora del " +this.grado+"en el grupo "+this.grupo  );
		 }
		 
		
		
		
		
		
		
}
