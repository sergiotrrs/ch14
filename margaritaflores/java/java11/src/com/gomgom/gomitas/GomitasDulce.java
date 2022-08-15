package com.gomgom.gomitas;

public class GomitasDulce extends GomitaBase{
	private int nivelAzucar;
	private boolean chispas;
	private boolean arandanos;
	

	public GomitasDulce(String nombre, int color, String sabor, double precio, int nivelAzucar, boolean chispas, boolean arandanos) {
		super(nombre, color, sabor, precio);
		this.nivelAzucar = nivelAzucar ;
		this.chispas = chispas;
		this.arandanos = arandanos;
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

	public boolean isArandanos() {
		return arandanos;
	}

	public void setArandanos(boolean arandanos) {
		this.arandanos = arandanos;
	}
	
	public String pica() {
		String txt;
		switch (this.nivelAzucar) {
		case 1:
			txt = "Tiene poco dulce.";
			break;
		case 2: 
			txt = "Visita a tu médico";
			break;
		case 3:
			txt = " Es para ti ";
			break;
			default: txt = "No se tiene registrado el nivel de dulce";
		}
		return "La gomita pica " + super.getNombre() +txt;
	}
	
	
	@Override
	public String eslogan() {
		return "La gomita "+super.getNombre()+" tan dulce como las mentiras que te creias,"+ this.getNivelAzucar();
	}
	
	
	
	
}
