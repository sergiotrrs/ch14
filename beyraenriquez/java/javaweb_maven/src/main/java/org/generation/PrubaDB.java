package org.generation;

/*import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

*/
import java.sql.*;

public class PrubaDB {

	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/colonial?useSSL=false&useTimezone=true&serverTimezone=UTC&allowPublicKeyRetrieval=true";
		
		try {
		Connection conexion = DriverManager.getConnection(url, "root", "generation");
		Statement instruccion = conexion.createStatement(); 
		String query = "CALL dorime";
		ResultSet resultado = instruccion.executeQuery(query);
		
		while(resultado.next()) {
			//System.out.print("nombre: " + resultado.getInt(1));
			//System.out.println("\t nombre: " + resultado.getString(2));
			//System.out.print("nombre: " + resultado.getInt("idpaleta"));
			System.out.print("nombre: " + resultado.getString("nombre"));
			System.out.print("\t sabor: " + resultado.getString("sabor"));
			System.out.println("\t precio: $" + resultado.getDouble("precio")+ " MXN");
		}
		resultado.close();
		instruccion.close();
		conexion.close();
		
		}catch (SQLException e) {
			System.out.println(e);
		}
	}

}
