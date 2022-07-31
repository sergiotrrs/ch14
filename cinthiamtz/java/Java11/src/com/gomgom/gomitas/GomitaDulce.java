package com.gomgom.gomitas;

public class GomitaDulce extends GomitaBase {
	private int nivelAzucar;
	private boolean chispas;
	private boolean arandano;
	//constructor clic derecho sourse constructo using fiel
	public GomitaDulce(String nombre, int color, String sabor, double precio, int nivelAzucar, boolean chispas,
			boolean arandano) {
		super(nombre, color, sabor, precio);
		this.nivelAzucar = nivelAzucar;
		this.chispas = chispas;
		this.arandano = arandano;
	}
	
	public int getNivelAzucar() {
		return nivelAzucar;
	}
	public void setNivelAzucar(int nivelAzucar) {
		this.nivelAzucar = nivelAzucar;
	}
	public boolean isChispas() {
		return chispas;
	}
	public void setChispas(boolean chispas) {
		this.chispas = chispas;
	}
	public boolean isArandano() {
		return arandano;
	}
	public void setArandano(boolean arandano) {
		this.arandano = arandano;
	}
	
	public String dulzor() {
		String txt;
		switch(this.nivelAzucar) {
		case 1:
			txt= "Poco dulce";
			break;
		case 2:
			txt= "Visita a tu medico";
			break;
		case 3:
			txt= "Para no dormir ";
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
		return "La gomita "+super.getNombre()+" tan dulce como las mentiras que te creias,"+ this.dulzor();
	}

	
	
	
}
