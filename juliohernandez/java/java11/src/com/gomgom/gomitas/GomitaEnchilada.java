package com.gomgom.gomitas;

public class GomitaEnchilada extends GomitaBase { //Se hereda con extends

	private int nivelPicor;
	private boolean tajin;
	
	/**
	 * 
	 * @param nombre 
	 * @param sabor
	 * @param color
	 * @param precio
	 * @param nivelPicor
	 * @param tajin
	 */
	public GomitaEnchilada(String nombre, String sabor, int color, double precio, int nivelPicor, boolean tajin) {
		//Todos los atributos se heredan
		//Súper hace referencia a la clase padre 
		//La primera línea de un constructor debe ser super.
		super(nombre, sabor, color, precio); //Si tuviera sobrecargados, pondría el base = vacío
		this.nivelPicor = nivelPicor;
		this.tajin = tajin;
	}
	public int getNivelPicor() {
		return nivelPicor;
	}
	public void setNivelPicor(int nivelPicor) {
		this.nivelPicor = nivelPicor;
	}
	public boolean isTajin() {
		return tajin;
	}
	public void setTajin(boolean tajin) {
		this.tajin = tajin;
	}
	
	public String pica() {
		String txt;
		switch (this.nivelPicor) {
		case 1: txt =  " ni pica"; break;
		case 2: txt =  " casi ni pica"; break;
		case 3: txt =  " pica poquito"; break;
		case 4: txt =  " pica rico"; break;
		
					
		default: txt = "no se tiene registro del picor";
		}
		return "La gomita "+ super.getNombre() +txt; //Nombre sólo existe a la clase base
	}
	
	@Override //Verifica si el nombre del método en efecto se está sobrescribiendo en la clase base
	public String eslogan() { //I.e., verifica que el nombre esté bienescrito
		return "La gomita " + super.getNombre() + "tan agrio como tu ex";
	}
	
	/**
	 * La notacion @Override indica que estamos sobreescribiendo
	 * el comportamiento de un método de la clase base.
	 * Si no se indica la clase base de la cual se extiende
	 * la clase base será la clase Object.
	 * 
	 * Escribiendo override forzamos al compilador a comprobar 
	 * que se está sobreescribiendo correctamente el método.
	 */

}
