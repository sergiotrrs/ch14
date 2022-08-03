package org.generation.db;

public class ConexionOracle implements GenericDb{

	private String cadenaConexion;
	private int puerto;
	private String permiso;
	
	public ConexionOracle(String cadenaConexion, int puerto,String permiso) {
		this.cadenaConexion = cadenaConexion;
		this.puerto=puerto;
		this.permiso=permiso;
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
		return "Se inserta en DB Oracle el dato "+ dato;
	}

	@Override
	public String listar() {
		
		return "Se enlistan valores de la DB Oracle";
	}

	@Override
	public String actualizar() {
		// TODO Auto-generated method stub
		return "Se actualiza valor en la DB Oracle";
	}

	@Override
	public String eliminar() {
		// TODO Auto-generated method stub
		return "Se elimina dato de la DB Oracle";
	}
	
	
}
