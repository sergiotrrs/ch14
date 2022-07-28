package org.generation.db;
/**
 * Una interface es una declaración formal de un contrato,
 * en la cual los métodos no contienen implementación. Es similar a las métodos abstractas.
 * 
 * Una clase puede implementar varias interfaces, aunque no tengan relación.
 * 
 * Las clases abstractas se deben utilizar para objetos estrechamente relacionados, 
 * mientras que las interfaces son más adecuadas para proporcionar funcionalidad común
 * a clases que no están relacionadas entre ellas.
 * 
 * @author LENOVO
 *
 */

public interface GenericDb {
	/**
	 * Los atributos de una interfaz son del tipo static y final
	 * 
	 * -FINAL-
	 * El modificador final en un atributo lo hace tipo constante.
	 * El modificador final en un método evita que este sea sobreescrito.
	 * El modificador final en una clase, evita que pueda ser heredado
	 */
	int MAX_REGISTROS = 10; //Se escribe en Mayusc. porque es una CONSTANTE
	/**
	 * Las interfaces no tienen constructores
	 */
	
	
	/**
	 * Los métodos de una interface son de tipo public y abstract
	 * 
	 * La implementación deberá realizar en las clases que utilicen la intefaz.
	 * @return
	 */
	String insertar(int dato);
	String listar();
	String actualizar();
	String eliminar();

}
