
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
          type="button"
        >
          Home
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          type="button"
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
      align-items-center"
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
import axios from "Axios";

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

      ],
    };
  },
  created(){
    axios.get('https://vuejs-ca936-default-rtdb.europe-west1.firebasedatabase.app/todo.json')
    .then( ({data}) => {
      let todos = Object.entries(data).map(([key, value]) => {
        return {
          key,
          ... value.todo
        }
      })
      this.todos = todos;
    })
    .catch(err => console.log(err))
  },

  methods: {
    CreateTodo(value) {
      
      let todo ={
      done: true, 
      text:value
      }

      axios.post('https://vuejs-ca936-default-rtdb.europe-west1.firebasedatabase.app/todo.json', {todo})
      .then(res =>

        this.todos.push({
          ... todo,
          key:res.data.name
        })
      )
      .catch(res => console.log(res))
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
      
     },
      DeleteTodo(index){

console.log(index);
      axios.delete(`https://vuejs-ca936-default-rtdb.europe-west1.firebasedatabase.app/todo/${index}.json`)
      .then(res =>{
          this.todos = this.todos.filter(todo => todo.key != index)
      })
      
     },

  }

}
</script>