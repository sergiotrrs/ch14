package org.generation;

public class TestPerro {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Número de perros: "+Perro.getNumPerros());
		
		
		Perro perro1= new Perro("Pupi",'c');
		System.out.println("Creo a perro "+perro1.getNombre());
		
		System.out.println("Número de perros: "+Perro.getNumPerros());
			
		Perro perro2= new Perro("Coco",'m',"Dalmata");		
		System.out.println("Creo a perro "+perro2.getNombre());
		
		Perro perro3= new Perro("Pu",'c');
		System.out.println("Número de perros: "+Perro.getNumPerros());
		
		perro1.correr();
		perro1.ladrar();
		perro2.ladrar("guau");
		perro1.setApodo("chikis");
		System.out.println("El apodo de perro "+perro1.getNombre()+" es "+perro1.getApodo());
		
		
	}

}
