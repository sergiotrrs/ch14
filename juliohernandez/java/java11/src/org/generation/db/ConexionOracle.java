package org.generation.db;

public class ConexionOracle implements GenericDb{ //La implementación sólo es con las interfaces
	/**
	 * Se puede implementar más de una interfaz en una clase;
	 * Pero sólo se puede heredar de una clase
	 */
	private String cadenaConexion;
	private int puerto;
	private String permiso;
		
	public ConexionOracle(String cadenaConexion, int puerto, String permiso) {
	super();
	this.cadenaConexion = cadenaConexion;
	this.puerto=puerto;
	this.permiso = permiso; 
}

	public String getCadenaConexion() {
		return cadenaConexion;
	}

	public void setCadenaConexion(String cadenaConexion) {
		this.cadenaConexion = cadenaConexion;
	}

	public int getPuerto() {
		return puerto;
	}

	public void setPuerto(int puerto) {
		this.puerto = puerto;
	}



	@Override
	public String insertar(int dato) {
		// TODO Auto-generated method stub
		return "Se inserta "+ dato + " en DB Oracle ";
	}

	@Override
	public String listar() {
		// TODO Auto-generated method stub
		return "Se enlista valor en DB MySQL ";
	}

	@Override
	public String actualizar() {
		// TODO Auto-generated method stub
		return "Se actualiza valor en DB MySQL";
	}

	@Override
	public String eliminar() {
		// TODO Auto-generated method stub
		return "Se elimina valor en DB MySQL";
	}

}
