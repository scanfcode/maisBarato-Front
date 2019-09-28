<template>
  <div class="hello">
    <div class="container">
    <h1>Cadastro de produtos</h1>
    <div class="formulario">
        <form action="" id="formulario">
            <Label>Produtos</Label>
            <input type="text" id="produto" placeholder="Arroz">
            <label for="">Preço</label>
            <input type="" id="preco" onkeypress=" onlynumber();" placeholder="R$ 2,99">
            <label for="">Comercio</label>
            <select name="carlist" class="requerido" form="carform" id="comercio">
                <option value="" >Supermercados</option>
                <option >EPA</option>
                <option >Nova Safra</option>
                <option >BH Supermercados</option>
                <option >MartMinas</option>
            </select>
            <label for="">Categoria</label>
            <select name="" class="requerido" id="categoria">
                <option value="">Categoria</option>
                <option>Limpeza</option>
                <option >Alimentação</option>
                <option >Higiene</option>
            </select>
            <button type="submit" id="insert">Inserir</button>
        </form>

    </div>

    <!-- <table id="myTable">
        <tr>
            <th>Produtos</th>
            <th>Local</th>
            <th>Preço</th>
            <th>Categoria</th>
        </tr>
        <tr>

        </tr>

    </table> -->
</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
            margin: 20px auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 20px;
        }

        h1 {
            font-size: 23px;
            color: #828181cc
        }

        .formulario {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin: 20px;
        }

        form {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        form input {
            border: 1px solid #cccc;
            border-radius: 5px;
            padding: 15px;
            margin: 5px 0;
        }

        /* form input:focus {
            border: 1px solid #29c329;
            } */
            .danger{
                border: 1px solid #e0b5b5;  
            }
            .sucess{
                border: 1px solid #e0b5b5;
            }
            select{
                padding: 15px;
                border-radius: 5px;
                background-color: #fff;
                border: 1px solid #cccc;
                color: #757575
            }
            button {
                background-color: #1e52c7;
                color: #fff;
                padding: 20px 30px;
                border: none;
                width: 100%;
                margin-top: 20px;
                border-radius: 5px;
                cursor: pointer;

            }
            @media(min-width: 821px){
              button{
                width: 30%;
                margin: 20px auto;
            }
        }
        table {
            margin-top: 20px;
        }

        th {
            width: 200px;
            color: #545252;
            text-transform: uppercase;
        }

        tr {
            text-align: -webkit-match-parent;
        }

</style>
