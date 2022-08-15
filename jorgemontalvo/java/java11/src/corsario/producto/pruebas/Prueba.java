package corsario.producto.pruebas;

import java.util.ArrayList;

import corsarios.producto.ModBolsillo;
import corsarios.producto.ModGarrafa;
import corsarios.producto.ModRotoplas;
import corsarios.producto.Modelo;

public class Prueba {

	public static void main(String[] args) {
		ModBolsillo chiquitin = new ModBolsillo(1256, 5, 0x12A531, 4.5);
		ModGarrafa grandecin = new ModGarrafa(2344, 2000, 15.23, 13);
//		Modelo generico = new Modelo (1,1,10.5); No se puede instanciar
		Modelo rotoplas = new ModRotoplas(2380, 2000, 50.90, 11, false);
		
		ArrayList<Modelo> inventario = new ArrayList<Modelo>();
		inventario.add(chiquitin);
		inventario.add(grandecin);
		inventario.add(rotoplas);
		
		
		inventario.forEach(producto -> imprimirId(producto));

	}
	
	/**
	 * Para usar un método dentro de un método estático (como lo es main)
	 * el método tambien debe ser estatico
	 * @param producto
	 */
	public static void imprimirId(Modelo producto) {
		System.out.println("EL ID DEL PRODUCTO ES: " + producto.getId() );
	}

}
