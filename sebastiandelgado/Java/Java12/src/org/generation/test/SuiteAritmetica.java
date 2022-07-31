package org.generation.test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;
import org.junit.platform.suite.api.SuiteDisplayName;

@Suite
@SuiteDisplayName("Pruebas a las clase aritmética")
//Para importar más de una clase es con llaves
@SelectClasses({TestSuma.class, TestResta.class})
class SuiteAritmetica {



}
