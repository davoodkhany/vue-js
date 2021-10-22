<template>
  <div class="mb-2 card" v-for="(todo) in items" :key="todo.key" >
    <div
      class="card-body d-flex justify-content-between align-items-center"
    v-if="edit == false"
    >
      {{ todo.text }}

      <div class="form-group">
        <button  
          class="btn btn-primary btn-sm form-contoll"
          @click="Edit(todo.key)"
        >
          edit
        </button>
        <button
          class="btn btn-danger btn-sm form-contoll"
          @click="$emit('delete-todo', todo.key)"
        >
          Delete
        </button>
      </div>
    </div>
    <div
      class="card-body d-flex justify-content-between align-items-center"
      v-if="edit == true && todo.key == key"
    >
      <div class="d-flex form-group">
        <input class="form-contoll" type="text" v-model="todotext" />
        <button  
          class="form-control btn btn-danger btn-sm"
          @click="update(todotext, key)"
        >
          update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["delete-todo", "update-todo"],

  props: {
    items: {
      required: true,
    },
  },

  data() {
    return {
      edit: false,
      key:0,
      todotext: "",
    };
  },

  methods: {
    Edit(key) {
      this.todotext = this.items.text;
      this.edit = true;
      this.key = key;
    },
    update(value, index) {
      this.edit = false;
      this.$emit("update-todo", this.todotext, index );
      
    },
  },
};
</script>