package mundo.pokemon;

public abstract class Pokemon extends PokeBalls {
private String nombre;
private int tamaño;
private String evolucion;
private static int cantidad;

private Pokemon() {
	cantidad++;
}
/**
 * @param nombre
 * @param tipo
 * @param tamaño
 * @param evolucion
 */
public Pokemon(String nombre, int tamaño, String evolucion) {
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
public String getEvolucion() {
	return evolucion;
}
public void setEvolucion(String evolucion) {
	this.evolucion = evolucion;
}

public static int getCantidad() {
	return cantidad;
}

public abstract int vida();
public abstract int poder();



}
