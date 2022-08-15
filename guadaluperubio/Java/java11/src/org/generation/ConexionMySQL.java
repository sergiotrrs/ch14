package org.generation;

public class ConexionMySQL implements GeneriDb {

	private String cadenaconexion;
	private int puerto;
	
	
	
	public ConexionMySQL(String cadenaconexion, int puerto) {
		super();
		this.cadenaconexion = cadenaconexion;
		this.puerto = puerto;
	}

	
	
	public String getCadenaconexion() {
		return cadenaconexion;
	}



	public void setCadenaconexion(String cadenaconexion) {
		this.cadenaconexion = cadenaconexion;
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
		return "Se inserta DB en MySQL";
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
		return "Se elimina DB en MySQL";
	}



}
