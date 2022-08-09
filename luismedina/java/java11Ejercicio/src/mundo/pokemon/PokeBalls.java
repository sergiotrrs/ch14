package mundo.pokemon;

public class PokeBalls implements Trainer {
private String tipo;
	
	
	/**
 * @param atrapo
	 * @param tipo 
 */
//public PokeBalls(boolean atrapo, String tipo) {
//	super();
//	this.atrapo = atrapo;
//	this.tipo=tipo;
//}
	@Override
	public String atraparPokemones(int nPokemones, boolean atrapo) {
		if (atrapo) {
			return "Has atrapado "+nPokemones+" Pokemones";
		} else {
			return "No atrapaste nada";
		}
		
	}
	@Override
	public String batallas(int numBatallas, boolean gano) {
		if (gano) {
			return "Has ganado "+numBatallas+" batallas";
		} else {
			return "Has perdido esta batalla, sigue intentando";
		}
		
	}
	@Override
	public String pokebolas(int comprar, boolean compro) {
		if (compro) {
			return "Has comprado "+comprar+ " pokebolas";			
		} else {
			return "Te fuiste sin comprar";
		}
	}

	/**
	 * @return the tipo
	 */
//	public String tipo(String tipo) {
//		
//		String txt;
//		switch (this.tipo.toLowerCase()) {
//		case "masterball":
//			txt = "tiene ratio de 255.";
//			break;
//		case "superball":
//			txt = "tiene ratio de 1.5";
//			break;
//		case "ultraball":
//			txt = "tiene ratio de 2.";
//			break;
//		case "normal":
//			txt = "tiene ratio de 1";
//			break;
//
//		default:
//			txt = "No tenemos esa pokebola.";
//			break;
//		}
//		return "la pokebola seleccionada: " + txt;
//
//	}
	
}




