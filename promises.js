/*Promises
o javascript permite ter comportamentos síncrono e assíncrono.
Síncrono. Espera a tarefa acabar para continuar com a próxima.
Assíncrono. Parte para a próxima tarefa antes da anterior terminar. A tarefa será
executada e quando terminada será colocada em fila. Com o comportamento assíncrono, é possível
carregar um site ou executar uma aplicação enquanto alguma tarefa ainda não terminou. Esta continua sendo
executada 'por baixo dos panos', enquanto que as outras não ficam travadas esperando ela terminar.*/

/* as funções no javascript são executadas na sequência em que são chamadas. Não na sequência em que são definidas

O objeto Promise representa a evetual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

Estados de uma Promise:

Pending: estado inicial ou pendente.
Fulfilled ou resolved: operação concluída com sucesso.
Rejected: operação falhou.*/

/* Promises

É uma função construtora, e por isso, é um objeto que permite modelar o comportamento assíncrono do javascript. Ela
instancia 'promessas', ou seja, tarefas que podem levar um tempo maior para terminar em relação a outras.

Isto acontece em alguns casos como por exemplo:
-temos que receber dados de alguma API;
-uma API precisa receber dados de outra API;
-uma API faz uma requisição a um banco de dados;

Enquanto não temos as respostas para estas requisições, nosso software não precisa ter seu fincionamento travado.
Nestes casos, temos uma promessa de que os dados requisitados chegarão.

then()
as promises têm um método chamado .then() ele permite que se realize alguma tarefa após
a promise ser resolvida e será invocado quando a função for resolvida.

reject()
caso a promise não seja resolvida por algum motivo, será invocado o médoto reject.

finally()
será invocado independente do resultado da promise.

fetch()
é um método que retorna uma promise.*/

/* promise.all()
utilizado quando há várias promessas que devem ser resolvidas.*/

/* promises */
function show() {
    setTimeout(() => {
        console.log('oi')
    }, 2000);

    console.log('Até logo')
}

show()

/* const minhaPromise = new Promise((resolve, reject) => {
    let n = 9
    if(n > 10) {
        resolve()
    } else {
        reject()
    }
})

minhaPromise
.then(result => console.log('resolve'))
.catch(err => console.log('errou'))
.fanally(() => console.log('finally'))

*/

//fitch()

const firstUser = (userId) => {
    let response = fetch (`https://jsonplaceholder.typicode.com/todos/${userId}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

firstUser(1)