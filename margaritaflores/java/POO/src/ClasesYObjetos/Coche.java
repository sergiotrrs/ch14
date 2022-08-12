package ClasesYObjetos;

public class Coche {
	//Atributos
	String color;
	String marca;
	int km;
	
	//Creación métodos
	public static void main (String [] args) {
		
		//creacción de objetos
		Coche coche1 = new Coche();
		
		
		coche1.color = "blanco";
		coche1.marca = "Audi";
		coche1.km = 0;
		
		System.out.println("El color del coche es : " + coche1.color);
		System.out.println("La marca del coche es : " + coche1.marca);
		System.out.println("El kilometraje del coche es : " + coche1.km);
		
		
		Coche coche2 = new Coche();
		
		coche2.color ="rojo";
		coche2.marca = "Ferrrari";
		coche2.km = 5;
		
		System.out.println("El color del coche es : " + coche2.color);
		System.out.println("La marca del coche es : " + coche2.marca);
		System.out.println("El kilometraje del coche es : " + coche2.km);
		
		
	}
	
}
