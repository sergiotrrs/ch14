package org.generation.test;

import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;
import org.junit.platform.suite.api.SuiteDisplayName;



//Es para probar varias clases de prueba. En este caso
//realiza las pruebas de TestSuma y TestResta (7)
@Suite
@SuiteDisplayName("Pruebas a la clase aritmética")
@SelectClasses({TestSuma.class, TestResta.class})
class SuiteAritmetica {


}
