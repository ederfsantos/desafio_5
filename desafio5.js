/*declaração das listas(arrays)*/
let listaDeFrutas = [];
let listaDeLaticinios = [];
let listaDeCongelados = [];
let listaDeDoces = [];
let listaDeBebidas = [];
let resposta;


do {
    resposta = prompt("Você deseja adicionar uma comida na sua lista de compras? Sim ou Nao");
    resposta = resposta.toUpperCase();//deixando tudo maiusculo para comparação, caso usuario digite minusculo

    if (resposta == "SIM") {
        let comida = prompt("Qual comida você deseja inserir?");
        let categoria = parseInt(prompt("Em qual categoria essa comida se encaixa?\nEscolha uma opção:\n[1] Frutas, [2] Laticínios," +
            " [3] Congelados, [4] Doces, [5] Bebidas"));

        if (categoria == 1) {
            listaDeFrutas.push(comida);
        }
        if (categoria == 2) {
            listaDeLaticinios.push(comida);

        }
        if (categoria == 3) {
            listaDeCongelados.push(comida);

        }
        if (categoria == 4) {
            listaDeDoces.push(comida);

        }
        if (categoria == 5) {
            listaDeBebidas.push(comida);

        }
    }

} while (resposta == "SIM");

/*chamando a função para exibir as listas */
exibirListaDeCompras();

function exibirListaDeCompras() {
    alert("Sua Lista de compras!\nDoces: " + listaDeDoces + "\nBebidas: " + listaDeBebidas + "\n"
        + "Congelados: " + listaDeCongelados + "\nFrutas: " + listaDeFrutas + "\nLaticínios: " + listaDeLaticinios);

        

}




