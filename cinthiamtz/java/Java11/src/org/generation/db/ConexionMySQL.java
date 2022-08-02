package org.generation.db;

public class ConexionMySQL implements GenericDb {

	private String cadenaConexion;
	private int puerto;
//	private String permiso;
	
	
	public ConexionMySQL(String cadenaConexion, int puerto) {
		this.puerto =puerto;
		this.cadenaConexion = cadenaConexion;
//		this.permiso =permiso;
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
	public String insertar(int dato ) {
		// TODO Auto-generated method stub
		return "Se inserta en DB MySql el dato " + dato;
	}

	@Override
	public String listar() {
		// TODO Auto-generated method stub
		return "Se enlista valores en DB MySql";
	}

	@Override
	public String actualizar() {
		// TODO Auto-generated method stub
		return "Se actulizan datos DB MySql";
	}

	@Override
	public String eliminar() {
		// TODO Auto-generated method stub
		return "Se eliminan datos DB MySql";
	}

}
