package org.generation.gomitas;

public class GomitasDulces {
	private String sabor;
	private String forma;
	private boolean empalagosa;
	private boolean chiclosa;
	private String presentacion;
	private String color;
	
	/**
	 * Constructor de gomita dulce
	 * @String ¿Sabor?
	 * @String ¿Qué forma?
	 * @boolean ¿Es empalagosa?
	 * @boolean ¿Es chiclosa?
	 * @String ¿Cómo se empaquetó?
	 */
	public GomitasDulces(String sabor, String forma, boolean empalagosa, boolean chiclosa, String presentacion) {
		this.sabor = sabor;
		this.forma = forma;
		this.empalagosa = empalagosa;
		this.chiclosa = chiclosa;
		this.presentacion = presentacion;
		
		System.out.println("¡¡Gomitas en forma de " + this.forma + " sabor " + this.sabor + "!!" );
	}
	
	public GomitasDulces(String color, String sabor, boolean empalagosa) {
		this.color = color;
		this.sabor = sabor;
		this.empalagosa = empalagosa;
		
		System.out.println("Gomidulce con estas caract: color " + this.color + " y sabor " + this.sabor);

	}
	
	public String getSabor() {
		return this.sabor;
	}
	
	public void setSabor(String sabor) {
		this.sabor = sabor;
	}
	
	public String getForma() {
		return this.forma;
	}
	
	public void setForma(String forma) {
		this.forma = forma;
	}
	
	public String isEmpalagosa() {
		return this.empalagosa ? 
				"Después de un rato, empalaga" : 
				"Puedo comer esta gomita mucho tiempo sin empalago";
	}
	
	public void beEmpalagosa(boolean empalago) {
		this.empalagosa = empalago;
	}
	
	public String isChiclosa() {
		return this.chiclosa ? 
				"Ah cadai está chiclosa la gomita" : "No está chiclosa, puedo hablar fácil";
	}
	
	public void beChiclosa(boolean chicloso) {
		this.chiclosa = chicloso; 
	}
	
	public String getPresentacion() {
		return this.presentacion;
	}
	
	public void setPresentacion(String presentacion) {
		this.presentacion = presentacion;
	}
	
	public String greneDatos() {
		return "Gomidulce con estas caract: color " + this.color + " y sabor " + this.sabor + "";
	}

}
