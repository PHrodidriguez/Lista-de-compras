 var produtos = [];

document.querySelector('button')
.addEventListener('click', () => {
    var produto = document.querySelector('input[name=Produto]');
    var valor = document.querySelector('input[name=valor]');

    produtos.push({

        nome: produto.value,
        preco: valor.value

    })
    let listaProduto = document.querySelector('.Price_product');
    let soma = 0;
    listaProduto.innerHTML = " ";
    produtos.map(function(val){
        soma+=parseFloat(val.preco);
        listaProduto.innerHTML+=`
    <li class="Price_product2">
        <ul>
            <h3>`+val.nome+`</h3><span>R$`+val.preco+`</span><span class="xis">X</span>
        </ul>
    </li>

    `;



    });
    soma = soma.toFixed(2);
    produto.value = " ";
    valor.value = " "
    
    let Soma = document.querySelector('.total');
    Soma.innerHTML = 'Valor total: R$'+soma

    const remove = document.querySelector(".limpar");
    remove.addEventListener('click',()=>{
        produtos = [];
        
        document.querySelector('.Price_product').innerHTML = "";
        document.querySelector('.total').innerHTML = "<h2>Valor total: R$<span>0,00</span></h2>";
        
    })

});




