package mundo.pokemon;

public class PokeBalls implements Trainer{
	
	private boolean atrapo;
	private String tipo;

	
	public boolean isAtrapo() {
		return atrapo;
	}

	public void setAtrapo(boolean atrapo) {
		this.atrapo = atrapo;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public String tipoPokeBall() {
		
		switch (this.tipo) {
		case "Pokeball":
			txt = "Pistola agua";
			break;
		case :
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
	public String atraparPokemones(int nPokemones) {
		
		return "Haz atrapado "+ nPokemones++ +" pokemones. ";
		
	}

	@Override
	public String batallas(int numBatallas) {
		// TODO Auto-generated method stub
		return "Haz tenido "+numBatallas++ +"batallas";
	}

	@Override
	public String Pokebolas(int comprar) {
		// TODO Auto-generated method stub
		return "Haz comprado "+comprar+" Pokebolas" ;
	}

	@Override
	public boolean atrapar() {
		boolean atrapado= true;
		if (atrapado) {
			return atrapado;
		}else {
			return false;
	}
		

	}
}
