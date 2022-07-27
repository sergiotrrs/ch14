package java10Actividad.game;

public class Consola {
	private String nombre; 
	private String Compania;
	
	/**
	 * 
	 * @param nombre
	 * @param compania
	 */
	public Consola(String nombre, String compania) {
		this.nombre = nombre;
		Compania = compania;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCompania() {
		return Compania;
	}

	public void setCompania(String compania) {
		Compania = compania;
	}
	
	
	

}
