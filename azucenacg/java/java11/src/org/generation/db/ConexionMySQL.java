package org.generation.db;

//implements es como si hicieramos lo de la herencia

public class ConexionMySQL implements GenericDb{
	
	private String cadenaConexion;
	private int puerto;
	
	
	
	public ConexionMySQL(String cadenaConexion, int puerto) {
	
		this.cadenaConexion = cadenaConexion;
		this.puerto = puerto;
	}

	
	@Override
	public String insertar(int dato) {
		// TODO Auto-generated method stub
		return "Se inserta en MySQL el dato: "+dato;
	}

	@Override
	public String listar() {
		// TODO Auto-generated method stub
		return "Se lista";
	}

	@Override
	public String actualizar() {
		// TODO Auto-generated method stub
		return "Se actualiza dato en MySQL";
	}

	@Override
	public String eliminar() {
		// TODO Auto-generated method stub
		return "Se elimina dato en MySQL";
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

	
}
