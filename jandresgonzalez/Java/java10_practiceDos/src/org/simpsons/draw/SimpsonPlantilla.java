package org.simpsons.draw;

public class SimpsonPlantilla extends AbstractSimpson{

	private String trabajo;
	private String behavior;
	private String hobbyFav;
	/**
	 * @param nombre
	 * @param apellido
	 * @param trabajo
	 * @param behavior
	 * @param hobbyFav
	 */
	public SimpsonPlantilla(String nombre, String apellido, String trabajo, String behavior, String hobbyFav) {
		super(nombre, apellido);
		this.trabajo = trabajo;
		this.behavior = behavior;
		this.hobbyFav = hobbyFav;
	}
	
	
	
		
	
}
