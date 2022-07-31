package com.gogmgom.gomitas;

public class GomitaDulce extends GomitaBase{

	private int nivelazucar;
	private boolean chispas;
	private boolean arandano;
	
	
	public GomitaDulce(String nombre, int color, String sabor, double precio, int nivelazucar, boolean chispas,
			boolean arandano) {
		super(nombre, color, sabor, precio);
		this.nivelazucar = nivelazucar;
		this.chispas = chispas;
		this.arandano = arandano;
	}
	public int getNivelazucar() {
		return nivelazucar;
	}
	public void setNivelazucar(int nivelazucar) {
		this.nivelazucar = nivelazucar;
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
		switch (this.nivelazucar) {
		case 1:
			txt = " poco dulce.";
			break;
		case 2:
			txt = " visita a tu médico.";
			break;
		case 3:
			txt = " para no dormir. ";
			break;
		default: txt= "no se tiene registro del picor";	
		}
		return "La gomita "+super.getNombre()+txt;
	}
	
}
