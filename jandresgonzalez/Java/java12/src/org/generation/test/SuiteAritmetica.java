package org.generation.test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;
import org.junit.platform.suite.api.SuiteDisplayName;

@Suite
@SuiteDisplayName("Suite de las pruebas del proyecto")
@SelectClasses({TestResta.class, TestSuma.class}) //Selecciona las clases a probar, se pueden probar paquetes
class SuiteAritmetica {
		
}
