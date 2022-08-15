package org.generation.db;

public class ConexionOracle implements GebericDb {
	
	private String cadenaConexion;
	private int puerto;	
	private String permiso;
	
	public ConexionOracle(String cadenaConexion, int puerto, String permiso) {
		this.puerto = puerto;
		this.cadenaConexion = cadenaConexion;
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
		return "Se inserta en DB Oracle el dato " +dato;
	}

	@Override
	public String listar() {
		// TODO Auto-generated method stub
		return "Se enlistan valores de la DB Oracle";
	}

	@Override
	public String actualizar() {
		// TODO Auto-generated method stub
		return "Se actualiza valor en DB Oracle";
	}

	@Override
	public String eliminar() {
		// TODO Auto-generated method stub
		return "Se elimina dato en DB Oracle";
	}

	
	
	

}
