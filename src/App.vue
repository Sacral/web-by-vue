<template>
  <div id="app">
    
    <nav_menu msg="Welcome to Your Vue.js App"/>


    <banner_ban></banner_ban>

    <content1></content1>
    <!--<footerfooter></footerfooter>-->
    <footer2></footer2>
  
  </div>
</template>

<script>
import nav_menu from './components/nav_menu.vue'
//import footerfooter from './components/footerfooter.vue'
import banner_ban from './components/banner_ban.vue'
import content1 from './components/content1.vue'
import footer2 from './components/footer2.vue'

export default {
  name: 'App',

  components: {
    
    nav_menu,
    banner_ban,
    content1,
    footer2
    //footerfooter
  }
};
</script>

<style scoped>
#app{

height:100%;

}