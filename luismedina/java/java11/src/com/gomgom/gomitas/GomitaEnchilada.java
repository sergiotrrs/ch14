package com.gomgom.gomitas;

public class GomitaEnchilada extends GomitaBase {

	private int nivelPicor;
	private boolean tajin;

	/**
	 * @param nombre     de la gomita
	 * @param color      de la gomita
	 * @param sabor      de la gomita
	 * @param precio     de la gomita
	 * @param nivelPicor nivel del 1 al 3, 3 es mas picante
	 * @param tajin      si lleva tajin o no
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
			txt = " ni pica.";
			break;

		case 2:
			txt = " pica mas o menos.";
			break;

		case 3:
			txt = " pica rico, mmm.";
			break;

		default:
			txt = " no se tiene registro del picor.";
			break;
		}
		return "La gomita " + super.getNombre() + txt;
	}

	/**
	 * La notacion @override indica que etsamos sobreescribiendo el comportamiento de
	 * un metodo de la clase base, si no se indica la clase base de la cual se
	 * extiende la clase base sera la clase Objetc. Escribiendo override forzamos al
	 * compilador a comprobar que se esta sobreescribiendo correctamente el metodo.
	 */
	@Override
	public String eslogan() {
		return "La gomita " + super.getNombre() + " tan agrio como tu ex " + this.pica();
	}

	@Override
	public String toString() {
		return super.toString()+" GomitaEnchilada [nivelPicor=" + nivelPicor + ", tajin=" + tajin + "]";
	}
	
	
}
