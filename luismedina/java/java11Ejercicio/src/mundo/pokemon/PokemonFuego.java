package mundo.pokemon;

public class PokemonFuego extends Pokemon{
	private int movimientosF;


	

	/**
	 * @param nombre
	 * @param tamaño
	 * @param evolucion
	 * @param movimientosF
	 */
	public PokemonFuego(String nombre, int tamaño, String evolucion, int movimientosF) {
		super(nombre, tamaño, evolucion);
		this.movimientosF = movimientosF;
	}

	public int getMovimientosF() {
		return movimientosF;
	}

	public void setMovimientosF(int movimientosF) {
		this.movimientosF = movimientosF;
	}
	
	public String nMovimientos() {
		String txt;
		switch (this.movimientosF) {
		case 1:
			txt = "Ascuas.";
			break;
		case 2:
			txt = "Lanzallamas.";
			break;
		case 3:
			txt = "Bolas de fuego.";
			break;
		case 4:
			txt = "Agua caliente.";
			break;

		default:
			txt = "No tenemos registro de ese movimiento.";
			break;
		}
		return "el movimiento que aplicaste fue: " + txt;
	}

	@Override
	public int vida() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int poder() {
		// TODO Auto-generated method stub
		return 0;
	}
	
	public String datos() {
		return "El Pokemon " + super.getNombre() + " mide " + super.getTamaño() + " cm, evoluciona en "
				+ super.getEvolucion() + " y " + nMovimientos();
	}
	

}
