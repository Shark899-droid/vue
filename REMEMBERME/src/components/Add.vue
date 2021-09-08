<template>
  <div class="forms">
    <form>
      <label>Title</label>
      <input type="text" v-model="title"/>

       <label style="margin-top:0.8rem;">Decription</label>
      <textarea v-model="description"></textarea> 

       <label style="margin-top:0.8rem;">Link</label>
      <input v-model="link" type="text"/>

      <button type="button" @click="sendData">Add resource</button>


    </form>
    </div>
</template>

<script>
export default {
data(){
  return{
    title:"",
    description:"",
    link:""
  }
},
  methods:{
    sendData(){
      this.$emit("sendData",this.title,this.description,this.link)
      this.title = ""
      this.description = ""
      this.link = ""
    }
  }
}
</script>

<style scoped>
.forms{
  width:80%;
 
  margin-top:3rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 20px;
}
form{

     display: flex;
  flex-direction:column ;
  justify-content: center;
  align-items: flex-start;
    margin-left:20px;
    padding-top: 2rem;
       padding-bottom: 2rem;
    }

form input{
    width:95%;
    height:1.5rem;
       border:1px solid grey;
       outline: none;
}

input:focus{
    background-color: rgb(171, 141, 202);
    border:2px solid purple;
    outline: none;
}

form textarea{
    width: 95%;
    resize: none;
    height: 4rem;
    border:1px solid grey;
     outline: none;
}

textarea:focus{
     background-color: rgb(171, 141, 202);
      border:2px solid purple;
       outline: none;
}

label{
    font-weight: bold;
    font-size:1em;
}

button{
    margin-top: 0.8rem;
    height:2.7rem;
    width:8rem;
    background-color:purple ;
    color:white;
    border:none;
    font-weight: bold;
}
</style>