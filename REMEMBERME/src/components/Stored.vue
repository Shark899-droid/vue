<template>

<div class="stored" v-for="(remember,index) in remembers" :key="remember.id">
  <div class="Dlt">

  <h1>{{remember.title}}</h1>
<button type="button" @click="deleteOne(index)">Delete</button>
  </div>
  <h3>{{remember.description}}</h3>
  <a :href="remember.link">View Resources</a>

</div>

</template>

<script>
export default {
props:["remembers","showAddvar","showStoredvar"],
methods:{
  deleteOne(id){
    this.$emit("deleteOne",id)
  }
}
}
</script>

<style scoped>
.stored{  
  width:80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top:3rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding:20px;
}

.stored h1{
margin-bottom:1rem;
}

.stored h3{
    margin-bottom:0.5rem;
}

button{
    height:2.5rem;
    width:5rem;
    color: purple;
    background-color: white;
    border:none;
    font-weight: bold;
    cursor: pointer;
}

a{
    text-decoration: none;
    color:orange;
}

.Dlt{
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>