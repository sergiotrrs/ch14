package com.gomgom.gomitas;

public class GomitaEnchilada extends GomitaBase{

	private int nivelPicor;
	private boolean tajin;
	
	/**
	 * 
	 * @param nombre de la gomita
	 * @param color de la gomita
	 * @param sabor de la gomita
	 * @param precio de la gomita
	 * @param nivelPicor de 1 a 3, nivel de picante
	 * @param tajin si lleva o no
	 */
	
	public GomitaEnchilada(String nombre, int color, String sabor, double precio, int nivelPicor, boolean tajin) {
		super(nombre, color, sabor, precio); //super hace referncia a los atributos del padre
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
			txt = " Ni pica";
			break;
		case 2:
			txt = " Pica más o menos";
			break;
		case 3:
			txt = " Pica recio, mmm.";
			break;
			default: txt= "No se tien registro del picor";
		}
		return "La gomita" + super.getNombre() + txt;
	}
	
	/**
	 * La notación @Override indica que esstamos sobreescribiendo
	 * el comportaiento de un método de la clase base.
	 * Si no se indica la clase base de la cual se extiende.
	 * la clase base será la clase Object.
	 * Escribiendo override forzamos al compilador a comprobar 
	 * que se está sobreescribiendo correctamente el método.
	 */
	@Override
	public String eslogan() {
		return "La gomita " + super.getNombre() + " tan agrio como tu ex." + this.pica();
	}

//	@Override
//	public String toString() {
//		return "GomitaEnchilada [nivelPicor=" + nivelPicor + ", tajin=" + tajin + "]";
//	}
	
	
}
