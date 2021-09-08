<template>
  <div class="overAll">
  <div class="container">
      <router-link to="/" class="back">Back</router-link>
      <div class="header">
    <h1>Tom Doe</h1>
    <div>
    <button type="button" id="edit">Edit</button>
    <button type="button" id="delete">Delete</button>
    </div>
    </div>
    <hr/>
    <div class="section first">
        <span class="material-icons">phone_android</span>
        <span>444-444-4444</span>
    </div>
    <div class="section second">
        <span class="material-icons">mail</span>
        <span>tom@gmail.com</span>
    </div>
    <div class="section first" style="margin-top:2rem;">
        <span>44 NewMark st</span>
    </div>
    <div class="section" >
        <span>Lynn</span>
    </div>
    <div class="section second" >
        <span>MA</span>
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width:90%;
  margin-top:2rem;
}
.overAll{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
hr{
  width:100%;
  height:1px;
 border:none;
  background: rgba(173, 173, 173,0.3);
  margin-top:-5px;
}

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
}

#edit{
    height:2rem;
    background-color:blue ;
    color:white;
    margin-right:0.5rem;
    border:none;
    border-radius: 5px;
    width: 3rem;
}

#delete{
 height:2rem;
    background-color:red ;
    color:white;
    border:none;
    width: 4rem;
    border-radius: 5px;
}

.back{
    text-decoration: none;
    color:blue;
    margin-bottom:3rem;
}

.section{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height:2.5rem;
    width:100%;
    border:1px solid rgba(173, 173, 173,0.3);
}
.first{
    margin-top:0.5rem;
    border-radius:10px 10px 0 0;
}

.second{
    border-radius:0 0 10px 10px ;
}

.section span{
    margin-left:1rem;
}

.material-icons{
    font-size:18px;
    width:7px;
}

</style>