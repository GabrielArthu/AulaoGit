# Resumo estudos Type Alias vs. Interface em TypeScript


## 1. Type Alias 

Um `Type Alias` permite que você crie um novo nome (um apelido) para qualquer tipo existente. Sua principal característica é a flexibilidade.

**Sintaxe:** Usa a palavra-chave `type`.

```typescript
type NomeDoTipo = tipo_existente; // Utilizando o sinal de igual (=)
```

### Casos de Uso Comuns

#### a) Apelidar Uniões de Tipos

Torna o código mais limpo e legível ao evitar a repetição de tipos complexos.

```typescript
// Sem Type Alias
let meuId: (string | number); //  Parênteses opcionais 

// Com Type Alias
type ID = string | number; // Mais legível 
let meuId: ID;
```

#### b) Definir a Forma de um Objeto

Funciona de maneira muito similar a uma interface para descrever objetos.

```typescript
type Usuario = {
  id: number;
  nome: string;
  email?: string; // ? neste caso pode funcionar como um falsy
};

const novoUsuario: Usuario = { id: 1, nome: "Carlos" };
```

#### c) `extends`  com Interseção (&)

Um `type` pode combinar as propriedades de outros tipos usando o operador `&` (interseção), alcançando um resultado similar ao `extends` de uma interface.

```typescript
type Pessoa = {
  nome: string;
};

type Contato = {
  email: string;
  telefone: string;
};

// Cliente terá todas as propriedades de Pessoa E de Contato
type Cliente = Pessoa & Contato;

const cliente: Cliente = {
  nome: "Ana",
  email: "ana@email.com",
  telefone: "12345-6789"
};
```

## 2. Interface

Uma `interface` é uma estrutura que define um "contrato" no seu código. É focada primariamente em descrever a forma de objetos e as classes que os implementam, sendo uma ferramenta poderosa para modelagem orientada a objetos.

**Sintaxe:** Usa a palavra-chave `interface` (sem o `=`).

```typescript
interface NomeDaInterface {
  propriedade: tipo;
}
```

### Características Exclusivas

#### a) Herança com `extends`

Interfaces podem herdar de outras, criando hierarquias de tipos de forma clara e intuitiva.

```typescript
interface Personagem {
  name: string;
  level: number;
}

// Mago herda tudo de Personagem e adiciona 'elixir' e 'spell'.
interface Mago extends Personagem {
  elixir: number;
  spell: string[];
}

const magoEletrico: Mago = {
  nome: "Mago Elétrico",
  level: 14,
  elixir: 4,
  spell: ["Electrify"],
};

console.log(magoEletrico); // exibindo o objeto 
```

#### b) Declaration Merging (Mesclagem de Declaração)

Se você declarar a mesma interface múltiplas vezes, o TypeScript as unirá em uma única definição. Isso é útil para estender tipos de bibliotecas externas.

```typescript

//Iniciando um type para mesclarmos os conceitos
type Damage = { 
  tower: number,
  troops: number,
  constructions: number,
};

// Primeira declaração
interface Spell {
  name: string,
};

// Segunda declaração (em outro lugar do código)
interface Spell {
  elixir: number,
  damage: Damage,
};

const newSpell: Spell = {
  name:"Fire Ball",
  elixir:4, //Inicio dos atributos da seguinda declaração
  damage:{
     tower: 250,
     troops: 270,
     constructions: 300,
  }
};

console.log(newSpell);





