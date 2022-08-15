package com.gomgom.gomitas;

public class GomitaEnchilada extends GomitaBase{
	
	/*
	 * Si no se indica la clase base de la cual se extiende,
	 * la clase base será Object
	 * */
	
	private int nivelPicor;
	private boolean tajin;
	
	/**
	 * @String nombre
	 * @int color
	 * @String sabor
	 * @double precio
	 * @int nivelPicor
	 * @boolean tajin
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
		String picorFinal = null;
		switch(this.nivelPicor) {
		case 1, 2, 3:
			picorFinal = "...ni pica. Es pa beibes";
			break;
		case 4, 5, 6:
			picorFinal = "...ya va agarrando color";
			break;
		case 7, 8, 9:
			picorFinal = "...pica rico";
			break;
		case 10:
			picorFinal = "...es lo rico del picor!!!";
			break;
		}
		return "La gomita " + super.getNombre() + " pica: "  + picorFinal  ; 
	}
	
	//Overriden method
	//Se realiza un método heredado, pero se realiza distinto...
	/*
	 * La notación override (@Override) indica que estamos sobreescribiendo
	 * un comportamiento de un método de la clase base.

	 * Escribiendo override forzamos al compilador a comprobar
	 * que se está sobreescribiendo correctamente el método 
	 * */
	
	@Override
	public String eslogan() {
		return "La gomita " + super.getNombre() + " tan picante como tú. " + this.pica();
	}

	@Override
	public String toString() {
		return super.toString() + " GomitaEnchilada [nivelPicor=" + nivelPicor + ", tajin=" + tajin + "]";
	}
	
	
	
	
}
