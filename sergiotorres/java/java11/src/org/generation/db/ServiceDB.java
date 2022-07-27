package org.generation.db;

public class ServiceDB {

	public static void main(String[] args) {
		GenericDb conexion = new ConexionMySQL("localhost", 3039);
		
		System.out.println(conexion.insertar(528));
		System.out.println(conexion.insertar(10));
		System.out.println(conexion.insertar(100));
		System.out.println(conexion.actualizar());
		System.out.println(conexion.eliminar());
		
		

	}

}
