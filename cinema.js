/*const dividisao = (numero) => numero / 2 ;

const aplicar = (numero, funcaoDividir) => {
    return funcaoDividir(numero);
}

console.log(aplicar(1500, dividisao))*/


/*setTimeout( () => {
console.log ('eu amo a vivi')
}, 9000 )*/


const catalogo = require ('./database/catalogo.json')



/*console.log(catalogo.map  ( (filme) => {
    return filme.titulo
}))
*/

/*console.log(catalogo.filter((filme)=> filme.anoDeLancamento == 2022))*/

/*console.log(catalogo.reduce((acc, item)=>{
    return acc + item.duracao
}, 0))*/


/*catalogo.forEach((filme)=>{
    console.log(filme.titulo)
})*/




// BUSCAR UM FILME ESPECIFICO
/*const buscarFilme = (codigo) => catalogo.find((filme) => filme.codigo == codigo)

console.log(buscarFilme(2))



//ALTERAR STATUS DOS FILMES EM CARTAZES (TRUE -> FALSE, FALSE -> TRUE)

const alterarStatusEmCartaz = (codigo,buscarFilme) =>{

   let filme = buscarFilme(codigo)

 //filme.emCartaz == true ? filme.emCartaz = false : filme.emCartaz = true;
 
 filme.emCartaz = !filme.emCartaz

  return filme;
}

console.log(alterarStatusEmCartaz(1,buscarFilme))*/



//SOLICITANDO NOME SOMENTE DOS FILMES
/*const nomeDosFilmesEmCartaz = () => {
    catalogo.forEach((filme) => console.log(`Nome dos filmes: ${filme.titulo}`))
}

nomeDosFilmesEmCartaz()*/



//ADICIONAR UM FILME NO CARTAZ
const adicionarFilme = (filme) => {
    const filmesParaadicionar ={
        ...filme,
        emCartaz: true

    }

    catalogo.push(filmesParaadicionar)

    return filmesParaadicionar
}



