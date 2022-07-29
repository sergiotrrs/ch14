package mundo.pokemon;

public abstract class Pokemon extends PokeBalls{
	private String nombre;
	private int size;
	private String evolucion;
	
	/**
	 * @param nombre
	 * @param tipo
	 * @param size
	 * @param evolucion
	 */
	public Pokemon(String nombre, int size, String evolucion) {
		this.nombre = nombre;
		this.size = size;
		this.evolucion = evolucion;
	}
	
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public String getEvolucion() {
		return evolucion;
	}
	public void setEvolucion(String evolucion) {
		this.evolucion = evolucion;
	}

	public abstract int vida();
	public abstract int poder();
	
	
}
