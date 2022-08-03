package org.generation.db;

public class ConexionMySQL implements GenericDb{

	private String cadenaConexion;
	private int puerto;
	
	public ConexionMySQL(String cadenaConexion, int puerto) {
		this.cadenaConexion = cadenaConexion;
		this.puerto=puerto;
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
		return "Se inserta en DB MySQL el dato "+ dato;
	}

	@Override
	public String listar() {
		
		return "Se enlistan valores de la DB MySQL";
	}

	@Override
	public String actualizar() {
		// TODO Auto-generated method stub
		return "Se actualiza valor en la DB MySQL";
	}

	@Override
	public String eliminar() {
		// TODO Auto-generated method stub
		return "Se elimina dato de la DB MySQL";
	}
	
	
}
