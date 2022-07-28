package org.generation;

public class AdmisionEnes {
	
	//Cear una clase (tema abierto)
	//Implementar por lo menos tres métodos
	// 3 non static fields 1 static field
	//Implementar dos constructores sobrecargados
	//Implementar setters y getters atributos
	//realizar prueba de clase

	private String name;
	private String apodo;
	private String carrera;
	private int noCuenta;
	
	
	
//	static void ENESimaClase() {
//		System.out.println("Armé una clase que va en la ENES, cuida perritxs y es vegana");
//	}
	
	AdmisionEnes() {
		System.out.println("Armé una clase que va en la ENES, cuida perritxs y es vegana"); 
	}
	
	AdmisionEnes(String nombre, String nick, String carrera) {
				this.name = nombre;
				this.apodo = nick;
				this.carrera = carrera;
				System.out.println("Admisión de: " + name + " que le dicen " + apodo + " a " + carrera);
				
	}
	
	void setNocuenta(int numFav) {
		this.noCuenta = numFav + 132;
	}
	
	int getNocuenta() {
		return this.noCuenta;
	}
	
	String getCarrera() {
		return this.carrera;
	}
	
	String getNombre() {
		return this.name;
	}
	
	void cuidarPerritos(String raza) {
		System.out.println(this.name + " acaba de rescatar a este perrito " + raza);
	}
	
	public void encontrarPirita() {
		if (this.carrera.equals("geociencias") || this.carrera.equals("Geociencias")) {
			System.out.println(this.apodo + " Sí encontró pirita"); 
		}
		else {System.out.println(this.apodo + " Se fue a grabar materiales orales");}
	}
	
	int gastoSustentable(int pesosMxn) {
		return pesosMxn * 2;
	}

}
