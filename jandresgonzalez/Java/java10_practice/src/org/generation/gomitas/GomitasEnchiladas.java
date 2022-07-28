package org.generation.gomitas;

public class GomitasEnchiladas {
	
	private boolean chiclosa;
	private String forma;
	private boolean salsaChamoy;
	private String salsaExtra;
	private String presentacion;
	private String sabor;
	private String color;
	
	
	/**
	 * Constructor de gomitas enchiladas
	 * @boolean ¿Es chiclosa?
	 * @String ¿En qué forma las gomitas?
	 * @boolean ¿Traen chamoy?
	 * @String ¿Trae salsa extra?
	 * @String ¿Cómo se empaquetó?
	 */
	
	public GomitasEnchiladas(
			boolean chicloso,
			String forma,
			boolean salsaChamoy,
			String salsaExtra,
			String presentacion
			) {
		this.chiclosa = chicloso;
		this.forma = forma;
		this.salsaChamoy = salsaChamoy;
		this.salsaExtra = salsaExtra;
		this.presentacion = presentacion;
		
		System.out.println("¡¡Gomitas en forma de " + this.forma + " con salsa " + this.salsaExtra + "!!" );
	
		
	}
	
	public GomitasEnchiladas(String color, String sabor, boolean chamoy) {
		this.color = color;
		this.sabor = sabor;
		this.salsaChamoy = chamoy;
		
		System.out.println("GomiGomGom tampiquenia con estas caract: color " + this.color + " y sabor " + this.sabor);

	}
	
	public String isChiclosa() {
		return this.chiclosa ? 
				"Ah cadai está chiclosa la gomita" : "No está chiclosa, puedo hablar fácil";
	}
	
	public void beChiclosa(boolean chicloso) {
		this.chiclosa = chicloso; 
	}
	
	public String getForma() {
		return this.forma;
	}
	
	public void setForma(String forma) {
		this.forma = forma;
	}
	
	public String hasSalsaChamoy() {
		return this.salsaChamoy ? "Trae salsa acidita chamoyadita" 
				: "No trae salsa chamoy, pero sí pika pikachu";
	}
	
	public void setSalsaChamoy(boolean chamoy) {
		this.salsaChamoy = chamoy;
	}
	
	public String getSalsaExtra() {
		return "Las gomitas traen salsa de la " + this.salsaExtra;
	}
	
	public void setSalsaExtra(String salsita) {
		this.salsaExtra = salsita;
	}
	
	public String getPresentacion() {
		return this.presentacion;
	}
	
	public void setPresentacion(String presenta) {
		this.presentacion = presenta;
	}
	
	public String greneDatos() {
		return "Gomichile con estas caract: color " + this.color + " y sabor " + this.sabor + "";
	}
	
	public String getAllData() {
		String chamoy = this.salsaChamoy ? "\n Con chamoy ¡pika! pikachu" : "\n Sin chamoysito sad";
		return "Características de la gomita: \n Color: " + this.color + " \n Forma: " + this.forma + " \n En: " + this.presentacion+ " \n Sabor: " +this.sabor+ "\n Con salsa: " +this.salsaExtra+ "" + chamoy;
	}
	
	
}
