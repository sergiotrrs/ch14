package com.gomgom.gomitas;

public class GomitaEnchilada extends GomitaBase{
	
	private int nivelPicor;
	private boolean tajin;
	/**
	 * @param nombre
	 * @param color
	 * @param sabor
	 * @param precio
	 * @param nivelPicor
	 * @param tajin
	 */
	public GomitaEnchilada(String nombre, int color, String sabor, double precio, int nivelPicor, boolean tajin) {
		super(nombre, color, sabor, precio);
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
		switch(this.nivelPicor) {
		case 1:
			txt= "ni pica";
			break;
		case 2:
			txt= "pica mas o menos";
			break;
		case 3:
			txt= "pica rico, mmmm";
			break;
		default: txt ="no se tiene regiustro del picor";
		}
		return "La gomita " + super.getNombre()+txt;
		
	}
	/**
	 * La notación @Override indica que estamos sobreescribiendo
	 * el compoartamiento de un método de la clase base.
	 * Si no se indica la clase base de la cual se extiende
	 * la clase base será la clase Object.
	 * Escribiendo override forzamos al compilador a comprobar
	 * que se está sobreescribiendo correctament el método
	 */

	@Override
	public String eslogan() {
		return "la gomita "+ super.getNombre()+ "Tan agrio como tu ex" + this.pica();
	}
	@Override
	public String toString() {
		return super.toString() + " GomitaEnchilada [nivelPicor=" + nivelPicor + ", tajin=" + tajin + "]";
	}
	

	
	
	
}

