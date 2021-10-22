
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
    class=" tab-content flex-column justify-content-center d-flex align-items-center"
    id="pills-tabContent"
  >
    <div
      class="mb-2 tab-pane fade show active col-4"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
      <Todo :items="todos" @delete-todo="DeleteTodo" @update-todo="update"></Todo>
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
       {key:Date.now(), done: true, text:value},
     )
    },
     DeleteTodo(index){
       this.todos = this.todos.filter(todo => todo.key != index)
     },

     update(value, index){
       console.log(value , index);
       
        this.todos = this.todos.map((todo) => {
         if(todo.key == index){
           return {
             ... todo,
            text :value
           }
         }
            return todo
        })
        
     }


  },
};
</script>



