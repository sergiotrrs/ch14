package com.gomgom.gomitas;

public class GomitaBase {
	private String nombre;
	private int color;
	private String sabor;
	private double precio;
	public static int nGomitas;
	
	
	public GomitaBase () {
		nGomitas++;
		
	}
	
	
	public GomitaBase(int color, String sabor, String nombre, double precio) {
		//super();//Super invoca al método constructor de la clase superior
		this(nombre);//invoca a los constructores de mi misma clase, este invoca el constructor con el atributo nombre
		this.color = color;
		this.sabor = sabor;
		//this.nombre = nombre;
		this.precio = precio;
	}
	
	public GomitaBase (String nombre) {
		this();
		this.nombre = nombre;
	}
	
	public int getColor() {
		return color;
	}
	public void setColor(int color) {
		this.color = color;
	}
	public String getSabor() {
		return sabor;
	}
	public void setSabor(String sabor) {
		this.sabor = sabor;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public double getPrecio() {
		return precio;
	}
	public void setPrecio(double precio) {
		this.precio = precio;
	}
	
	public String eslogan() {
		return "La gomita "+this.nombre+" es la mejor" ;
	}
	@Override
	public String toString() {
		return "GomitaBase [color=" + color + ", sabor=" + sabor + ", nombre=" + nombre + ", precio=" + precio + "]";
	}


	public static int getnGomitas() {
		return nGomitas;
	}


	public static void setnGomitas(int nGomitas) {
		GomitaBase.nGomitas = nGomitas;
	}
	
//	@Override
//	public String toString(){
//		return "Mundo gomitas "+this.nombre+ super.toString();
//	}	
//	
	
	
	

}
