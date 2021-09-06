<template>
  <div id="head">
      <div id="date">
<h1>{{takeDate}}</h1>
<h3>{{todos.length}} tasks</h3>
</div>
  </div>
</template>

<script>
export default {
props:["todos"],
computed:{
  takeDate(){
    const date = new Date().toUTCString();
    return date;
  }
}
}
</script>

<style scoped>

#head{
    width: 100%;
    height:8rem;
    background-color:#a9c4e2;
    border-radius: 0 0 100% 100%}

#date{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:white;

}

#date h1{
 padding:0;
 margin-bottom: -1rem;
 margin-top:1rem;
}

@media  screen and (max-width:534px) {
 #date h1{
   font-size:25px;
 }

  #date h3{
   font-size:25px;
 }
}

@media  screen and (max-width:338px) {
 #date h1{
   font-size:22px;
 }

  #date h3{
   font-size:22px;
 }
}

@media  screen and (max-width:320px) {
 #date h1{
   font-size:20px;
 }

  #date h3{
   font-size:20px;
 }
}

@media  screen and (max-width:285px) {
 #date h1{
   font-size:17px;
 }

  #date h3{
   font-size:20px;
 }
}
</style>