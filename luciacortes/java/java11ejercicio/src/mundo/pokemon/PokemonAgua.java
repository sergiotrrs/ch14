package mundo.pokemon;

public class PokemonAgua extends Pokemon {

	private int movimientosA;

	

	/**
	 * @param nombre
	 * @param size
	 * @param evolucion
	 * @param movimientosA
	 */
	public PokemonAgua(String nombre, int size, String evolucion, int movimientosA) {
		super(nombre, size, evolucion);
		this.movimientosA = movimientosA;
	}

	public int getMovimientosA() {
		return movimientosA;
	}

	public void setMovimientosA(int movimientosA) {
		this.movimientosA = movimientosA;
	}

	public String nMovimiento() {
		String txt;
		switch (this.movimientosA) {
		case 1:
			txt = "Pistola agua";
			break;
		case 2:
			txt = "Hiperchorro";
			break;
		case 3:
			txt = "Bolas de agua";
			break;
		case 4:
			txt = "Chisguetes";
			break;
		default:
			txt = "Ese movimiento no existe";
		}
		return "el movimiento que aplicaste fue " + txt;
	}

	@Override
	public int vida() {
		// TODO Auto-generated method stub
		return 120;
	}

	@Override
	public int poder() {
		// TODO Auto-generated method stub
		return 1;
	}

	public String datos() {
		return "El pokemon " + super.getNombre() + " mide " + super.getSize() + " cm. Evoluciona en "
				+ super.getEvolucion() +" y "+ nMovimiento();
	}

}
