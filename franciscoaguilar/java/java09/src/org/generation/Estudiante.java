package org.generation;

public class Estudiante {
	
	private String nombre;
	private String casa;
	private String headmaster;
	private int edad;
	private int agno;
	private String patronus;
	
	
	static String escuela = "Hogwarts";
	static int mago;
	
	
	
	//3 métodos
	String datosEstudiante() {
		return this.nombre+" Casa de " +this.escuela+": "+ this.casa+" edad "+this.edad;
	}
	
	String jefeCasa () {
		
		if(this.casa == "Griffindor")
			 this.headmaster = "McGonagall";
			if(this.casa == "Slytherin")
				this.headmaster = "Snape";
				if(this.casa == "Ravenclaw")
					this.headmaster = "Flitwick";
					if(this.casa == "Hufflepuf")
						this.headmaster = "Sprout";
			
		return "tu headmaster es: " +this.headmaster;
		
	}
	
	String NumEstudiantes() {
		return "El número de estudiantes de Hogwarts es: "+ this.mago;
		
	}
	
	
	
	
	
	
	// 2 constructores
	
	Estudiante(String casa){
		this.casa = casa;
		System.out.println("bienvenido a tu casa: " + this.casa);
		System.out.println(this.jefeCasa());
				
	}
	
	Estudiante(String nombre, String casa,int edad){
		this.nombre = nombre;
		this.casa = casa;
		this.edad =edad ;
		mago++;
		
	}
	
	//Set y get
	
	
	void setPatronus(String patronus){
		this.patronus = patronus;
	}
	String getPatronus(){
		return this.patronus;
	}

	void setAgno(int agno){
		this.agno = agno;
	}
	int getAgno(){
		return this.agno;
	}
	
	
	
	
	

}
