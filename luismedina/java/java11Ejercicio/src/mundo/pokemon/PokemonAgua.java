package mundo.pokemon;

public class PokemonAgua extends Pokemon {

	public int movimientos;

	public PokemonAgua(String nombre, int tamaño, String evolucion, int movimientos) {
		super(nombre, tamaño, evolucion);
		this.movimientos = movimientos;
		// TODO Auto-generated constructor stub
	}

	public int getMovimientos() {
		return movimientos;
	}

	public void setMovimientos(int movimientos) {
		this.movimientos = movimientos;
	}
	
	public String nMovimientos() {
		String txt;
		switch (this.movimientos) {
		case 1:
			txt="Pistola Agua";
			break;
		case 2:
			txt="Hiperchorro";
			break;
		case 3:
			txt="Bolas de agua";
			break;
		case 4:
			txt="chisgetes";
			break;

		default: txt="No tenemos registro de ese movimiento";
			break;
		}
		return "El movimiento que aplicaste fue: "+txt+" del pokemon "+super.getNombre();
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
	
	
	

}
