package org.generation.test;


import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;
import org.junit.platform.suite.api.SuiteDisplayName;


@Suite
@SuiteDisplayName("Pruebas a la clase aritmética")
@SelectClasses( {TestSuma.class, TestResta.class} )
class SuitAritmetica {
	
}
