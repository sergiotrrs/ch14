package org.generation.test;

import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;
import org.junit.platform.suite.api.SuiteDisplayName;

@Suite //No ayuda a unir varios paquetes para correr en el mismo programa
@SuiteDisplayName("Pruebas a la clase aritmética")
@SelectClasses ({TestSuma.class, TestResta.class}) //Llamamos a la clase
class SuiteAritmetica {
	//Failures are when your test cases fail – i.e. your assertions are incorrect.

	//Errors are when unexpected errors/exceptions occur - i.e. while trying to actually run the test and an unexpected exception is thrown like FileNotFound, etc`.

}
