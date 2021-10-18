<template>
    <ul class="nav nav-tabs" id="myTab" role="tablist">

  <li class="nav-item" role="presentation" v-for="({name} , index) in items" :key="index"  >
    <button class="nav-link" :class="{ 'active' : CourentTab == name } "  @click="CourentTab  = name "  id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">{{ name }}</button>
  </li>

</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade active show " id="home" role="tabpanel" aria-labelledby="home-tab" v-for="({content, name} , index) in items" :key="index" v-show="CourentTab == name" >{{content}}</div>
</div>
</template>

<script>
    export default {
        props:[
           'items'
        ],
        data(){
            return {
                CourentTab: "Home",
            }
        }
    }
</script>