package org.generatio.db;

public class ConexionOracle implements GenericDb {
	private String cadenaConexion;
	private int puerto;
	private String permiso;
	
	

	/**
	 * @param cadenaConexion
	 */
	public ConexionOracle(String cadenaConexion, int puerto, String permiso) {
		this.cadenaConexion = cadenaConexion;
		this.puerto = puerto;
		this.setPermiso(permiso);
		
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
		return "Se inserta DB en Oracle el dato "+dato;
	}
	@Override
	public String listar() {
		// TODO Auto-generated method stub
		return "Se enlista DB en Oracle";
	}

	@Override
	public String actualizar() {
		// TODO Auto-generated method stub
		return "Se actualiza DB en Oracle";
	}

	@Override
	public String eliminar() {
		// TODO Auto-generated method stub
		return "Se elimina dato de DB en Oracle";
	}

	public String getPermiso() {
		return permiso;
	}

	public void setPermiso(String permiso) {
		this.permiso = permiso;
	}


}
