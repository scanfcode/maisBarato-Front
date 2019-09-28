<template>
    <div class="dash">
        <div class="card color-yellow">
             <h1>Alimentação</h1>
             <p>Nome do estabelecimento</p>
        </div>
        <div class="card color-blue">
             <h1>Higiene</h1>
             <p>Nome do estabelecimento</p>
        </div>
       <div class="card color-green">
             <h1>Limpeza</h1>
             <p>Nome do estabelecimento</p>
        </div>
       <div class="card color-red">
             <h1>Lazer</h1>
             <p>Nome do estabelecimento</p>
        </div>
       
       
         <router-view></router-view>

    </div>

</template>

<script>
export default {
    name: 'dash'
}
console.log('Executando')
</script>

<style>
 .dash{
     display: flex;
     justify-content: center;

 }
 .card{
     width: 20%;
     height: 120px;
     margin: 0px 20px;
     border-radius: 5px;
     padding: 2px 30px;
     cursor: pointer;
     box-shadow: 0px 0px 15px 4px rgba(217,217,217,1);
 }
 .card{
     display: flex;
     flex-direction: column;
     justify-content: center
     
 }
 .color-blue{background-color: #7bd6df}
 .color-green{background-color: rgb(87, 223, 177)}
 .color-red{background-color: rgb(255, 81, 81)}
 .color-yellow{background-color: rgb(255, 233, 109)}
</style>