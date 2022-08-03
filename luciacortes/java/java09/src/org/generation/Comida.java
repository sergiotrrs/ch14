package org.generation;

	public class Comida {
		private String utensilios;
		private String ingredientes;
		private int medidas;
		private int tiempo;
		private String nombre;
		
		static int receta;
		
		Comida(){
			System.out.println("Inicio del constructor vacío");
		}
		
		Comida (String utensilios, String ingredientes, int medidas, int tiempo){
		 this.utensilios = utensilios;
		 this.ingredientes = ingredientes;
		 this.medidas = medidas;
		 this.tiempo = tiempo;
		 receta++;
		 
		}
		Comida (String utensilios, String ingredientes, int medidas, String nombre){
			 this.utensilios = utensilios;
			 this.ingredientes = ingredientes;
			 this.medidas = medidas;
			 this.nombre = nombre;
			 receta++;
		}
		String receta() {
		return this.ingredientes+ "para hacer un" + this.nombre+ " necesitas: "+ this.ingredientes+ this.medidas+"tazas";
		}
		
		String getUtensilios() {
			return this.utensilios;
		}
		String getIngredientes() {
			return this.ingredientes;
		}
		
		int getMedidas() {
			return this.medidas;
		}
		int getTiempo() {
			return this.tiempo;
		}

		
		
}
