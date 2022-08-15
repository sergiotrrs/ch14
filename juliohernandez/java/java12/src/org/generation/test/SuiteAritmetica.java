//Este archivo es para probar diferentes clases

package org.generation.test;

import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;
import org.junit.platform.suite.api.SuiteDisplayName;

@Suite
@SuiteDisplayName("Pruebas a la clase aritmética")
@SelectClasses({TestSuma.class, TestResta.class}) //Se ocupan llaves cuando más de un paquete
//No se importan las clases porque están en el mismo paquete
public class SuiteAritmetica {

}
