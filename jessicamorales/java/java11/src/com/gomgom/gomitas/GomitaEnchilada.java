package com.gomgom.gomitas;

public class GomitaEnchilada extends GomitaBase{
	private int nivelPicor;
	private boolean tajin;
	
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
			txt = " ni pica";
			break;
		case 2:	
			txt = " pica más o menos";
			break;
		case 3:	
			txt = " pica rico, mmm";
			break;
		default: txt=" no se tiene registro del picor";
		}
		return "La gomita " + super.getNombre() + txt;
	}
	
	/**
	 * La notación @Override indica que estamos sobrescribiendo
	 * el comportamiento de un método de la clase base.
	 * S no se indica la clase base de la cual se extiende
	 * la clase base será la clase Object.
	 * Escribiendo override forzamos al compilador a comprobar
	 * que se está sobreescribiendo correctamente el método.@
	 */
//	@Override
//	public String eslogan() {
//		return "La gomita " + super.getNombre() + " es tan agrio como tu ex";
//	}
	
	@Override
	public String toString() {
		return "GomitaEnchilada [nivelPicor=" + nivelPicor + ", tajin=" + tajin + "]";
	}
}
