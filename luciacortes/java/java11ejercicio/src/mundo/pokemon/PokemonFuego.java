package mundo.pokemon;

public class PokemonFuego extends Pokemon{

	private int movimientosF;


	/**
	 * @param nombre
	 * @param size
	 * @param evolucion
	 * @param movimientosF
	 */
	public PokemonFuego(String nombre, int size, String evolucion, int movimientosF) {
		super(nombre, size, evolucion);
		this.movimientosF = movimientosF;
	}

	public int getMovimientosF() {
		return movimientosF;
	}

	public void setMovimientosF(int movimientosF) {
		this.movimientosF = movimientosF;
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
	public String nMovimiento() {
		String txt;
		switch (this.movimientosF) {
		case 1:
			txt = "Ascuas";
			break;
		case 2:
			txt = "Lanzallamas";
			break;
		case 3:
			txt = "Bolas de fuego";
			break;
		case 4:
			txt = "Agua Caliente";
			break;
		default:
			txt = "Ese movimiento no existe";
		}
		return "el movimiento que aplicaste fue " + txt;
	}

	public String datos() {
		return "El pokemon " + super.getNombre() + " mide " + super.getSize() + " cm. Evoluciona en "
				+ super.getEvolucion() +" y "+ nMovimiento();
	}
}
