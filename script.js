

//PASSO 01 - Precisamos copiar a estrutura modelo pizza-item no arquivo index.html, deixamos o display como
//none justamente para não mostrar. Ela irá aparecer quando preenchemos a estrutura dela com dados.
//Esse dados estão no arquivo pizzas.js. Dessa forma, criamos a estrutura, preenchemos ela e a mostramos na tela.

//A todo momento estaremos fazendo manipulação de elementos, iremos utilizar muito document.querySelector().
//document.querySelector(".pizza-area").innerHTML -->  Vai modificar o HTML interno do elemento, podendo 
//sobrescrever ou remover todos os nós filhos do mesmo.
//Agora se usar document.querySelector(".pizza-area").append( pizzaItem ) -->Vai adicionar novos nós de 
//elementos para o elemento atual, ou seja, uma body de uma tabela poderia ter novas tr dada uma ação.

let q = (ele)=>document.querySelector(ele);

pizzaJson.map((item, index)=>{
   let pizzaItem = q(".models .pizza-item").cloneNode(true);

        pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name; //não utilize document.querySelector por
        //que você estaria selecionando a partir do documento todo, não especificamente do .pizza-item.
        pizzaItem.querySelector(".pizza-item--img img").src = item.img;
        pizzaItem.querySelector(".pizza-item--price").innerHTML = parseFloat(`${item.price}`)+" R$";

   q("main .pizza-area").append(pizzaItem);
})