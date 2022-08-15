package org.generatio.db;
/**
 * Una interfaz es una declaración formal de un contrato,
 * en la cual los métodos no contienen implementación.
 * Es similar a los métodos abstractos.
 * 
 * Una clase puede extenderse de varias interfaces aunque no tenga relación.
 * 
 * Las clases abstractas se deben utilizar para objetos estrechamente
 * realcionados, mientras que las interfaces son más adecuados para 
 * proporcionar funcionalidad común a clases que no están relacionadas entre ellas.
 * 
 * @author lucia
 *
 */
public interface GenericDb {
	/**
	 * Los atributos de una interfaz son de tipo 
	 * static y final.
	 */
	int MAX_REGISTROS = 10;
	
	/**
	 * Las interfaces no tienen ni necesitan constructores.
	 * Los métodos de una interfaz son de tipo public y abstract.
	 * 
	 * La implementación se deberá realizar en las clases que 
	 * utilicen la interfaz.
	 * @return
	 */
	String insertar(int dato);
	String listar();
	String actualizar();
	String eliminar();
	
	
}
