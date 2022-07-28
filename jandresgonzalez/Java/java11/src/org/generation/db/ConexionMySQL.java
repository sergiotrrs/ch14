package org.generation.db;

public class ConexionMySQL implements GenericDb {
	
	private String cadenaConexion;
	private int puerto;
	
	
	/**
	 * @param cadenaConexion
	 */
	public ConexionMySQL(String cadenaConexion, int puerto) {
		this.puerto = puerto;
		this.cadenaConexion = cadenaConexion;
	}
	
	

	/**
	 * @return the cadenaConexion
	 */
	public String getCadenaConexion() {
		return cadenaConexion;
	}



	/**
	 * @param cadenaConexion the cadenaConexion to set
	 */
	public void setCadenaConexion(String cadenaConexion) {
		this.cadenaConexion = cadenaConexion;
	}



	/**
	 * @return the puerto
	 */
	public int getPuerto() {
		return puerto;
	}



	/**
	 * @param puerto the puerto to set
	 */
	public void setPuerto(int puerto) {
		this.puerto = puerto;
	}



	@Override
	public String insertar(int dato) {
		// TODO Auto-generated method stub
		return "Se inserta en DB MySQL el dato: " + dato;
	}

	@Override
	public String listar() {
		// TODO Auto-generated method stub
		return "Se enlistan valores";
	}

	@Override
	public String actualizar() {
		// TODO Auto-generated method stub
		return "Se actualiza valor";
	}

	@Override
	public String eliminar() {
		// TODO Auto-generated method stub
		return "Se eliminar dato MySQL";
	}

}
