<template>
<div>
  <header-main :todos="todos"></header-main>
  <section-main :todos="todos" @changeisDone="change" @addItem="showModal"></section-main>
  <add :class="{hid:isModalHidden}" @text="text" @close="close"></add>
  </div>
</template>

<script>
export default {
 data(){
   return{
     todos:[
       {
         id: "0",
         thing:"Andare a mangiare",
         isDone:false
       },
       {
         id: "1",
         thing:"Chiamare amore mio",
         isDone:false
       },
       {
         id: "2",
         thing:"Ciao",
         isDone:false
       },
       {
         id: "3",
         thing:"Come va ?",
         isDone:false
       },
     ],
     isModalHidden:true
   }
 },
 methods:{
change(checked,id){
this.todos[id].isDone = checked;
},
showModal(){
  this.isModalHidden = !this.isModalHidden;
},
text(text){
  const news = {
    id: new Date().toISOString(),
    thing:text,
    isDone:false
  }
  this.todos.push(news);
  localStorage.setItem("things",text)
},
close(){
  this.isModalHidden = true;
}
 }
}
</script>

<style>
body{
margin:0;
font-family: muli, sans-serif;
font-weight: 700;
font-style: italic;
}
.hid{
visibility: hidden;
}

</style>
