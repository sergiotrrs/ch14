package org.generation.test;


import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;
import org.junit.platform.suite.api.SuiteDisplayName;


@Suite
@SuiteDisplayName("Pruebas a las clases aritmética")
@SelectClasses( {TestSuma.class, TestResta.class} )
class SuiteAritmetica {

	

}
