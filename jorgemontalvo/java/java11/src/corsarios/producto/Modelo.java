package corsarios.producto;
/**
 * Clases abstractas
 * Algo abstracto no se puede materializar
 * 
 * Si una clase tiene un método abstracto, la clase se debe
 * declarar también como abstracta.
 * 
 * Una clase abstracta no se puede instanciar.
 * 
 * Los métodos abstractos no tiene cuerpo, terminan con punto y coma.
 * Se parece a la sobreescritura de métodos, sin embargo, debido a que el método
 * superior no ha definido el comportamiento , 
 * se dice que la subclase incrementa el método.
 * 
 * En otras palabras, las subclases serán las responsables de
 * implementar la funcionalidad del método
 * @author jorge
 * El modificador final en un atributo lo hace tipo contante
 * El modificador final en un metodo evita que este sea sobreescrito
 * El modifical final en un clase, evita que pueda ser heredado.
 *
 */

public abstract class Modelo {
	protected int id;
	protected int capacidad;
	protected static int nModelos;
	protected double costo;
	protected final String EMPRESA = "Corsarios";
	
	private Modelo() {
		nModelos++;
	}
	
	public Modelo(int id, int capacidad, double costo) {
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
	public int getCapacidad() {
		return capacidad;
	}
	public void setCapacidad(int capacidad) {
		this.capacidad = capacidad;
	}

	public double getCosto() {
		double valor = Math.PI;
		return costo;
	}

	public void setCosto(double costo) {
		this.costo = costo;
	}
	
	
}
