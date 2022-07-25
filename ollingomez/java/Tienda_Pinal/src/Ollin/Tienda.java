package Ollin;

public class Tienda {
	//Crear una Clase (tema abierto)
	//implementar por lo menos 3 métodos
	//por lo menos 3 atributos de objeto
	//por lo menos 1 atributo de clase
	//implementar 2 constructores sobrecargados
	//implementar setters and getters de los atributos
	//Realizar pruebas de clase
	
	
	//Definimos atributos Objetos
	private String nomProducto;
	private String tipoProducto;
	private float costoProducto;
	private String nomEmpleado;
	private float salario;
	
	
	
	//Definimos atributos de clase
	static String Tienda="El_Pinal";
	static int N_trabajadores;
	static int numeroProducto;
	
	Tienda(){
		numeroProducto++;
	}

	Tienda(String tipoProducto, String nomProducto, float costoProducto){
		this.tipoProducto=tipoProducto;
		this.nomProducto=nomProducto;		
		this.costoProducto=costoProducto;
		numeroProducto++;		
	}
	
	Tienda(String nomEmpleado, float salario){
		this.nomEmpleado=nomEmpleado;
		this.salario=salario;
		N_trabajadores++;
	}
	
	String altaProducto() {
		return this.tipoProducto + " " +this.nomProducto+ " " +this.costoProducto;
	}
	
	
	void setAumento(float aumento) {
		this.salario+=aumento;
	}
	
	float getAumento() {
		return this.salario;
	}
	
	
}
