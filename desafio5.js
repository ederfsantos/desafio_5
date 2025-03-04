let listaDeCategorias = ["Frutas", "Laticínios", "Congelados", "Doces", "Bebidas"];
let listaDeFrutas = [];
let listaDeLaticinios = [];
let listaDeCongelados = [];
let listaDeDoces = [];
let listaDeBebidas = [];
let listaDeTodosItens = [];
let resposta = "SIM";//iniciando a variavel para entrar no laço do while

do {
    resposta = prompt("Você deseja adicionar uma comida na sua lista de compras? Sim ou Nao");
    resposta = resposta.toUpperCase();//deixando tudo maiusculo para commparação, caso usuario digite minusculo
   // alert(resposta);
    if (resposta == "SIM") {
        let comida = prompt("Qual comida você deseja inserir?");
        let categoria = parseInt(prompt("Em qual categoria essa comida se encaixa?\nEscolha uma opção:\n[0] Frutas, [1] Laticínios," +
            " [2] Congelados, [3] Doces, [4] Bebidas"));

        if (categoria == 0) {
            listaDeFrutas.push(comida);
        }
        if (categoria == 1) {
            listaDeLaticinios.push(comida);

        }
        if (categoria == 2) {
            listaDeCongelados.push(comida);

        }
        if (categoria == 3) {
            listaDeDoces.push(comida);

        }
        if (categoria == 4) {
            listaDeBebidas.push(comida);

        }
    }

} while (resposta == "SIM");
//listaDeTodosItens.push(listaDeFrutas);
//listaDeTodosItens.push(listaDeLaticinios);
//listaDeTodosItens.push(listaDeCongelados);
//listaDeTodosItens.push(listaDeDoces);
//listaDeTodosItens.push(listaDeBebidas);


exibirListaDeCompras();


/*
for (let x = 0; x < listaDeCategorias.length; x++) {
    for (let z = 0; z < listaDeTodosItens.length; z++) {
        exibirListaDeCompras(listaDeCategorias[x], listaDeTodosItens[z]);
    }
}



function exibirListaDeCompras(categoria, lista) {
    let itens = categoria + ": ";
    for (let i = 0; i < lista.length; i++) {
        itens += lista[i] + ",";
    }
    alert(itens);
}
*/

function exibirListaDeCompras() {
    alert("Sua Lista de compras!\nDoces: " + listaDeDoces +"\nBebidas: " + listaDeBebidas + "\n"
       +"Congelados: " + listaDeCongelados + "\nFrutas: " + listaDeFrutas + "\nLaticínios: " + listaDeLaticinios);
   // alert(listaDeBebidas);
   // alert(listaDeCongelados);
  //  alert(listaDeDoces);
  //  alert(listaDeFrutas);
 //   alert(listaDeLaticinios);

}




