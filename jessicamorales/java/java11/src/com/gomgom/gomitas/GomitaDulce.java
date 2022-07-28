package com.gomgom.gomitas;

public class GomitaDulce extends GomitaBase{
	private int nivelAzucar;
	private boolean chispas;
	private boolean arandano;
	
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

	public boolean isChispas() {
		return chispas;
	}

	public boolean isArandano() {
		return arandano;
	}

	public void setNivelAzucar(int nivelAzucar) {
		this.nivelAzucar = nivelAzucar;
	}

	public void setChispas(boolean chispas) {
		this.chispas = chispas;
	}

	public void setArandano(boolean arandano) {
		this.arandano = arandano;
	}
	
	public String dulzor() {
		String txt;
		switch (this.nivelAzucar) {
		case 1:	
			txt = " dulce";
			break;
		case 2:	
			txt = " tienes que visitar a un médico";
			break;
		case 3:	
			txt = " es para no dormir";
			break;
		default: txt=" no se tiene registro del dulzor";
		}
		return "La gomita " + super.getNombre() + txt;
	}
	
	@Override
	public String eslogan() {
		return "La gomita "+super.getNombre()+" tan dulce como las mentiras que te creias,"+ this.dulzor();
	}

}
