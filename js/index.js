// Declarando e inicializando a variável 'nomeDoUsuario' com o valor "José1234"
var nomeDoUsuario = "José1234" 

// Atualizando o valor da variável 'nomeDoUsuario' para "José5678"
nomeDoUsuario = "José5678"

// Declarando a constante 'redeSocialFavorita' e atribuindo o valor "Youtube"
// A linha a seguir está comentada, portanto, não será executada.
// const redeSocialFavorita = "Youtube"

// A linha a seguir está comentada, pois tenta reatribuir um valor a uma constante, o que geraria um erro.
// redeSocialFavorita = "Reddit"

// Comentário para a linha acima: Atribuição a uma constante resultará em um erro.
// Você não pode reatribuir um valor a uma constante após a sua declaração.

// Declarando a variável 'enderecoDeEmail' e inicializando com "Gabrie1223@gmail.com"
let enderecoDeEmail = "Gabrie1223@gmail.com"

// Atualizando o valor da variável 'enderecoDeEmail' para "Heitor2442@hotmail.com.br"
enderecoDeEmail = "Heitor2442@hotmail.com.br"

{
    // Declarando a variável 'numeroDeTelefoneCelular' com o valor "(28) 96761-7962"
    var numeroDeTelefoneCelular = "(28) 96761-7962"

    // Declarando a constante 'senhaDoUsuario' com um valor longo
    const senhaDoUsuario = "79731893472322852395"

    // Declarando a variável 'dataDeNascimentoDoUsuario' com o valor "20/01/2003"
    let dataDeNascimentoDoUsuario = "20/01/2003"
}

// A linha a seguir imprimirá o valor da variável 'numeroDeTelefoneCelular'
console.log(numeroDeTelefoneCelular)

// A linha a seguir gerará um erro, pois 'senhaDoUsuario' e 'dataDeNascimentoDoUsuario' estão fora do escopo onde foram declaradas
// console.log(senhaDoUsuario)
// console.log(dataDeNascimentoDoUsuario)

// A linha a seguir foi comentada, portanto, não será executada.
console.log(nomeDoUsuario)

// A linha a seguir imprimirá o valor atualizado da variável 'enderecoDeEmail'
console.log(enderecoDeEmail)
