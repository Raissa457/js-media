// Função para calcular a média de um array de números
function calcularMedia(numeros) {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}

// Função para coletar números do usuário
function coletarNumeros() {
    const numeros = [];
    let continuar = true;

    while (continuar) {
        const input = prompt("Insira um número (ou digite 'sair' para terminar):");

        if (input.toLowerCase() === 'sair') {
            continuar = false;
        } else {
            const numero = parseFloat(input);
            if (!isNaN(numero)) {
                numeros.push(numero);
            } else {
                alert("Por favor, insira um número válido.");
            }
        }
    }

    return numeros;
}

// Função principal
function main() {
    const numeros = coletarNumeros();

    if (numeros.length > 0) {
        const media = calcularMedia(numeros);
        console.log(`A média dos números inseridos é: ${media}`);
    } else {
        console.log("Nenhum número foi inserido.");
    }
}

// Executa o programa
main();
