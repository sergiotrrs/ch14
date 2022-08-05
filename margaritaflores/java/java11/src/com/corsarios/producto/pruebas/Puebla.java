package com.corsarios.producto.pruebas;

import java.util.ArrayList;

import com.corsarios.producto.ModBolsillo;
import com.corsarios.producto.ModGarrafa;
import com.corsarios.producto.Modelo;
import com.corsarios.producto.ModeloRotoplas;

public class Puebla {

	public static void main(String[] args) {
		ModBolsillo chiquitin = new ModBolsillo(1256,5, 0x5381,4.5);
		ModGarrafa grandecin = new ModGarrafa(2558,2000, 15.23,13);	
		Modelo rotoplas = new ModeloRotoplas(2570, 2000, 50.9, 20, false);
		
		ArrayList <Modelo> inventario = new ArrayList<Modelo>();
		inventario.add(chiquitin);
		inventario.add(grandecin);
		inventario.add(rotoplas);
	
		
		inventario.forEach(producto ->impimirID(producto));
		
		//Para usar un método dentro de un método estático(como lo es main),
		//El método tambiés debe ser estático
		
		
	}

	public static void impimirID(Modelo producto) {
		System.out.println("El costo del producto es " + producto.agregarCarrito());
	}
}

