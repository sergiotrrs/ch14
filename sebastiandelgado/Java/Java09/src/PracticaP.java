
public class PracticaP {
	public static void main (String[] args) {
		
	practica alumno = new practica(1, "Sebastian", 28, "Saltillo");
	practica alumno2 = new practica("Alejandro", 28, "Saltillo", 2022);
		
		String escAnt= "Universidad Autónoma de Coahuila";
		String anoEscAnt= "2018";
		
		
		System.out.println("Datos del usuario: " + alumno.datosGenerales());
		 alumno2.datosGenerales();
		
		 alumno.setanoEscuelaAnterior(anoEscAnt);
		 alumno.setanoEscuelaAnterior(anoEscAnt);
		 
		 System.out.println("Datos de escuela anterior: " + alumno.getEscuelaAnterior(anoEscAnt) + " del año: " 
		 +alumno.getanoEscuelaAnterior(anoEscAnt));
	}
}
