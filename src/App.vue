


<template>
<<<<<<< HEAD
  <img alt="Vue logo" src="./assets/logo.png">
  <Alert/>
</template>

<script>
import Alert from './components/Alert'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Alert
=======
  <img alt="Vue logo" src="./assets/logo.png" />
  <h2>{{message}}</h2>
</template>



<script>
  export default{
      data (){
      return {
        message:'davood'
      }
    }
>>>>>>> 440b9a1a388e8d67f3c333337c95b4d097e7ee6a
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
