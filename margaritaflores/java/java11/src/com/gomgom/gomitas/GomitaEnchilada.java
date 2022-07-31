package com.gomgom.gomitas;
//Herencia
public class GomitaEnchilada extends GomitaBase {
		private int nivelPicor;
		private boolean tajin;
		
		
		
		public GomitaEnchilada(String nombre, int color, String sabor, double precio, int nivelPicor, boolean tajin) {
			super(nombre, color, sabor, precio);
			this.setNivelPicor(nivelPicor);
			this.setTajin(tajin);
		}



		public boolean isTajin() {
			return tajin;
		}



		public void setTajin(boolean tajin) {
			this.tajin = tajin;
		}



		public int getNivelPicor() {
			return nivelPicor;
		}



		public void setNivelPicor(int nivelPicor) {
			this.nivelPicor = nivelPicor;
		}
		
		public String pica() {
			String txt;
			switch (this.nivelPicor) {
			case 1:
				txt = "Ni pica";
				break;
			case 2: 
				txt = "Pica más o menos";
				break;
			case 3:
				txt = " pica rico, mm ";
				break;
				default: txt = "No se tiene registrado el picor";
			}
			return "La gomita pica " + super.getNombre() +txt;
		}
		
		/*
		 * La notación @Override indica que estamos sobreescribiendo
		 * el comportamiento de un método de la clase base.
		 * Si no se indica la clase base de la cual se extiende
		 * la clase base será la clase Object. 
		 * Escribiendo override forzamos al compilador a comprobar
		 * que se está sobreescribiendo correctamente el método
		 * */
		
		@Override
		public String eslogan() {
			return "La gomita " + super.getNombre() + "tan agrio como tu ex " + this.pica();
		}
	
}
