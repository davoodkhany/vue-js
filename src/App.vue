
<template>
  <NavBar></NavBar>
  <div class="bg-secondary p-5">
    <h1>Welcome</h1>
    <p>lorem ipsum dolor sit amet</p>
    <div class="form-group d-flex justify-content-center">
      <AddToDo @add="CreateTodo"></AddToDo>
    </div>
  </div>

  <div class="d-flex justify-content-center mt-5">
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          Home
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          Profile
        </button>
      </li>
    </ul>
  </div>
  <div
    class="
      tab-content
      flex-column
      justify-content-center
      d-flex
      align-items-center
    "
    id="pills-tabContent"
  >
    <div
      class="tab-pane fade show active col-4 mb-2"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
      <Todo :items="todos" @Delete="DeleteTodo"></Todo>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import AddToDo from "./components/AddToDo.vue";
import Content from "./components/Countent.vue";
import Todo from "./components/Todo.vue";

export default {
  components: {
    NavBar,
    AddToDo,
    Content,
    Todo,
  },

  data() {
    return {
      todos: [
        {
          key: 1,
          done: true,
          text: "davood khany",
        },
        {
          key: 2,
          done: true,
          text: "ali khany",
        },
      ],
    };
  },
  methods: {
    CreateTodo(value) {
     this.todos.push(
       {key:3, done: true, text:value},
     )
    },
     DeleteTodo(index){
       this.todos = this.todos.filter(todo => todo.key != index)
     }

  },
};
</script>



