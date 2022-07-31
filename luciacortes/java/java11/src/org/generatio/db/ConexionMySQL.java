package org.generatio.db;
//puedo implementar varias poniendo una coma de por medio.
public class ConexionMySQL implements GenericDb {
	
	private String cadenaConexion;
	private int puerto;
	
	

	/**
	 * @param cadenaConexion
	 */
	public ConexionMySQL(String cadenaConexion, int puerto) {
		this.cadenaConexion = cadenaConexion;
		this.puerto = puerto;
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
		return "Se inserta DB en MySQL el dato "+dato;
	}
	@Override
	public String listar() {
		// TODO Auto-generated method stub
		return "Se enlista DB en MySQL";
	}

	@Override
	public String actualizar() {
		// TODO Auto-generated method stub
		return "Se actualiza DB en MySQL";
	}

	@Override
	public String eliminar() {
		// TODO Auto-generated method stub
		return "Se elimina dato de DB en MySQL";
	}

}
