/* recursion

É o ato de uma função chamar a si mesma. A recursão é bastante usada para resolver problemas que contêm
subproblemas menores, dividir um problema complexo em problemas menores, fazer uma contagem regressiva ou uma
contagem até que certo valor seja atingido. Este tipo de função precisa de uma condição para que ela pare de 
chamar a si mesmo. Caso contrário entrará em um 'looping infinito'.
Porém, a técnica de recursão não é uma boa prática, pois deixa o código complexo de se entender ou muito verboso e de
difícil manutenção. É sempre preferível alternativas mais modernas como pro exemplo, o uso de laços de repetição.

default parameters

Ao difinir parâmetros padrões para uma função, podemos definir valores caso nenhum valor for passado ou este for
indefinido.

closures

Uma função possui acesso à todas as variáveis criadas em seu escopo e também ao escopo pai. A mesma coisa acontece para
funções dentro de funções.*/

/* recursion */
function countDown(number) {
    console.log(number);
    const newNumber = number - 1;

    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(10);

/* default parameters */
function say(message='Hi') {
    console.log(message);
}
say()

/* closures */
import {somarNumeros} from './escopo.js'

//let x = 10
const result = somarNumeros()

console.log(result)