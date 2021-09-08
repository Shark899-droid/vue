<template>
  <section>
      <ul>
          <div id="item" v-for="(todo,index) in todos" :key="todo.index">
          <li :class="{hidden:todo.isDone}" @click="changeClass(index)">{{todo.thing}}</li>
    <input type="checkbox" @click="changeClass(index)"/>

          </div>
      </ul>
      <i class="material-icons w3-xxxlarge" id="add" @click="addItem">
add_circle
</i>

  </section>
</template>

<script>
export default {
props:["todos"],
data(){
    return{
        isChecked:false,
    }
},
methods:{
    changeClass(id){
        this.isChecked = this.todos[id].isDone;
        this.isChecked = !this.isChecked
        this.$emit("changeisDone",this.isChecked,id)
    },
    addItem(){
        this.$emit("addItem")
    }
}
}
</script>

<style scoped>

ul{
    list-style-type: none;
}

section{
    width: 100%;
   margin-top:2rem;
}
#item{
    width:100%;
    display:flex;
    align-items: center;
   
}

input{
    position:absolute;
    margin-top:10px;
    left:70%;
    height:20px;
    width:20px;
    
}

input:hover{
    background-color: rgb(161, 150, 150);
}

input:checked{
    background-color: green ;
}

li{
    margin-top:10px;
    margin-left: 25rem;
}

.hidden{
    text-decoration-line: line-through;
}



#add{
    color: #9ac3f1;
    margin-left:80%;
    margin-top:5rem;
    transition: color 3s , margin-left  5s;
    cursor: pointer;
}

#add:hover{
    color:#15559e;
    left:100%;
}

@media  screen and (max-width:1400px) {
    input{
        display:none;
    }

   #item{
       
       justify-content: center;
    }
    li{
       margin-left:0;
    }
}


</style>