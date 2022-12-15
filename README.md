# TypeScript iniciante Origamid

## 01 - Conceitos iniciais
<hr>

</br>

 ### Para que serve o TypeScript?

 </br>

 O TypeScript é um super-set do JavaScript, dando a ele o "poder" de adicionar tipagens.

</br>

 ### Configurações, instalações e plugins
 </br>

* Plugins:
 
    - JavaScript ES6+
    - Live Server

</br>

* Instalações necessárias:

    - Node.js
          Baixe em [Node Download](https://nodejs.org/en/download/)
            
    - TypeScript
               
         Abra um terminal ou cmd
               
         use o comando:
                 
        ~~~shell
          node install typescript -g
         ~~~

     - Visual Studio Code
              
         Baixe em [Code Download](https://code.visualstudio.com/download)
            

<hr>


## 02 - Annotation e Inference

<hr>

</br>


### Anotações

 Anotações em variáveis, para explicitar seu tipo.

Exemplo: `const produto: string = "Caixa";`

Para mais exemplos veja na pasta **02_Modulo**

### Inferência

É quando o typescript já sabe qual é o tipo e por baixo dos panos realiza a anotação do mesmo.

exemplo:  `const produto = "Caixa";`


### Tipos

Temos String , number e boolean.

string usado para cadeias de strings.

number usado para valores numéricos.

boolean usado para valores como true ou false.


**Não podemos confundir string com String, number com Number e boolean com Boolean, pois com a letra inicial maiúscula é a função construtora de respectivos tipos.**


### Union Type 

Podemos definir para uma variável mais de um tipo para ser atribuído, dando poder de escolha. Exemplo: 

~~~typescript 
const valorEsponja : string | number = '200';
~~~

Note o operador `|`, este é usado para passarmos mais valores. Podendo formar uma cadeia de tipos. 

Acompanhe o exercício no módulo 02 para mais detalhes.


### **Types e interfaces**

**Type**, palavra chave reservada para criar um 'alias' para um tipo customizado.

Exemplo: 

- Posso 'tipar' um objeto desta maneira abaixo, para informar o que é esperado por ele.

~~~typescript

type ObjectProps = {
    nome: string;
    valor: number;
    ativo: boolean
}

// E usar da seguinte maneira

function validaUsuario(user: ObjectProps) {
    console.log(`User: ${user.nome}, está: ${user.ativo ? 'ativo' : 'inativo'}`);
}

validaUsuario({
    nome: 'Lucas',
    valor: 1,
    ativo: true
})

~~~

**Interface**

Palavra reservada para criação de interfaces, sua aplicação é parecida com a **type** porém interfaces podem implementar outras interfaces, herdando características. Mais para frente do curso será explicado.

Exemplo usando interface:

~~~typescript

interface iDataEmpresaProps {
  nome: string;
  fundacao: number;
  pais: string;
}

interface iDataProps {
  nome: string;
  preco: number;
  descricao: string;
  garantia?: string;
  seguroAcidentes?: string;
  empresaFabricante: iDataEmpresaProps;
  empresaMontadora: iDataEmpresaProps;
}

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
  console.log(data);
}

fetchProduct();

function showProduct(data: iDataProps) {
  document.body.innerHTML = `
    <div>
        <h2>${data.nome}</h2>
        <p>R$ ${data.preco} </p>
        <p>${data.descricao} </p>

        <div>
          <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
        </div>
        <div>
          <h3>Montadora: ${data.empresaMontadora.nome}</h3>
        </div>
    </div>
  `;
}

~~~


### Arrays

Para lidar com arrays, podemos especificar o tipo destas maneiras:

```typescript
const livros : string[] = ['Konto', 'Domnen', 'Harry Potter'];
```

ou

```typescript
const livros : Array<string> = ['Konto', 'Domnen', 'Harry Potter'];
```

### Null e Undefined

**Null**

null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.

Podemos prevenir tipos null usando `if` e ou `optional chaining`

```typescript

const button = document.querySelector('button');

if(button) {
  button.click();
}

if(button !== null){
  button.click();
}

button?.click();

```

## Optional Chaining

É o operador `?` usado para casos onde podemos checar previamente se um propriedade existe.

Exemplo: 

```typescript

button?.click()

```

Se o button existir e for diferente de null ou undefined, poderemos acessar o método click, evitando erros na compilação.

## Typeof e instanceof 

**Typeof**

Usamos para definir se o retorno é  um tipo esperado, como `string`, `number` ,`boolean` ou `object`

Exemplos no 02_Modulo.

**Instanceof**

Com a palavra-chave instanceof podemos verificar se um objeto é uma instância (foi construído ou herda) de uma função construtora (class).

Exercício no módulo 03

## Generics

Um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface. Esse tipo poderá ser indicado no momento do uso da função através de `<Tipo>`.

Acompanhe os exemplos no 03_Modulo;

