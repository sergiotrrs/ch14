package org.generation;

public class HeladosPrueba {

	// Crear una clase (tema abierto)
	// implementar por los menos 3 métodos
	// (mín 3 atrib. de objeto)
	// por lo menos 1 atribto de clase
	// implementar 2 constructores sobrecargados
	// implementar setters and getters de los atributos
	// Realizar pruebas de la clase.

	public static void main(String[] args) {
		Helados miFavorito = new Helados();
		
		miFavorito.setSabor("limón");
		miFavorito.setTamaño("Grande");
		miFavorito.setColor("verde");
		
		System.out.println("miFavorito con: " + miFavorito.getInfo());
		
		Helados Mamey = new Helados("Mamey", "Grande");
		Helados Chicle = new Helados("Azul");
		
		Helados Combinado = new Helados();
		
		Combinado.combinarSabor(miFavorito, Mamey);
		
		System.out.println("El nuevo sabor es: "+Combinado.getSabor());
		
		miFavorito.setColor("Amarillo");
		System.out.println("miFavorito con: "+miFavorito.getInfo());
		
	}

}
