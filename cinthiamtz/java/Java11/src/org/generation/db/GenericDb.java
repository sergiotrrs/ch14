package org.generation.db;
/**
 * Una interface es una declaración 
 * formal de un contrato,
 * En la cual los métodos no contienen implementación.
 * Es similar a los métodos abstractos.
 * 
 * Una clase puede implementar varias interfaces, aunque no tengan relación.
 * 
 * Las clases abastractas se deben utlilzar para objetos estrechamente relacionados, 
 * mientras que las interfaces son más adecuados para proporcionar funcionalidad común 
 * a clases que no están relacionadas entre ellas
 * 
 * @author Cinthia
 *
 */

public interface GenericDb {
	/**
	 * Los atributos de una interfaz son de tipo:
	 * static y final
	 */		
	int MAX_REGISTROS=10;
	
	/**
	 * Las interfaces no tienen con contsructores
	 */

/**
 * Los metodos de una interface son del tipo:
 * public y asbtract;
 * 
 * La implementación se debera realizar 
 * en las clases que utilicen la interfaz.
 * @return
 */
	String insertar(int dato);
	
	String listar();
	
	String actualizar();
	
	String eliminar();
	
	
}
