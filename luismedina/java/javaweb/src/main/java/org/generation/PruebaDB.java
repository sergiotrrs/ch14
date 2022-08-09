package org.generation;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class PruebaDB {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/colonial?useSSL=false&useTimezone=true&serverTimezone=UTC&allowPublicKeyRetrieval=true";
		// Hacer nuestra conexion a la DB
		try {
			Connection conexion = DriverManager.getConnection(url, "root", "generation");
			Statement instruccion = conexion.createStatement();
//			String query = "SELECT * FROM paleta WHERE nombre LIKE '%ti%';";
			String query="CALL dorime";
			ResultSet resultado = instruccion.executeQuery(query);
			while(resultado.next()) {
//				System.out.print("id : "+ resultado.getInt(1));
//				System.out.println("\t nombre : "+ resultado.getString(2));
//				System.out.print("Nombre: "+resultado.getInt("idpaleta"));
				System.out.print("\t Nombre: "+resultado.getString("nombre"));
				System.out.print("\t Sabor: "+resultado.getString("sabor"));
				System.out.println("\t Precio : $"+resultado.getDouble("precio"));
				
			}
			resultado.close();
			instruccion.close();
			conexion.close();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}