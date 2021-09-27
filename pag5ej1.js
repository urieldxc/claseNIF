class NIF {
    constructor(numero){
        this._numero = numero;
        this._letra = this.calcularLetra(this._numero);
    };

    get numero(){
        return this._numero;
    }

    set numero(nuevoNumero){
        this._numero = nuevoNumero;
        this._letra = this.calcularLetra();
    }

    mostrar(){
        return `${this._numero}-${this._letra.toUpperCase()}`;
    };

    calcularLetra(){
        const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P',
        'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];
        return letras[this._numero%23]; 
    }
}

let dniSergio = new NIF(20486530);
