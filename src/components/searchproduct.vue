<template>
  <div class="search">
    <input type="search" name placeholder="Buscar produto" />
    <router-link to="/">
       <button>Cadastrar Novo</button>
    </router-link>
   
  </div>
</template>

<script>
export default {
  name: "search"
};
</script>
<style>
.search{
    display: flex;
    justify-content: center;
    width: 70%;
    margin-bottom: 3rem;
}
.search input {
  padding: 13px;
  border: 1px solid #cccc;
  border-radius: 5px;
  width: 40%;
}
.search button {
  width: auto;
  padding: 13px 30px;
  background-color: #1e52c7;
  border: none;
  border-radius: 5px;
  color: #fff;
  margin-left: 4px;
  cursor: pointer;
}

</style>