<template>
  <input class="form-control" placeholder="i want to do ..." v-model="todo" />
  <button class="btn btn-primary" @click="Create()">Add</button>
</template>


<script>
export default {
  emits: ["add"],
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    Create() {
        this.$emit ('add',this.todo)
        this.todo = "";
    },
  },
};
</script>

