package org.generation.db;

public class ConexionOracle implements GenericDb{
	
	private String cadenaConexion;
	private int puerto;
	private String permiso;
	
	
	public ConexionOracle(String cadenaConexion, int puerto, String permiso) {
		this.puerto=puerto;
		this.cadenaConexion = cadenaConexion;
		this.puerto = puerto;
	}

	
	@Override
	public String insertar(int dato) {
		// TODO Auto-generated method stub
		return "Se inserta en DBOracle el dato"+dato;
	}

	@Override
	public String listar() {
		// TODO Auto-generated method stub
		return "Se lista en DBOracle";
	}

	@Override
	public String actualizar() {
		// TODO Auto-generated method stub
		return "Se actualiza dato en DBOracle";
	}

	@Override
	public String eliminar() {
		// TODO Auto-generated method stub
		return "Se elimina dato en DBOracle";
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
