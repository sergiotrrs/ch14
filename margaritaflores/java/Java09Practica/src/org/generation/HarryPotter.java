package org.generation;

public class HarryPotter {
	//Definimos atributos de los objetos
	
	private String nombreMuggle;
	private String nombreMago;
	private int edadMago;		
			
	//Definimos atributos de la clase
	
	static String bootCamp= "Escuela de Magia";
	static int totalDeMagos ;
	
	//Definimos los métodos sobrecargados
	
	HarryPotter(String nombreMuggle, String nombreMago, int edadMago){
		this.nombreMago = nombreMago;
		this.nombreMuggle = nombreMuggle;
		this.edadMago = 2022-edadMago;
		
	}
	
	HarryPotter(){
		System.out.println("Entra un nuevo mago al mundo de la magia");
	}
	
	//Definir un método
	String nombreCompleto() {
		return nombreMago;
		
	}
			
			
			
			
	
}
