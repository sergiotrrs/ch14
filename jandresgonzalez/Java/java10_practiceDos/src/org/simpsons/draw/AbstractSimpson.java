package org.simpsons.draw;

public class AbstractSimpson implements Simpsonite {
	
	private String nombre;
	private String apellido;
	private int edad = 0;

	/**
	 * @param nombre
	 * @param apellido
	 */
	public AbstractSimpson(String nombre, String apellido) {
		this.nombre = nombre;
		this.apellido = apellido;
	}

	
	
	
	/**
	 * @return the nombre
	 */
	public String getNombre() {
		return nombre;
	}




	/**
	 * @param nombre the nombre to set
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}




	/**
	 * @return the apellido
	 */
	public String getApellido() {
		return apellido;
	}




	/**
	 * @param apellido the apellido to set
	 */
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}




	/**
	 * @return the edad
	 */
	public int getEdad() {
		return edad;
	}




	@Override
	public String comer(String comida) {
		// TODO Auto-generated method stub
		return "Qué rico es comer " + comida;
	}

	@Override
	public String hacerChiste() {
		// TODO Auto-generated method stub
		return this.nombre + " " + this.apellido + " hace un chiste para la TV";
	}

	@Override
	public String caminar(String direccion) {
		// TODO Auto-generated method stub
		return this.nombre + " camina hacia " + direccion;
	}

	@Override
	public void cumplirAnios() {
		// TODO Auto-generated method stub
		this.edad++;
	}

}
