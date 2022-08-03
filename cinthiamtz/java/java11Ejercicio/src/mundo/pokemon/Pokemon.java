package mundo.pokemon;

public abstract class Pokemon {
	private String nombre;
	
	private int tamaño;
	private int evolucion;
	
	protected static int cantidad;
	
	
	private Pokemon() {
		cantidad++;
	}
	
	public abstract int vida();
	public abstract int poder();
	
	public Pokemon(String nombre, int tamaño, int evolucion) {
		this();
		this.nombre = nombre;
		this.tamaño = tamaño;
		this.evolucion = evolucion;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getTamaño() {
		return tamaño;
	}

	public void setTamaño(int tamaño) {
		this.tamaño = tamaño;
	}

	public int getEvolucion() {
		return evolucion;
	}

	public void setEvolucion(int evolucion) {
		this.evolucion = evolucion;
	}



	public static int getCantidad() {
		return cantidad;
	}



	public static void setCantidad(int cantidad) {
		Pokemon.cantidad = cantidad;
	}
	
			
	
	

	
	
	
	
}
