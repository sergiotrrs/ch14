package org.generation.gelatinas;

public class GelatinasExpress {
	
	private int pesoGramos;
	private String sabor;
	private String contenedor;
	private boolean riquita;
	private String color;
	
	/**
	 * Constructor de gelatinas expres. Grenetina y mezclados de no tan buena calidá
	 * Al construir, se pasa peso, sabor, contenedor (bolsita o plástico) y sabor
	 * @int ¿Cuántos gramos?
	 * @String ¿De qué sabor?
	 * @String ¿Cómo se empaquetó?
	 * @boolean ¿Está riquirikona?
	 */
	
	public GelatinasExpress(int peso, String sabor, String contenedor, boolean rikirikon) {
		this.pesoGramos = peso;
		this.sabor = sabor;
		this.contenedor = contenedor;
		this.riquita = rikirikon;
		
		String yes = "Salió una gelatina rika, de " + this.sabor;
		String no = "Ay... no está rika esta gelatina de --" + this.sabor + "--.";
		System.out.println(this.riquita ? yes : no);
	}
	
	public GelatinasExpress(String color, String sabor, boolean riquita) {
		this.color = color;
		this.sabor = sabor;
		this.riquita = riquita;
		
		System.out.println("Gelatina express con estas caract: color " + this.color + " y sabor " + this.sabor);
	}

	public int getPesogramos() {
		return this.pesoGramos;
	}
	
	public void setPesogramos(int pesoGramos) {
		this.pesoGramos = pesoGramos;
	}
	
	public String getSabor() {
		return this.sabor;
	}
	
	public void setSabor(String sabor) {
		this.sabor = sabor;
	}
	
	public String getContenedor() {
		return this.contenedor;
	}
	
	public void setContenedor(String contenedor) {
		this.contenedor = contenedor;
	}
	
	public String isRiquita() {
		return this.riquita ? 
				"Uff! Está bieeen rika la gela tina" : "Chale. Ni está tan rika la gela";
	}
	
	public void beRiquita(boolean rico) {
		this.riquita = rico;
	}
	
	public String greneDatos() {
		return "GelaExpress con estas caract: color " + this.color + " y sabor " + this.sabor + "";
	}

}
