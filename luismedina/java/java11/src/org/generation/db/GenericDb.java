package org.generation.db;

/**
 * Una interface es una declaracion formal de un contrato, en la cual los
 * metodos no contienen implementacion. Es similar a los metodos abstractos.
 * 
 * Una clase puede implementar varias interfaces aunque no tengan relacion.
 * 
 * Las clases abstractas se deben utilizar para objetos estrechamente
 * relacionado mientras que las interfaces son mas adecuados para proporcionar
 * su funcionalidad comun a clases que no estan relacionadas entre ellas.
 * 
 * 
 * @author luisd
 *
 */
public interface GenericDb {
	/**
	 * Los atributos de una interfaz son del tipo static y final.
	 * 
	 * Los metodos de una interface son de metodo public y abstract
	 * 
	 * La implementacion se deberala realizar en las clases que utilizen la interfaz
	 */
	int MAX_REGISTROS = 10;
	
	//Las interfaces no tienes constructores
	String insertar(int dato);
	String enlistar();
	String actualizar();
	String eliminar();
	

}
