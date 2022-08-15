package com.gomgom.gomitas;

public class GomitaEnchilada extends GomitaBase {
	
	private int nivelPicor;
	private boolean tajin;
	
	//El constructor agrega el super automáticamente
	//this hace referencia a los atributos del objeto que se crea 
	//super hace referencia a su clase Padre, hace referencia al constructor base
	//Si se tienen más de un contructor en la clase padre, se llama al constructor vacío y hay que llenarlo
	
	/**
	 * 
	 * @param color de la gomita
	 * @param sabor de la gomita
	 * @param nombre de la gomita
	 * @param precio de la gomita
	 * @param nivelPicor 1-3 (3 muy picante)
	 * @param tajin si o no  
	 */
	public GomitaEnchilada( String nombre, int color, String sabor, double precio, int nivelPicor, boolean tajin) {
		
		//Super siempre debe ser la primera línea del constructor hijo 
		//Super hace referencia a los atributos de la clase superior
		super(color, sabor, nombre, precio);
		this.nivelPicor = nivelPicor;
		this.tajin = tajin;
	}

	public int getNivelPicor() {
		return nivelPicor;
	}

	public void setNivelPicor(int nivelPicor) {
		this.nivelPicor = nivelPicor;
	}

	public boolean isTajin() {
		return tajin;
	}

	public void setTajin(boolean tajin) {
		this.tajin = tajin;
	}
	
	public String pica(){
		String txt;
		switch(this.nivelPicor) {
		case 1: txt = " ni pica";
		break;
		case 2: txt = " pica masomenos";
		break;
		case 3: txt = " pica rico";
		break;
		default: txt = " no se tiene registro de picor";
		break;
		}
		return "La gomita "+ super.getNombre()+txt;
	}	
	
	//Sobrescritura de métodos: 
	//Se les debe poner notación @Override
	//override indica que estamos sobrescribiendo el comportamiento de un método 
	//de la clase base. 
	//Si no se indica la clse vase de la cual se extiende
	//la clase base será la clase Object 
	//De la clase java.Object provienen todas las clases
	//Escribiendo override forzamos al compilador a comprobar que se está
	//sobreescribiendo correctamente el método.
	
	@Override 
	public String eslogan() {
		return "La gomita "+super.getNombre()+" tan agrio como tu ex "+this.pica();
	}

	@Override
	public String toString() {
		return super.toString()+" GomitaEnchilada [nivelPicor=" + nivelPicor + ", tajin=" + tajin + "]";
	}
	
	

}
