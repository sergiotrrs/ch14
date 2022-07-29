import java.util.HashMap;

import com.entrenador.Trainer;
import com.pokemon.Pocketmonsters;

public class PocketmonstersTest {

	public static void main(String[] args) {
		Pocketmonsters pikachu = new Pocketmonsters("Pikachu", "Electrico", 40);
		System.out.println(pikachu.data());
		
		Trainer ash = new Trainer("Ash", 10, "No tiene",pikachu);
		
		System.out.println(ash.datos());
		
		Trainer lucia = new Trainer("Lucia", 27, "Planta", new Pocketmonsters("Chikorita", "Planta", 90));
		
		System.out.println(lucia.datos());
		
		HashMap<Integer, Trainer> gimnasio = new  HashMap<Integer, Trainer>();
		
		gimnasio.put(1, lucia);
		gimnasio.put(8, new Trainer("Cori", 28, "Psíquico", new Pocketmonsters("Mew", "Psiquico", 40)));
		gimnasio.put(3, new Trainer("David", 21, "chivas", new Pocketmonsters("Pikachu", "Electrico", 40)));
		
		for (Trainer entrenador : gimnasio.values()) {
			System.out.println("Participantes del gimnsio "+entrenador.datos());
		}
	}
}
