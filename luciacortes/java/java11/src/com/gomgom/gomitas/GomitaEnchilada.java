package com.gomgom.gomitas;

public class GomitaEnchilada extends GomitaBase{
	
	private int nivelPicor;
	private boolean tajin;
	/**
	 * @param nombre
	 * @param color
	 * @param sabor
	 * @param precio 
	 * @param nivelPicor del 1 a 3, siendo 3 muy picante.
	 * @param tajin T o F
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
		switch (this.nivelPicor) {
		case 1:
			txt = " Ni pica. ";
			break;
		case 2:
			txt = " Pica más o menos. ";
			break;
		case 3:
			txt = " Pica rico, mmm. ";
			break;
		default: txt = "no se tiene registro del picor";	
		}
		return "La gomita " +super.getNombre()+ txt; 
	}
	/**
	 * La notación @Override indica que estamos sobreescribiendo el 
	 * comportamiento de un método de la clase base.
	 * Sino se indica la clase base de la cual se extiene 
	 * la clase base será la clase Object.
	 * Escribiendo override forzamos al conpilador a comprobar 
	 * que se está sobreescribiendo correctamente el método.
	 */
	@Override
	public String eslogan() {
		return " La gomita "+super.getNombre()+" tan agrio como tu ex. "+this.pica();
	}
	@Override
	public String toString() {
		return "GomitaEnchilada [nivelPicor=" + nivelPicor + ", tajin=" + tajin + "]";
	}
	
}
