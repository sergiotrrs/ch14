package java10Actividad;

import java.util.HashMap;


import java10Actividad.game.Consola;
import java10Actividad.game.Game;

public class Juegos {

	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Consola xbox360 = new Consola("Xbox 360","Microsoft");
		Game halo = new Game("Halo 3", "Ciencia ficción", 17 , "Bungie", xbox360);
		System.out.println(halo.datos());

		Consola wii = new Consola("Wii","Nintendo");
		Game MarioGalaxy = new Game("Mario Galaxy", "Aventura/fantasía", 6 , "Nintendo", wii);
		System.out.println(MarioGalaxy.datos());
		
		Consola playstation = new Consola("PS4","Sony");
		Game GodOfWar = new Game("God of war", "Acción/Aventura", 17 , "Santa Monica Studios", playstation);
		System.out.println(GodOfWar.datos());
		
		Consola pc = new Consola("PC","ALL");
		Game LoL = new Game("League of Legends", "Rol/Acción", 13 , "Riot", pc);
		System.out.println(LoL.datos());
		System.out.println();
		System.out.println();
		
		
		HashMap<Integer, Game > juegos = new HashMap<Integer, Game>();
		
		juegos.put(1, LoL);
		juegos.put(2, GodOfWar);
		juegos.put(3, halo);
		juegos.put(4, MarioGalaxy);
		
		
		for(Game juego:juegos.values()) {
			System.out.println("Info game: "+juego.datos());
		}
		
		
		
		
		
		

	}

}
