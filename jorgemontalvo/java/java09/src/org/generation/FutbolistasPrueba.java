package org.generation;

public class FutbolistasPrueba {

	public static void main(String[] args) {
		
		//Crear una clase (tema abierto)
				//Implementar por lo menos 3 métodos
				//por lo menos 3 atributos de objeto
				//Implementar 2 constructores sobrecargados
				//implementar setters and getters de los atributos.
				//Realizar pruebas de la clase
		
		Futbolistas cr7 = new Futbolistas("Cristiano", "Ronaldo", "Manchester Utd");
		Futbolistas messi = new Futbolistas("Lionel", "Messi", "PSG");
		
		cr7.setGoles(38);
		messi.setGoles(21);
		System.out.println("Jugador: " + cr7.datosAlbum());
		System.out.println("Número de goles anotados esta temporada " + cr7.getGoles());
		System.out.println("Jugador: " + messi.datosAlbum());
		System.out.println("Número de goles anotados esta temporada " + messi.getGoles());
		
		//Especiales
		Futbolistas hugo = new Futbolistas("Hugol", 9 , false);
		Futbolistas ronaldinho = new Futbolistas("Dinho", 10 , true);
	
		hugo.setGoles(52);
		ronaldinho.setGoles(25);
		System.out.println("Jugador: " + cr7.premium());
		System.out.println("Número de goles anotados en la últmia temporada " + hugo.getGoles());
		System.out.println("Jugador: " + messi.premium());
		System.out.println("Número de goles anotados en la última temporada " + ronaldinho.getGoles());
		
		
		
		
		}

	}


