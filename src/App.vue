
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
<<<<<<< HEAD
    class="
      tab-content
      flex-column
      justify-content-center
      d-flex
      align-items-center
    "
=======
    class=" tab-content flex-column justify-content-center d-flex align-items-center"
>>>>>>> 8afa9691d3002ea9800637abdc7222346dd746f3
    id="pills-tabContent"
  >
    <div
      class="mb-2 tab-pane fade show active col-4"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
<<<<<<< HEAD
      <Todo
        :items="todos"
        @delete-todo="DeleteTodo"
        @update-todo="update"
      ></Todo>
=======
      <Todo :items="todos" @delete-todo="DeleteTodo" @update-todo="update"></Todo>
>>>>>>> 8afa9691d3002ea9800637abdc7222346dd746f3
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import AddToDo from "./components/AddToDo.vue";
import Content from "./components/Countent.vue";
import Todo from "./components/Todo.vue";
<<<<<<< HEAD
import axios from "Axios";
=======

>>>>>>> 8afa9691d3002ea9800637abdc7222346dd746f3
export default {
  components: {
    NavBar,
    AddToDo,
    Content,
    Todo,
  },
<<<<<<< HEAD

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

    //  this.todos.push(
    //    {key:Date.now(), },
    //  )
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

=======

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

>>>>>>> 8afa9691d3002ea9800637abdc7222346dd746f3

  },
};
</script>



