
<template>
  <NavBar></NavBar>
  <div class="p-5 bg-secondary">
    <h1>Welcome</h1>
    <p>lorem ipsum dolor sit amet</p>
    <div class="form-group d-flex justify-content-center">
      <AddToDo @add="CreateTodo"></AddToDo>
    </div>
  </div>

  <div class="mt-5 d-flex justify-content-center">
    <ul class="mb-3 nav nav-pills" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" type="button">Home</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" type="button">Profile</button>
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
  >
    <div
      class="mb-2 tab-pane fade show active col-4"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
      <Todo
        :items="todos"
        @delete-todo="DeleteTodo"
        @update-todo="update"
      ></Todo>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import AddToDo from "./components/AddToDo.vue";
import Content from "./components/Countent.vue";
import Todo from "./components/Todo.vue";

import apiToDo from './api/ApiToDo';

export default {
  components: {
    NavBar,
    AddToDo,
    Content,
    Todo,
  },

  data() {
    return {
      todos: [],
    };
  },
  created() {
    this.getTodos()
  },

  methods: {
    CreateTodo(value) {
      let todo = {
        done: true,
        text: value,
      };

      apiToDo
        .post(
          "/todo.json",
          { todo }
        )
        .then((res) =>
          this.todos.push({
            ...todo,
            key: res.data.name,
          })
        )
        .catch((res) => console.log(res));
    },

    update(value, index) {
      apiToDo
        .put(
          `/todo/${index}.json`,
          { todo: { text: value, done: true } }
        )
        .then(
          (res) =>
            (this.todos = this.todos.map((todo) => {
              if (todo.key == index) {
                return {
                  ...todo,
                  text: value,
                };
              }
              return todo;
            }))
        );
    },
    DeleteTodo(index) {
      console.log(index);
      apiToDo
        .delete(
          `/todo/${index}.json`
        )
        .then((res) => this.getTodos());
    },
    getTodos() {
          apiToDo
      .get(
        "/todo.json"
      )
      .then(({ data }) => {
        let todos = Object.entries(data).map(([key, value]) => {
          return {
            key,
            ...value.todo,
          };
        });
        this.todos = todos;
      })
      .catch((err) => console.log(err));
    }
  },
};
</script>