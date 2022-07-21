package org.generation;
public class OperadoresLogicos {
public static void main(String[] args) {
	//El operador = , es el operador de asignacion
	int myVar =12;
	
	int a = 3;
	int b = 5;
	//Operadores aritmeticos
	int sumatoria = a + b;
	int resta = a - b;
	int multiplica = a * b;
	float division = (float)a / b;
	int residuo = a%b;
    System.out.println("Sumatoria " + sumatoria);
    System.out.println("Resta " + resta);
    System.out.println("Multiplica " + multiplica);
    System.out.println("division " + division);
    System.out.println("residuo " + residuo);
    
    //Operadores unarios
    //hacer un valor positivo (+) no es muy funcional
    int valorInicial = 5;
    int valorPos = +valorInicial;
    
    //hacer un valor negativo (-)
    int valorNeg = -valorInicial;
    System.out.println("Valor positivo es: " + valorPos);
    System.out.println("Valor negativo es: " + valorNeg);
    
    //Operador unitario de postincremento (var++) y preincremento(++var)
    valorInicial = 10;
    int valIncremento = ++valorInicial;//entra con 10 , se le agrega incremento de 1 , sale con 11
    System.out.println("Valor con incremento ++val: " + valIncremento);//11
    valIncremento = valorInicial++;//entra con valor 11 , sale con 11 , se incrementa 1 
    System.out.println("Valor con incremento val++: " + valIncremento);//11 , porque aun no se realiza el incremento 
    System.out.println("valor inicial " + valorInicial);// Seria 12 , por el incremento que tubo en la linea anterior
    
    valorInicial = 3;
    System.out.println("Valor con preincremento: " + ++valorInicial);//4
    System.out.println("Valor con postincremento: " + valorInicial++);//4 , despues se le agrega un incremento
    System.out.println("Valor de la variable: " + valorInicial);//5, por el incremento de postincremento
    
    //Operador unario not ! , invierte un valor booleano
    boolean success = false;
    System.out.println("Valor booleano " + success);
    System.out.println("Valor booleano negado " + !success);//seria true el resultado porque se cumple la condicion, pero no modifica el valor de la variable
    System.out.println("Valor booleano " + success);//false , porque no se modifico su valor con la linea anterior
    
    
    //Operadores de igualdad y realacion
    // == igual que
    System.out.println("40 == 40:  " + (40==40) );//la respuesta siempre sera booleana , respuesta es true
    System.out.println("40 != 30:  " + (40!=30) );//la respuesta siempre sera booleana , respuesta es true porque la condicion era si uno es diferente de otro
    System.out.println("40 != 40:  " + (40!=40) );//la respuesta siempre sera booleana , respuesta es false porque la condicion era si uno es diferente de otro y son iguales
    //System.out.println("40 != 30:  " + (40!="40") ); no se puede comparar diferentes tipos , no estring con numeros 
    System.out.println("40 != 30:" + (40!= Integer.parseInt("30")));//true porque Integer.parseInt convierte el string a numerico y se cumple la sentencia
    
    System.out.println("20>10 " + (20>10));//true
    System.out.println("20<10 " + (20<10));//false
    System.out.println("20<20 " + (20<20));//false
    System.out.println("20<=20 " + (20<=20));//true
    System.out.println("15<=15 " + (15>=15));//true
    
    //Operadores condicionales &&(AND) y ||(OR)
    //Evaluan concidicones booleanas
    //En operaciones AND , solo si los operandos son true la respuesta sera true
    System.out.println("true && true: " + (true && true));//true
    System.out.println("true && false: " + (true && false));//false
    System.out.println("false && true: " + (false && true));//false
    System.out.println("false && false: " + (false && false));//false 
    
    //En operaciones Or , solo si los dos operandos son false la respuesta es false
    System.out.println("true || true: " + (true || true));//true
    System.out.println("true || false: " + (true || false));//true
    System.out.println("false || true: " + (false || true));//true
    System.out.println("false || false: " + (false || false));//false 
    
    System.out.println(" 4>2 && 3<2: " + (4>2 && 3<2));//false  , uno es true y otro false 
    System.out.println(" 20>=2 && 3<=3: " + (20>=2 && 3<=3));//true  , ambas condiciones son true 
    System.out.println(" 20==2 && 3<=3 && 2<6: " + (20==2 && 3<=3 && 2<6));//false  , true y false dan false , y un false y un true dan false
    System.out.println(" 8==45 && 3>3 || 2<6: " + (8==45 && 3>3 || 2<6));//true  , false y false dan false or true   
    System.out.println(" true || 3>3 && false: " + (true || 3>3 && false));//true , prioridad de los operadores and tiene prioridad del or    
    System.out.println(" 2>1 || 3>3 && !false: " + (2>1 || 3>3 && !false));//true , prioridad de los operadores and tiene prioridad del or    
    
    System.out.println(" !(4>2 && 3<2 || true): " + (!(4>2 && 3<2 || true)));//false   
    
    //Operadores a nivel de bits
    //Operador negado de bits ~
    int myBits = ~0b0000_0000_0000_0000_0000_1000;//8 en binario
    System.out.println("Valor negado de 8: " + myBits);//-9
    System.out.println("Valor negado de 8: " + Integer.toBinaryString(myBits));//11111111111111111111111111110111 todos los ceros se vuelven 1 cuando el num es negado
    
    //Corrimiento de bits a la derecha >>
    myBits = 0b0000_0000_0000_0000_1000_0000 >>2;//
    System.out.println("Corrimiento a la derecha: " + myBits);//32
    System.out.println("Corrimiento a la derecha: " + Integer.toBinaryString(myBits));//100000 se movio dos lugares a la derecha
    
    //Corrimiento de bits a la izquierda <<
    myBits = 0b0000_0000_0000_0000_1000_0000 <<3;//
    System.out.println("Corrimiento a la izquierda: " + myBits);//1024
    System.out.println("Corrimiento a la izquierda: " + Integer.toBinaryString(myBits));//10000000000 se movio dos lugares a la izquierda
    
    //Operador & AND a nivel de bits
    myBits = 0b0000_0000_0000_0000_1000_0000 & 0b1111_1111;
    System.out.println("AND a nivel de bits: " + myBits);//128
    System.out.println("AND a nivel de bits: " + Integer.toBinaryString(myBits));//10000000
    
    //Operador | OR a nivel de bits
    myBits = 0b0000_0000_0000_0000_1000_0000 | 0b1111_1111;
    System.out.println("OR a nivel de bits: " + myBits);//255
    System.out.println("OR a nivel de bits: " + Integer.toBinaryString(myBits));//11111111
    
    
}



}
