package org.generation.db;

public class ConexionOracle implements GenericDb {
	
	private String cadenaConexion;
	private int puerto;
	private String permiso;
	
	
	/**
	 * @param cadenaConexion
	 */
	public ConexionOracle(String cadenaConexion, int puerto, String permiso) {
		this.puerto = puerto;
		this.cadenaConexion = cadenaConexion;
		this.permiso = permiso;
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
		return "Se inserta en Oracle el dato: " + dato;
	}

	@Override
	public String listar() {
		// TODO Auto-generated method stub
		return "Se enlistan valores Oracle";
	}

	@Override
	public String actualizar() {
		// TODO Auto-generated method stub
		return "Se actualiza valor Oracle";
	}

	@Override
	public String eliminar() {
		// TODO Auto-generated method stub
		return "Se eliminar dato Oracle";
	}

}
