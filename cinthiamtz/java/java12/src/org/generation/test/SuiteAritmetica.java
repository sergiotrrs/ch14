package org.generation.test;

import org.junit.platform.suite.api.SelectClasses;
//import org.junit.jupiter.api.Test;
import org.junit.platform.suite.api.Suite;
import org.junit.platform.suite.api.SuiteDisplayName;

@Suite
@SuiteDisplayName("Pruebas a la calse aritmetica")
@SelectClasses({TestSuma.class, TestResta2.class})
class SuiteAritmetica {



}
