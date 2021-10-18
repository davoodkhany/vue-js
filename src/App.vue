<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Tabs from "./components/Tabs.vue";

export default {
    components:{
    Tabs,
  },
data(){


  return{
     
  tabs: [
    { name: "Home", content: "my Home" },
    { name: "About", content: "my name is davood" },
    { name: "Contact", content: "09199312019" },
  ],
  }
}
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Tabs :items="tabs"></Tabs>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
