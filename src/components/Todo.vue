<template>

    <div class="card mb-2" v-for="(todo, index) in items" :key="index">
        <div class="card-body d-flex justify-content-between align-items-center ">
            {{ todo.text }}
            <div class="form-group ">
                <button class="btn btn-primary btn-sm form-contoll">edit</button>
                 <button class="btn btn-danger btn-sm form-contoll" @click="$emit('delete', todo.key)">Delete</button>
            </div>
        </div>
        
    </div>

</template>

<script>

    export default { 
        emits:[
            'delete'
        ],
        props:[
            'items'
        ],

        data(){
            return{ 

            }
        },

        methods:[

        ],

    }

</script>