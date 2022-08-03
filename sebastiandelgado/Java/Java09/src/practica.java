
public class practica {

		//Crear una clase de tema abierto donde implementaremos por lo menos 3 métdos
		// por lo menos 3 atributos de objeto
		//Por lo menos 1 atributo de clase
		//Por lo menos 2 Constructores sobrecargados
		//Implementar setters y getters a los atributos
		//Realizar pruebas de la clase
		
		private int num;
		private String nom;
		private int edad;
		private String dire;
		private int telefono;
		private String escuelaAnterior;
		private int anoEscAnterior;
		
		
		static int anoEscuela = 2022;
		static String Casa ="RaveClaw";
		
		
		String datosGenerales() {
			
			return this.nom + "\n " + this.edad + " años \n" + this.telefono + anoEscuela + Casa;
		}
		
		practica( int num, String nom, int edad, String dire){
			this.num = num;
			this.nom = nom;
			this.edad = edad;
			this.dire = dire;
			System.out.println("Datos del estudiante: \n" + "No. "+ num +"\n" + "nombre: "
					+ nom + "\n Edad: " + edad);
		}
		
		practica(String nombre, int edad, String dire, int anoEscuela){
			this.nom =nombre;
			this.edad = edad;
			this.dire =dire; 
			System.out.println("Datos de contacto del usuario: \n Nombre: " + nom + "\n Edad: " + edad + "\n Dirección: "
					+dire);
		}
		

		void setEscuelaAnterior(String escuelaAnte){
			this.escuelaAnterior = escuelaAnte;
		}
		String getEscuelaAnterior(String escuelaAnte) {
			return this.escuelaAnterior;
		}
		void setanoEscuelaAnterior(String anoescuelaAnte){
			this.escuelaAnterior = anoescuelaAnte;
		}
		String getanoEscuelaAnterior(String anoescuelaAnte) {
			return this.escuelaAnterior;
		}
}

