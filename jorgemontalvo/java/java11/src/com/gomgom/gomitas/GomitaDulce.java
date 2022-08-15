package com.gomgom.gomitas;

public class GomitaDulce extends GomitaBase{
	private int nivelAzucar;
	private boolean chispas;
	private boolean fruta;
	public GomitaDulce(String nombre, int color, String sabor, double precio, int nivelAzucar, boolean chispas,
			boolean fruta) {
		super(nombre, color, sabor, precio);
		this.nivelAzucar = nivelAzucar;
		this.chispas = chispas;
		this.fruta = fruta;
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
	public boolean isFruta() {
		return fruta;
	}
	public void setFruta(boolean fruta) {
		this.fruta = fruta;
	}
	
	public String dulzor() {
		String txt;
		switch (this.nivelAzucar) {
		case 1:
			txt = " poco dulce";
			break;
		case 2:
			txt = " tienes que visitar a tu médico";
			break;
		case 3:
			txt = " para no dormir.";
			break;
			default: txt= "No se tien registro del dulzor";
		}
		return "La gomita" + super.getNombre() + txt;
	}
	
	@Override
	public String eslogan() {
		return "La gomita " + super.getNombre() + " tan dulce como el amor de mamá." + this.dulzor();
	}
//	@Override
//	public String toString() {
//		return "GomitaDulce [nivelAzucar=" + nivelAzucar + ", chispas=" + chispas + ", fruta=" + fruta + "]";
//	}

	
}
