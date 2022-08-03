package org.generation.cohorte;

import org.generation.mascota.Perrito;

public class Participante {

	private String nombre;
	private int edad;
	private Perrito mascosta;
	private Mentor mentor;
	
	public Participante(String nombre,int edad, Perrito mascosta) {
		this.nombre = nombre;
		this.edad=edad;
		this.mascosta = mascosta;
	}
	public Participante(String nombre,int edad, Perrito mascosta, Mentor mentor) {
		this.nombre = nombre;
		this.edad=edad;
		this.mascosta = mascosta;
		this.mentor=mentor;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public Perrito getMascosta() {
		return mascosta;
	}

	public void setMascosta(Perrito mascosta) {
		this.mascosta = mascosta;
	}
	
	public String datos() {
		return this.nombre+", "+this.edad+", Tiene de mascota a "+this.mascosta.getNombre()+", su mentora es "+ this.mentor.getNombre();
	}
	
	
}
