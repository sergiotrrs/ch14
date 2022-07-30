package com.gomgom.gomitas;

public class GomitaEnchilada extends GomitaBase{
	private int nivelPicor;
	private boolean tajin;
	
	/**el constructor agrega las cositas que 
	*ya estaban en la clase GomitaBase 
	*se agarra siempre el constructor base, en este caso como
	*es solo 1 constructor de gomita base 
	*se jala ese 
	*GomitaEnchilada es una clase hija
	*con extend se hereda
	*/
	
	/**
	 * @param nombre
	 * @param color
	 * @param sabor
	 * @param precio
	 * @param nivelPicor
	 * @param tajin si / no
	 */
	public GomitaEnchilada(String nombre, int color, String sabor, double precio, int nivelPicor, boolean tajin) {
		super(nombre, color, sabor, precio);
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
	
	public String pica() {
		String txt;
		//es importante poner el this porque 
		//sabemos exactamente de donde sale el nivelPicor
		//que sale de esta misma clase 
		switch(this.nivelPicor) {
		case 1:
			txt = " no pica";
			break;
		case 2:
			txt = " pica mas o menos";
			break;
		case 3:
			txt = " pica rico, mmm";
			break;
			
		default: txt="No se tiene registro del picor";
		}
		
		//si tiene super ya sabemos que ese metodo
		//es de la clase padre 
		return "La gomita "+ super.getNombre()+txt;
	}
	
	@Override
	public String eslogan() {
		return "La gomita "+super.getNombre()+" tan agria como tu ex "+ this.pica();
	}

	@Override
	public String toString() {
		return "GomitaEnchilada [nivelPicor=" + nivelPicor + ", tajin=" + tajin + "]";
	}
	
	/**
	 * si queremos sobreescribir algo se puede sin el override, pero
	 * para que java asegure que es igual mi metodo aqui y en la base
	 * se usa el override
	 * La notación override indica que estamos sobreescribiendo
	 * el comportamiento de un método de la clase base
	 * si no se indica la clase base de la cual se extiende 
	 * la clase base será la clase Object 
	 * escribiendo override forzamos al compilador a comprobar
	 * que se está sobreescribiento correctamente el método
	 */
	
	
}
