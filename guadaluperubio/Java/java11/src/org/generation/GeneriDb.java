package org.generation;

public interface GeneriDb {

	/*
	 * Los atribusto de una interfaz son del tipo static y final
	 */
	int MAX_REGISTRO =10;
	/*
	 * los metodos de una interface son de tipo public y abstrac
	 * 
	 * 
	 */
	
	String insertar(int dato);
	String listar();
	String actualizar();
	String eliminar();
	
}
