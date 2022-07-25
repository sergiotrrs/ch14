package org.generation;

public class OperacionesTest {

	public static void main(String[] args) {
		
//		int aristas= Operaciones.aristas;//Se usa directamente la clase , solo tiene acceso a arista porque es un atributo de clase
//	    Operaciones sapitoChoco = new Operaciones(); //se instancea utilizando "new nomClase ()"; 
//	    Operaciones sapitoJabon = new Operaciones(); //se instancea utilizando "new nomClase ()"; 
//        sapitoJabon.precio=9;//modifica el precio de el atributo de objeto
        
//	    System.out.println("N. de aristas del molde " + aristas);
//	    System.out.println("Material del molde: " + Operaciones.material);
//        System.out.println("Precio sapito chocolate " + sapitoChoco.precio);
//        System.out.println("Precio sapito jabon " + sapitoJabon.precio);
	
	   //Operaciones.
       //sapitoJabon.suma(5, 10);//Para poder utilizarla se necesita instanciar un objeto
	  Operaciones.suma(5, 10);
	  Operaciones.suma(2, 2);
	  
//	  Operaciones calculadora = new Operaciones();
//	  calculadora.suma(5, 10);
	  int resultado = Operaciones.sumaRetorno(5, 8); //Se le llama parametros cuando estas armando la funcion(firma de la funcion)
	                                                  //cuando la utilizas ya se llaman argumentos
	  System.out.println("El resultado suma: " + resultado);//13
	  System.out.println("El resultado resta: " + Operaciones.resta(resultado, 3));//13-3 =10
	  System.out.println("El resultado Multiplica: " + Operaciones.multiplicaciones(resultado, 2));//13*2=26
	  System.out.println("El resultado Division: " + Operaciones.divicion(resultado, 4));// 13/4=3.25
	  System.out.println("El resultado raiz cuadrada: " + Operaciones.raizCuadrada(resultado));// raiz cuadrada de 13 = 3.6055-----
	  
	  
	  String texto = "A Cinthia le gustan los limones";
	  System.out.println("A quien le gustan los limones?" + texto.substring(2, 9));//se coloca de 2 a 9 es el numero de espacios en el string donde esta escrito "Cinthia"
	  char letra = texto.charAt(2);//muestra el caracter del texto con el indice que se coloca entre parentesis
	  System.out.println("Primera letra: " + letra);//Imprime la letra C , explicado linea 35
	  System.out.println("N. Total de letras: " + texto.length());// .length() muestra el numero de caracteres que tiene el string , empieza a contar de 1 
	  
	int[] myArray= {2,5,87,45,8}; //dar de alta un arreglo
	System.out.println("Posicion indice 2 " + myArray[2]);// 87 porque esta en ese indice
	for(int i=0; i <myArray.length; i++) {//este for muestra los indices:dato que se encuentra en esa posicion en el array
		System.out.println("Valor en " + i+ ":" + myArray[i]);
	
	}
	//Este for solo sirve para iterar arreglos o colecciones , for chikito
	for(int numero: myArray) {//Muestra solo los datos dentro del arreglo
		System.out.println("Dato dentro del arreglo: "  + numero);
		
	}
	
	  /**
	   * Actividad 1:
	   * Determinar cuantas letras P hay en "Pepe Pecas, pica papas con un pico y un palito"
	   * 
	   * Determinar el numero mayor de:
	   * {23,56,7,98,23,1,6}
	   * Usar una funcion Math.
	   */
	String act1 = "Pepe Pecas, pica papas con sun pico y un palito";
	  int stringLength= act1.length();
	  System.out.println("String length: " + stringLength);
	  int stringLengthSinEspacios = act1.replace(" ", "").length();
	  System.out.println("String sin los espacios: " + stringLengthSinEspacios);
	
	}
	

}
