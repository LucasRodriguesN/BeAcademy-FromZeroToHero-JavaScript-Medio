/* async / await

São palavras-chave do javascript. Foram implementadas a partir do ES2017. Trazem uma sintaxe que simplifica
a manipulação da programação assíncrona no javascript, facilitando o fluxo de escrita e leitura do código;
Com elas, se tornou possível escrever código assíncrono e lido e estruturado de forma síncrona.

Podemos definir uma função como async e usar await antes de qualquer expressão que retorne uma promise. Assim, a
função definida como async irá esperar até a promise seja resolvida.

A palavra chave async indica que a função tem comportamento assíncrono e que se deve esperar sua resolução antes do
programa continuar. O await indica a promise que devemos esperar.*/

/* async / await */
const firstUser = async (userId) => {
    let response = await fetch(`https://jsonplaceholder.typicod.com/todos/${userId}`)
    let resultJSON = await response.json()
    //let title = await resultJSON.title
    console.log(resultJSON)
}

firstUser(1)

/* try / catch */
async function user() {
    try {
        let response = await fetch(`https://jslaceholder.typicade.com`);
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('error ---->', error)
        throw new Error('Erro no fetch')
    } finally {
        console.log('acabou')
    }
}

user()


/* try / catch 
Ao executar o código javascript, diferentes erros podem ocorrer. Podem ser erros de codificação do programador, erros
devido a requisição de dados e outras coisas imprevisíveis como queda de um servidor ou de uma rede em se tratando de uma
promise. Estes erros podem ser tratados com as palavras a seguir:

try - determina um bloco de código que será executado na promise;

cath - determinaum bloco de código no qual os erros serão tratados;

finally - determina um bloco de código que será executado qualquer que seja o resultado da promise;

throw - define um erro customizado.

Níveis de try / catch

Utilizando o objeto Error

O construtor Error() cria um objeto de erro.
Podemos utilizar Error() ou new Error()

A declaração throw lança uma exceção previamente definida. A execução da função será interrompida e as instruções após o throw
não serão executadas. Também podemos customizar o erro instanciando uma classe a ser chamada toda vez que um erro acontecer
na aplicação*/

class customError {
    constructor(message) {
        this.message = message
    }
}

function function1() {
    console.log(`function1 executou`)
    try {
        console.log(`function1 no try`)
        consigoA
    } catch (error) {
        throw new customError('Erro na function1')
    }
}

function1()

/* rest / spread

rest parameters - permite trabalhar com uma quantidade indefinida de parâmetros em afunção ou de elementos em um array.
em uma função, o rest permite capturar os argumentos:

spread operator - permite uma expressão recebendo múltiplos argumentos ou elementos. Podemos utilizar para concatenar/mergear
arrays

Destructuring

A desestruturação nos permite extrair dados de arrays e objetos e defini-los em novas variáveis.

*/

function getSum(...args) {
    let total = 0
    for(const arg of args) {
        total += arg
    }
    return total
}

console.log(getSum(2, 5))

//spread operator
const arr = [1, 2, 3];
const arr2 = [...arr, 4]
//console.log (arr2)

//merge arrays
const array1 = [1, 2, 3];

const array2 = [4, 5, 6];

const mergeArrays = [...array1, ...array2];
//console.log(mergeArrays)

//Destructuring
const carro = {
    marca: 'Ferrari',
    ano: 2020,
    portas: 2,
}

const marca = carro.marca
const ano = carro.ano

//const {marca, ano} = carro;

//console.log(marca)
//console.log(ano)

const cliente = {
    nome: 'Lucas',
    compras: {
        digitais: {
            livros: ['Dom Casmurro', 'O cortiço'],
        }
    }
}
console.log(livros);
