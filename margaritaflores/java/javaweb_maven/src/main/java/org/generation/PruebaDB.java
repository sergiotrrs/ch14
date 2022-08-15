package org.generation;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class PruebaDB {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String url = "jdbc:mysql://localhost:3306/colonial?useSSL=false&useTimezone=true&serverTimezone=UTC&allowPublicKeyRetrieval=true";
		////Es la conexión
		
		 try {
		Connection conexion = DriverManager.getConnection(url, "root", "generation");
		Statement instruccion = conexion.createStatement();
		String query = "CALL dorime";
//		String query = "SELECT * FROM paleta WHERE nombre LIKE '%ti%';";
		ResultSet resultado = instruccion.executeQuery(query);
		//Interaración 
		
		while(resultado.next()) {
//			System.out.println("nombre: " + resultado.getInt(1));
//			System.out.println("\t nombre: " + resultado.getString(2));
//			System.out.println("nombre: " + resultado.getInt("idpaleta"));
//			System.out.println("\t nombre: " + resultado.getString("nombre"));
			System.out.print("\t nombre: " + resultado.getString("nombre"));
			System.out.print("\t sabor: " + resultado.getString("sabor"));
			System.out.println("\t precio: $ " + resultado.getDouble("precio")+ " MXN ");
			
			
			
			
			
		}
		resultado.close();
		instruccion.close();
		conexion.close();
		
		
		
		 } catch(SQLException e) {
			 System.out.println(e);
		 }
		
		
	}

}
