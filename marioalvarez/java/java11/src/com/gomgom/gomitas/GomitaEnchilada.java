package com.gomgom.gomitas;

public class GomitaEnchilada extends GomitaBase {
	
	private int nivelPicor;
	private boolean tajin;
	/**
	 * 
	 * @param nombre de la gomita
	 * @param color de la gomita
	 * @param sabor de la gomita
	 * @param precio de la gomita
	 * @param nivelPicor de 1 a 10, siendo muy picante
	 * @param tajin si lleva tajin o no
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
	
	
	/*Escribiendo override forzamos al compilador a comporbar  si se
	 * está sobreescribiendo  correctamente el método*/
	
	
	
	
	@Override
	public String eslogan() {
		return "La gomita " +super.getNombre()+" es la mejor"; 
	}
	
	public String pica() {
		String txt="";
		switch(this.nivelPicor) {
		case 1:
			txt=" ni pica.";
			break;
		case 2:
			txt=" pica mas o menos.";
			break;
		case 3:
			txt=" pica rico, mmm.";
			break;
		default:
			txt=" no tiene registro del picor.";
		}
		//Pongo super como buena práctica
		return "La gomita pica "+ super.getNombre()+txt;
	}

	@Override
	public String toString() {
		return super.toString()+"GomitaEnchilada [nivelPicor=" + nivelPicor + ", tajin=" + tajin + "]";
	}
	
	
	
	
}
