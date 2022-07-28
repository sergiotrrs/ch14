package com.gomgom.gomitas;

public class GomitaDulce extends GomitaBase {
	int nivelAzucar;
	boolean chispas;
	boolean arandano;
	
	public GomitaDulce(String nombre, String sabor, int color, double precio, int nivelAzucar, boolean chispas,
			boolean arandano) {
		super(nombre, sabor, color, precio); //Llama el constructor de la clase superior
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
		switch (this.nivelAzucar) {
		case 1: txt =  " tiene poco dulzor"; break;
		case 2: txt =  " sí está dulce"; break;
		case 3: txt =  " es para no dormir"; break;
		case 4: txt =  " es para visitar a tu médico"; break;
		
					
		default: txt = "no se tiene registro del dulzor";
		}
		return "La gomita "+ super.getNombre() + txt;
	}
	
	@Override //Verifica si el nombre del método en efecto se está sobrescribiendo en la clase base
	public String eslogan() { //I.e., verifica que el nombre esté bienescrito
		return "La gomita " + super.getNombre() + "tan dulce como las mentiras que te creías. " + this.dulzor();
	}
	
	

}
