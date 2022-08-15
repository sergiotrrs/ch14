package org.generation.db;

public class ServiceDB {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		boolean developing=false;
		GenericDb conexion;
		if(developing) {
			conexion = new ConexionMySQL("localHost", 3039);
		}
		else {
			conexion = new ConexionOracle("10.0.1.50", 5090,"Permitido");
		}
		
		System.out.println(conexion.insertar(528));
		System.out.println(conexion.insertar(10));
		System.out.println(conexion.insertar(100));
		System.out.println(conexion.actualizar());
		System.out.println(conexion.eliminar());
		
		
		/**
		 * Del ejercicio anterior de clases, implemetar
		 * una interfaz y una clase abtracta, implemnetar y heredarla
		 */
		
		
	}

}
