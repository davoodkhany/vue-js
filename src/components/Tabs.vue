<template>
  <h2>{{ title }}</h2>

  <ul class="nav nav-tabs" id="myTab" role="tablist" v-if="items">
    <li
      class="nav-item"
      role="presentation"
      v-for="({ name }, index) in items"
      :key="index"
    >
      <button
        class="nav-link"
        :class="{ active: CourentTab == name }"
        @click="CourentTab = name"
        type="button"
      >
        {{ name }}
      </button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div
      class="tab-pane fade active show"
      v-for="({ content, name }, index) in items"
      :key="index"
      v-show="CourentTab == name"
    >
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: [{ name: "خانه", content: "خانه ما" }],
    },
    title: {
      required: true,
    },
  },
  data() {
    return {
      CourentTab: "Home",
    };
  },
};
</script>