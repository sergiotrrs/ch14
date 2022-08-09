package mundo.pokemon;

public class PokemonAgua extends Pokemon{
	private int movimiento;

	public PokemonAgua(String nombre, int tamaño, int evolucion, String movimiento) {
		super(nombre, tamaño, evolucion);
		this.movimiento = movimiento;
	}

	public int getMovimiento() {
		return movimiento;
	}

	public void setMovimiento(int movimiento) {
		this.movimiento = movimiento;
	}
	
	
	@Override
	public int poder() {
		String txt;
		switch (this.movimiento) {
		case 1:
			txt="Hiperchorro";
			break;
		case 2:
			txt="Poder 2";
			break;
		default:	 txt
			
		
		}
		return txt;
		
	}
	
	
	
	
}
