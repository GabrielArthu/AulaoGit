 const greets = (nome :string , sobrenome?:string): string => sobrenome ? `Olá ${nome} ${sobrenome}`: `olá ${nome}`;

 console.log(greets("Gabriel"))

 setTimeout(()=>{
     console.log("Delay") //esse codigo sera sexecutado 2seg depois de sua execução
 }, 2000)


 // 7 - Tipos de objetos  
const passCoordenadas =  (coord : {x:number, y:number}) => {
    console.log("X Coordinates: " + coord.x)
    console.log("Y Coordinates: " + coord.y)
}

const obj = {x:223, y:42}

passCoordenadas(obj)

//Type Alias
type ID = string | number 

const showID = (id: ID):void => console.log(`O ID é ${id}`)

showID(213) 
showID("ds8832d") 
showID(12) 



type Status = ("ativo" |"inativo" |"pendente")
const teste: Status = "ativo"

type Produto = { nome: string ,  //Utilizar o Alias sempre no singular
                  preco: number,
                  disponivel: boolean,
                  coddigoDesconto?: string
                  descricao?: string  
                }

const detergente: Produto ={
                nome : "OMO LAVAGEM TOTAL",
                preco: 23,
                disponivel: true,
                coddigoDesconto: "bh2b3h1"
}     

type Fabricante = {
    nome:string,
    pais:string,
}

type ProdutoFinal = {
    nome:string,
    preco:number,
    fabricante:Fabricante, //Aninhando tipos Alias
}

const meuProduto: ProdutoFinal = {
    nome:"Microfone Dinâmico",
    preco: 220.99,
    fabricante:{
        nome:"Fifine",
        pais:"China",
    }
}


//Desafio
const exibirDetalhesProduto = (produto: ProdutoFinal): string=> {
    return `Produto: ${produto.nome}, Preço: R$${produto.preco}, Fabricante: ${produto.fabricante.nome}(${produto.fabricante.pais})`;
}

console.log(exibirDetalhesProduto(meuProduto))



//Literal types

const showDirection = (direction : "left" | "center" | "right") => console.log(direction)

showDirection("center")
showDirection("left")
showDirection("center")
showDirection("right")

//                        Aprofundando em interfaces
console.log("---------------------------------- INTERFACES AVANÇADAS ----------------------------------------")

interface Usuario  {
    nome:string;
    id:number;
    email?:string;
};

const usuario1: Usuario = {
    id:23123,
    nome:"Marcos"
}

//Extendendo interfaces

interface personagem {
    name: string;
    level: number;
}

interface mago extends personagem {
    elixir:number;
    spell: string[];
}

const magoEletrico: mago = {
    name: "Mago Elérico",
    level: 14,
    elixir: 4,
    spell: ["Electrify"]

}

console.log(magoEletrico)

type Personagem = {
    name: string;
    level:number;
}
 ///  


 //Declaration Marging
type Damage = {
    tower: number,
    troops: number,
    constructions:number,
}

 interface Spell {
    name: string
 }

 interface Spell {
    elixir: number,
    damage: Damage,
 }

 const newSpell: Spell = {
    name:"Fire Ball",
    elixir:4,
    damage:{
         tower: 250,
         troops: 270,
         constructions:300,
    },
 }

 console.log(newSpell)

 //desafio Gemini
 interface Livro {
    titulo:string;
    paginas: number;
 }

 type Formato = ("pdf" |"epub" |"mobi")
 interface Ebook extends Livro{
    formato:Formato
 }

 const meuEbook : Ebook = {
    titulo:"Dark Metter",
    paginas: 320,
    formato:"pdf",
 }

 console.log(meuEbook)

 // Generics

 function FirstElement<T>( arr:T[]):T|undefined{
    return arr[0]
 }


 console.log(FirstElement([1,3,23,42,]))
 console.log(FirstElement(["we","fds2","34ff"]))
 console.log(FirstElement([true, false, false, false,true,]))