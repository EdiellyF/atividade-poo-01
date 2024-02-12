class Aluno {
    #nome;
    #nota1;
    #nota2;
    #media;
 
    definirNome(nome) {
        if (typeof nome === 'string' && nome.trim() !== '') {
            this.#nome = nome.trim();
        } else {
            throw new Error('Nome inválido');
        }
    }  
    definirNotas(nota1, nota2) {
        if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10){
            if (!isNaN(nota1) && !isNaN(nota2) && nota1.trim() !== '' && nota2.trim() !== '' ) {
                this.#nota1 = parseFloat(nota1);
                this.#nota2 = parseFloat(nota2);
            } 
    }   
        else {
            alert('Notas inválidas');
        }
    }
 
    calcularMedia() {
        if (isNaN(this.#nota1) || isNaN(this.#nota2)) {
            throw new Error('Notas inválidas');
        }
        this.#media = (this.#nota1 + this.#nota2) / 2;
        return `A média de ${this.#nome} é: ${this.#media.toFixed(2)}`;
         
    }
}

let formulario = document.getElementById('meuFormulario');
let nota1Input = document.getElementById('nota1');
let nota2Input = document.getElementById('nota2');
let nomeInput = document.getElementById('nome');
let button = document.getElementById('button');
let resultado = document.getElementById('resultado');

button.addEventListener('click', novoAluno);

function novoAluno() {
    let aluno = new Aluno();
    aluno.definirNome(nomeInput.value);
    aluno.definirNotas(nota1Input.value, nota2Input.value);
    
    let media = aluno.calcularMedia();
  
        resultado.innerHTML += media + '<br>';
  
}

 
 
