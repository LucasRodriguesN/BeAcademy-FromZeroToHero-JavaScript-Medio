/* Scope */
{
    let x = 2
    //console.log(x)
}

{
    let y =2;//com var é possível
}

//console.log(y)

/*Reassign a value*/
let w = 10
w = 5
//console.log(w)

//com o let podemos retribuir um valor para a variável
//o const não se muda o valor da variável

/* Template strings */

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName} ${lastName}`;
//console.log(text)

let price = 10;
let fees = 0.25;
let total = `O total do produto é: R$ ${(price + fees)}`;
//console.log(total)

/* immediately invoked function expression ou IIFE*/
(function helloWorld(){
    alert('Hello, world!');
}
)();

(function (message){
    alert(message);
}
)('Hello, world!');

/* arrow functions 
Uma arrow function é uma alternativa compacta a uma expressão de função tradicional,
com algumas diferenças semânticas e limitações deliberadas no uso*/
/* function sum(a) {
    return a + 10;
} */

const sum = a => a + 100
//console.log(sum(3))

//exemplo com map()
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

const newArray = materials.map(
    function showLength(materials){
        return materials.length
    }
);

//const newArray = materials.map(material => material.length)
//console.log(newArray)

//for, loop
//Utilizado para fazer algo repetidamente até que uma condição seja atigida.

for (var numero = 0; numero < 10; numero++){
    console.log(numero);
}
//retorna de 0 a 9 no console

//immediately invoked function expression ou IIFE
//trata-se de uma função chamada imediatamente depois de ser declarada. É útil para evitar 'poluir' o objeto global

(function helloWorld(){
    alert('Hello, world!');
}
)();

//alerta 'Hello, world!'

const videoGames = ['Swith', 'PS4', 'Xbox', '3DS'];
for (let i = 0; i < videoGames.length; i++) {
    //console.log(`O game ${i + 1} é ${videoGames[i]}`);
}

//prototype e herança sem uso de classes
/*O prototype é um objeto adicionado a uma função quando esta é criada.
Dá acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto.
O protorype de um construtor permite que seus membros sejam compartilhados por todas as instâncias. É o mesmo que dizer
que as instâncias herdam os membros de uma função construtora.
Assim, cada objeto concreto (instância) vai ter seus próprios dados. Para manipular os dados conforme as
regras de negócio, todas as instâncias terão acesso aos métodos do protorype.*/

/* prototypes */
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const marcelo = new Pessoa('Marcelo', 44);
console.log(Pessoa.prototype )

const notebook = {
    cor: 'preto',
    ano: 2022,
    especifications: function(value) {
        return `Este notebook cusra R$${value}, 00; cor ${this.cor}; ano ${this.ano}`
    }
}

const dell = {
    marca: 'Dell'
}

Object.setPrototypeOf(dell, notebook)

//console.log(dell.especifications(5000))

/* Orientação a objetos

é um paradigma utilizado para modelar coisas/objetos do mundo real que queremos representar dentro de uma aplicação.
Em um software, estamos sempre representando de forma abstrata, objetos concretos do mundo real, ex.: um cliente, um aluno,
um produto, etc... Importante salientar que um objeto concreto no mundo real pode apresentar infinitas características.
Porém, trazemos para nosso software apenas aquelas que fazem sentido para a regra de negócio.

Sendo assim, para um cadastro em um sistema escolar, o tipo sanguíneo ou a altura do aluno (objeto do mundo concreto)
não tenha utilidade. Porém, para o cadastro em uma clínica médica, estes elementos devem ser levados em consideração.*/

/* Um dos pilares da orientação a objetos é a classe. Com ela, podemos criar uma abstração de um objeto do mundo real
e a partir desta, instanciar, ou seja, gerar um objeto concreto em nossa aplicação.

É o exemplo do cadastro de alunos em um sistema escolar. Obtemos as características conforme as regras de negócios de nossa
aplicação. Após isto, podemos instanciar para que o software guarde e nos retorne uma lista de alunos ou um aluno em específico
com os dados que precisamos, as classes são utilizadas para gerar instâncias de um objeto podendo-se reutilizar código atráves
da herança.*/

/*Classes
função construtoras são utilizadas para instanciar objetos. Assim, é possível trabalhar com reutilização do código.*/

/*as classes em javascript são introduzidas no ECMAScript 2015. Trazem uma maneira mais simples e clara para criar
objetos e lidar com herança. São funções especiais que agem como funções construtoras. 

Sintaxe:
    class Person{
        constructor() {}
    }
*/

/*Herança
com uma classe, podemos implementar as características abstratas de um objeto. A partir, dela, podemos gerar diversos objetos
reutilizando as características. Exemplo: em um cadastro de candidatos a um concurso, temos os dados necessários de cada um.
Todos eles têm nome e CPF. Então todos os candidatos são cadastrados com estas propriedades. Com isso, é possível herdar
da classe principal, todos estes dados. Porém, apenas no caso de candidatos homens, é necessário ter cadastrado o comprovante
de serviço militar obrigatório.*/

const Foo = function(x){
    this.x = x
}

const foo = newFoo('x')

console.log(foo)

class Book {
    constructor(title, year, author) {
        this.title = title
        this.year = year
        this.author = author
    }
}

const domCasmurro = new Book('Dom Casmurro', 1899, 'Machado de Assis')
const harryPotter = new Book('Harry Potter', 1997, 'J. K. Rowling')

let bookList = []
bookList.push(domCasmurro, harryPotter)
//console.log(bookList)

class copaDoMundo {
    constructor(country, year) {
        this.country = country
        this.year = year
    }
    showChampion (team) {
        return `A copa do ${this.country} foi disputada no ano de ${this.year} e o campeão foi ${team}`
    }
}

const copa86 = new copaDoMundo('México', 1986)
const copa70 = new copaDoMundo('México', 1970)
const champion86 = copa86.showChampion('Argentina')
const champion70 = copa70.showChampion('Brasil')

//console.log(Champion86)
//console.log(champion70)