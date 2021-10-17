<script>

    export default {
        props:[
            'items'
        ],
        data() {
          return {
            tab_id: 1,
          };
        },
 
        methods: {
          clickButton() {
            this.tab_id = event.target.id;
          },
        },
      };
    
</script>

<template>
     <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation" v-for="(tab , index) of items">
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
          v-for="(tabContent , index) in items"
          :class="tab_id == index ? 'active show' : '' "
          :id="index"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {{ tabContent.content }}
        </div>
      </div>
</template>

