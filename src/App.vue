
<template >
  <img alt="Vue logo" src="./assets/logo.png" />
  <tabs :items="tabz"></tabs>
  <tabs :items="tabz1"></tabs>
</template>


<script>
  import Tabs from './components/Tabs.vue'




  export default {
          components:{
            Tabs
          },
           data() {

          return {
            tabz: [
              {
                id: 1,
                name: "home",
                content: "homeContent",
              },
              {
                
                name: "profile",
                content: "profileContent",
              },
              {
                id: 3,
                name: "contact",
                content: "contactContent",
              },
            ],
             tabz1: [
              {
                id: 1,
                name: "home",
                content: "homeContent",
              },
              {
                
                name: "profile",
                content: "profileContent",
              },
            ],
          };
        },
 
        methods: {
          clickButton() {
            this.tab_id = event.target.id;
          },
        },
        }
  
</script>

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
