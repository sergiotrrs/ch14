package com.corsarios.producto;

public abstract class Modelo {


		/**
		 * CLASES ABSTRACTAS
		 * Algo abstracto no se puede materializar
		 * 
		 * Si una clase tiene un método abstracto, la clase se debe declarar también como abstracta
		 * 
		 * Una clase abstracta no se puede instanciar.
		 * 
		 * Los métodos abstractos no tiene cuerpo, terminan con ;
		 * Se parece a la sobreescritura de métodos, sin embargo, debido a que el método 
		 * superior no ha definido el comportamiento, se dice que la subclase implementa el método.
		 * 
		 * En otras palabras, las subclases seraán las responsables de implementar la funcionalidad del método.
		 * 
		 */
		
			protected int id;
			protected int capacidad;
			protected static int nModelos;
			protected int costo;
			protected int nombre;
			protected static final String EMPRESA="Corsarios Negros"; //Es una constante que ya no se puede modificar

			
			private Modelo() {
				nModelos++;
			}
				
			public Modelo(int id, int capacidad, int costo, String nombre) {
				this();
				this.id = id;
				this.capacidad = capacidad;
				this.costo = costo;
			}
			
			public abstract double agregarCarrito();
			public abstract boolean almacenar();	
			
			public int getId() {
				return id;
			}
			public void setId(int id) {
				this.id = id;
			}
			public void setCapacidad(int capacidad) {
				this.capacidad = capacidad;		
			}
			public int getCapacidad() {
				return this.capacidad;

		
		
	}

			public int getCosto() {
				return costo;
			}

			public void setCosto(int costo) {
				this.costo = costo;
			}

}
