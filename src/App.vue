<template>
  <div id="app">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <router-link to="/">
               <li>Home</li>
            </router-link>
            <router-link to="/produtos">
               <li>Produtos</li>
            </router-link>
            <a href="#">
              <li>Endereços</li>
            </a>
            <a href="#">
              <li>Comércios</li>
            </a>
            <a href>
              <li>Promoções</li>
            </a>
          </ul>
        </div>
      </nav>
      
       <router-view></router-view>
        </div>
</template>

<script>
// import Register from './components/Registerproduct.vue'
import Dash from './components/dashCard.vue'

export default {
  name: "app",
  components:{
    Dash
  }
};
</script>

<style>

</style>
