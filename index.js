/*Herança*/
class Candidatos {
    constructor(firstName, surName, cpf) {
        this.firstName = firstName
        this.surName = surName
        this.cpf = cpf
    }
}

class Masc extends Candidatos {
    constructor(firstName, surName, cpf, reservista) {
        super(firstName, surName, cpf)
        this.reservista = reservista
    }
}

//const candidatei = new Masc('Marcelo', 'Vasques', 1234567891011, true)
//const candidatei2 = new Candidates('Maria', 'Fulana', 1110987654321)
console.log('candidate2')


/* Callbacks

trata-se de uma função que será executada quando algum evento acontecer ou quando algum código chegar a um estado esperado.
Isto quer dizer que esta função é assíncrona, pois não será executada imediatamente. Neste caso, a aplicação continuará
funcionando enquanto a função espera o momento da sua execução.
Ex. uma função a ser executada após um dado ser salvo no banco de dados; uma função que executa após os dados serem retornados
de uma chamada à uma API;
Uma função que será executada após o click do usuário em um botão no site.*/

/* Função callback */

function hello(name) {
    console.log(name)
}

function helloUser(callback) {
    callback('Marcelo')
}

//helloUser(hello)

const callback = e => alert('Foi clicado')

window.addEventListener('click', callback)