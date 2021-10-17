
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
   <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation" v-for="(tab , index) of tabs" :key="index">
          <button
            class="nav-link"
            :class="tab_id == index ? 'active' : ''"
            type="button"
            :id="index"
            @click="clickButton()"
          >
            {{ tab.name }}
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade"
          v-for="(tabContent , index) in tabs"
          :class="tab_id == index ? 'active show' : '' "
          :id="index"
          role="tabpanel"
          aria-labelledby="home-tab" :key="index"
        >
          {{ tabContent.content }}
        </div>
      </div>
</template>


<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  export default {
           data() {
          return {
            tab_id: 1,
            tabs: [
              {
                id: 1,
                name: "home",
                content: "homeContent",
              },
              {
                id: 2,
                name: "profile",
                content: "profileContent",
              },
              {
                id: 3,
                name: "contact",
                content: "contactContent",
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
