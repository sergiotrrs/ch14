package com.cohorte;

import org.generation.mascota.Perrito;

public class Participante {
		private String nombre;
		private int edad;
		private Perrito mascota;
		
		public Participante(String nombre, int edad, Perrito mascota) {
			this.nombre = nombre;
			this.edad = edad;
			this.mascota = mascota;
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
		public Perrito getMascota() {
			return mascota;
		}
		public void setMascota(Perrito mascota) {
			this.mascota = mascota;
		}
		
		
		
		
}
