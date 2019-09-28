
<template>
  <div class="list">
    <search></search>
    <table id="myTable">
      <tr>
        <th>Produtos</th>
        <th>Local</th>
        <th>Preço</th>
        <th>Categoria</th>
      </tr>
      <tr></tr>
    </table>
     <router-view></router-view>
  </div>
</template>
<script>
import Search from './searchproduct.vue'
import dash from './dashCard'

export default {
  name: 'list',
  components: {
    Search,
    dash
  },
};
</script>
<style>
.list{
   display: flex;
   flex-direction: column;
   align-items: center;

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
  text-align: center;
}
</style>