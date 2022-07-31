package org.generation.gelatinas;

public class GelatinasPremium {
	
	private int pesoGramos;
	private String sabor;
	private String contenedor;
	private boolean carisimaDeParis;
	private String color;
	
	/**
	 * Constructor de Gelatinas Premium. Grenetina 100%
	 * Al construir, se pasa peso, sabor, contenedor (bolsita o plástico) y si está cara o no
	 * @int ¿Cuántos gramos?
	 * @String ¿De qué sabor?
	 * @String ¿Cómo se empaquetó?
	 * @boolean ¿Está cara?
	 */
	
	public GelatinasPremium(int peso, String sabor, String contenedor, boolean cariniosa) {
		this.pesoGramos = peso;
		this.sabor = sabor;
		this.contenedor = contenedor;
		this.carisimaDeParis = cariniosa;
		
		String yes = "¡Una gelatina de **" + this.sabor + "** importada para la gente de Polanco!";
		String no = "Gelatina premium de " + this.sabor + " disponible pa la Cumbia La Vanda";
		System.out.println(this.carisimaDeParis ? yes : no);
	}
	
	public GelatinasPremium(String color, String sabor, boolean carita) {
		this.color = color;
		this.sabor = sabor;
		this.carisimaDeParis = carita;
		
		System.out.println("Gelatina premium con estas caract: color " + this.color + " y sabor " + this.sabor);

	}

	public int getPesoGramos() {
		return pesoGramos;
	}

	public void setPesoGramos(int pesoGramos) {
		this.pesoGramos = pesoGramos;
	}

	public String getSabor() {
		return sabor;
	}

	public void setSabor(String sabor) {
		this.sabor = sabor;
	}

	public String getContenedor() {
		return contenedor;
	}

	public void setContenedor(String contenedor) {
		this.contenedor = contenedor;
	}

	public String isCarisimaDeParis() {
		return carisimaDeParis ? 
				"Puro producto premium de Altozano" 
				:
				"Producto de calidad, disponible para tod_S";
	}

	public void setCarisimaDeParis(boolean carisimaDeParis) {
		this.carisimaDeParis = carisimaDeParis;
	}
	
	public String greneDatos() {
		return "GelaPaps con estas caract: color " + this.color + " y sabor " + this.sabor + "";
	}

}
