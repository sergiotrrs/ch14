class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculadora = new Calculator();
        this.operacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
       
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: '*',
            potenciar: '**'

        }
        this.advancedSignos = {
            raiz: '√',
        }

    }

    addNumber(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.printValues();
    }
    printValues() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.operador] || this.advancedSignos[this.operador] || ''}`;
    }

    deleteValue() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.printValues();
    }

    deleteAll() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.operador = undefined;
        this.printValues();

    }
    computar(tipo){
        this.operador !== 'igual' && this.calcular(this.verificador);
        this.operador = tipo;
        if (this.operador in this.signos){
            this.operacion = this.signos[this.operador];
            this.verificador = 'basic_operar';
        }
        if (this.operador in this.advancedSignos){
            this.operacion = this.operador;
            this.verificador = 'advanced_operar';
        }
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual='';
        this.printValues();
    }

    calcular(x){
        this.funcion = x;
        if((this.valorAnterior !== '')&&(this.valorActual !=='')){
            this.valorActual = this.calculadora[this.funcion](this.valorAnterior, this.valorActual, this.operacion);
        }
    }
}