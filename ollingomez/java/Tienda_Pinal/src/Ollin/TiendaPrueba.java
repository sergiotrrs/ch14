package Ollin;

public class TiendaPrueba {
	public static void main(String[] args) {
		
		Tienda galleta=new Tienda("Galletas","Emperador",5.0f);
		System.out.println("El producto ingresado es: "+ galleta.altaProducto());
		
		System.out.println("Numero de productos ingresados: "+ galleta.numeroProducto);
		Tienda refresco=new Tienda("Refresco","Cocacola",25.0f);
		System.out.println("El producto ingresado es: "+ refresco.altaProducto());
		System.out.println("Numero de productos ingresados: "+ refresco.numeroProducto);
		
		Tienda empleado1=new Tienda("Manuel",7500.0f);
		Tienda empleado2=new Tienda("Pedra",8000.0f);
		System.out.println("Tenemos " + empleado1.N_trabajadores +" empleados");
	
		empleado1.setAumento(380);
		
		System.out.println(empleado1.);
	
	
	}
	
}
