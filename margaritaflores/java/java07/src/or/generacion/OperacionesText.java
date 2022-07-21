package or.generacion;

public class OperacionesText {
	//Se pueden llamar y usar directamente los atributos de tu clase sin tener que indentar tú objeto
	//Para que funcione debe de estar en el mismo package si no estuviera en el paquete se puede importar		
	public static void main(String[] args) {
		
		int aristas = Operaciones.aristas; // Que jale lo de aristas de la otra hoja/ Se usa directamente la clase
		Operaciones sapitoChoco = new Operaciones(); //Instanciando mi clase --->llamando un constructor ()
		Operaciones sapitoJabon = new Operaciones();
		sapitoJabon.precio = 9;
		
//		System.out.println("N. de aristass del molde " + aristas );
//		System.out.println("Material del molde: " + Operaciones.material);
//		System.out.println("Precio Sapito Chocolate " + sapitoChoco.precio);
//		System.out.println("Precio Sapito Jabon " + sapitoJabon.precio);
		
		
		//Operaciones.
		//sapitoJabon.suma(5, 10); //Instanciando la clase utilizando la palabra reservada void
		
		//Usar directamente mi método desde la clase: utilizando la palabra reservada static(Ya pertenece a la clase) a tú función
		Operaciones.suma(5, 10);
		
//		Operaciones calculadora = new Operaciones(); //Instancia la clase 
//		calculadora.suma(5, 10);
		int resultado = Operaciones.sumaRetorno(5, 8);
		System.out.println("El resultado suma: " + resultado);
		System.out.println("El resultado resta: " + Operaciones.resta(resultado, 3));
		System.out.println("El resultado multipica: " + Operaciones.multiplicacion(resultado, 2));
		System.out.println("El resultado division: " + Operaciones.division(resultado, 4));
		System.out.println("El resultado raíz2: " + Operaciones.raizCuadrad(3.14));
		
		String texto = "A Cinthia le gustan los limones";
		System.out.println("¿A quién le gustan los limones? " + texto.substring(0,9)); //Para substraer la palabra (inicio-end)
		char letra = texto.charAt(2); //Con el indice se extrae solo una letra(caracter)--->char
		System.out.println("Primera letra: " + letra);
		System.out.println("N. total de letras: " + texto.length());
		
		int [] myArray = {2,5,87,45,8};
		//System.out.println("Posición indice 2: " + myArray[2]);
		//Para interar arreglos
		for (int i = 0; i< myArray.length; i ++) {
			System.out.println("Valor en " + i + " : " + myArray[i]);
		}
		for (int numero: myArray) {
			System.out.println("Dato dentro del arreglo: " + numero);
		}
		/**
		 * Actividad 1:
		 * Determinar cuantas letras P(Minúsuclas y mayúsculas) hay en:
		 * "Pepe Pecas pica papas con un pico y un palito"
		 * 
		 * Determinar el número mayor de: 
		 * 	{23,56,7,98,23,6}
		 * 	Usar una funciónMath. 
		 * */
		
		int numP = Operaciones.pNum("Pepe Pecas pica papas con un pico y un palito");
		System.out.println("Tiene " + numP + " letras p");
		
		int[] myArray2 =  {23,56,7,98,23,6};
		System.out.println("Num Mayor: " + Operaciones.numMayor(myArray2));
		
	
		
	}

}
