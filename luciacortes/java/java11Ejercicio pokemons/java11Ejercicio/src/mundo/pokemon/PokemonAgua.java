package mundo.pokemon;

public class PokemonAgua extends Pokemon {

	private int movimientosA;

	public PokemonAgua(String nombre, int tamaño, String evolucion, int movimientos) {
		super(nombre, tamaño, evolucion);
		this.movimientosA = movimientos;
		// TODO Auto-generated constructor stub
	}

	public int getMovimientosA() {
		return movimientosA;
	}

	public void setMovimientosA(int movimientos) {
		this.movimientosA = movimientos;
	}

	public String nMovimientos() {
		String txt;
		switch (this.movimientosA) {
		case 1:
			txt = "Pistola Agua.";
			break;
		case 2:
			txt = "Hiperchorro.";
			break;
		case 3:
			txt = "Bolas de agua.";
			break;
		case 4:
			txt = "chisgetes.";
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
