package org.generation.db;

public class ServiceDB {

	public static void main(String[] args) {
		boolean developing = false;
		GebericDb conexion;
		
		if (developing) {
			conexion = new ConexionMySQL("localhost", 3039);
		}
		else {
			conexion = new ConexionOracle("10.0.07.127", 3036, "Permitido");
		}

		
		System.out.println(conexion.insertar(528));
		System.out.println(conexion.insertar(10));
		System.out.println(conexion.insertar(100));
		System.out.println(conexion.actualizar());
		System.out.println(conexion.eliminar());

		
		/**
		 * Actividad:
		 * 
		 * Del ejercicio anterior de clases, imlementar
		 * una interfaz y una clase abstracta, implementar y heredarla.
		 */
	}

}
