package java10Actividad.game;

public class Game {
	private String genero; 
	private int edad;
	private String estudio;
	private Consola consola;
	private String nombre;
	

	/**
	 * 
	 * @param nombre
	 * @param genero
	 * @param edad
	 * @param estudio
	 * @param consola
	 */
	public Game(String nombre,String genero, int edad, String estudio,Consola consola) {
		this.genero = genero;
		this.edad = edad;
		this.estudio = estudio;
		this.consola = consola;
		this.nombre = nombre;
	}
	
	public String getGenero() {
		return genero;
	}
	public void setGenero(String genero) {
		this.genero = genero;
	}
	public int getEdad() {
		return edad;
	}
	public void setEdad(int edad) {
		this.edad = edad;
	}
	public String getEstudio() {
		return estudio;
	}
	public void setEstudio(String estudio) {
		this.estudio = estudio;
	}
	
	public String datos() {
		return this.nombre+" es un juego de " + this.genero+ " producido por "+this.estudio+
				" para la consola "+this.consola.getNombre()+" ( "+this.consola.getCompania()+
				" ). "+"Se puede jugar a partir de los "+this.edad+" años de edad.";
	}
	

}
