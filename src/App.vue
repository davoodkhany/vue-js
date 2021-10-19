<script>
import HelloWorld from "./components/HelloWorld.vue";

import Tabs from "./components/Tabs.vue";

export default {
  components: {
    Tabs, 
  },
  data() {
    return {
      tabs: [
        { name: "Home", content: "My Home" },
        { name: "About", content: "My Name Is Davood" },
        { name: "Contact", content: "09199312019" },
      ],
    };

  },
      methods:{
      eventTAbClear(){
        this.tabs = [];
      }
    }
};
</script>

<template>
  <img  alt="Vue logo" src="./assets/logo.png" />
  <Tabs @ClearTab="eventTAbClear()" title="Tabs and one" :items="tabs"></Tabs>
  
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
