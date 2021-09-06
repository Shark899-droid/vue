<template>
  <div class="container">
      <span class="material-icons" id="close" @click="close">close</span>
      <h1 style="color:white">Add Item</h1>
      <textarea v-model="text"></textarea>
      <button type="button" @click="add">ADD ITEM</button>

  </div>
</template>

<script>
export default {
data(){
    return{
        text:""
    }
    },
methods:{
        add(){
            this.$emit("text",this.text)
            this.text=""
        },
        close(){
            this.$emit("close")
        }
    }
}
</script>

<style scoped>


.container{
    position:absolute;
top:30%;
left:50%;
transform: translate(-50%,-30%);
width: 30%;
display: flex;
flex-direction:column ;
justify-content: center;
align-items: center;
background-color: rgba(21, 85, 158,0.5);
border-radius: 20px;
padding:40px;
   }

   textarea{
       resize: none;
       
       background-color: rgba(169, 196, 226,0.5);
       outline: none;
       border:none;
       height:10rem;
       width:20rem;
        margin-top:2rem;
        font-size:2em;
   }

   button{
       margin-top:4rem;
       background-color: #a9c4e2;
       color:white;
       border:none;
       height:3rem;
       width:8rem;
       border-radius:20px;
       transition: background-color 3s;
       transition: color 3s;

   }

   button:hover{
       background-color: rgb(58, 97, 144);
       color:#a9c4e2;
     
   }


#close{
    position:absolute;
    top:1rem;
    right:1rem;
    cursor: pointer;
}

@media screen and (max-width:1164px){
    textarea{
        width:10rem;
        height:5rem;
        font-size:1em;
    }
}

@media screen and (max-width:764px){
    .container h1{
        font-size:20px;
    }
    
    textarea{
        width:10rem;
        height:5rem;
        font-size:1em;
    }
}

@media screen and (max-width:551px){
    .container{
        width:70%;
    }
    
    .container h1{
        font-size:15px;
    }
    
    textarea{
        width:10rem;
        height:5rem;
        font-size:1em;
    }
}
</style>