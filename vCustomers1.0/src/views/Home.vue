<template>
<div class="overAll">
  <div class="container">
    <h1>Customers</h1>
    <hr/>
    <input type="text" placeholder="Enter Last Name..."/>
  <div class="headers">
      <span style="margin-right:12rem;">First Name</span>
      <span style="margin-right:12rem;">Last Name</span>
      <span>Email</span>
  </div>
  <hr class="afterHr"/>
  <div class="customers">
    <span style="margin-right:15rem;">Tom</span>
      <span style="margin-right:15rem;">Doe</span>
      <span style="margin-right:28rem;">tom@gmail.com</span>
      <router-link to="/customers/1" class="View" >View</router-link>
  </div>
  </div>
  </div>
</template>
<script>


export default {
  name: 'Home',
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

input{
  width:100%;
  height:2rem;
  border: 1px solid rgba(173, 173, 173,0.5);
  border-radius: 5px;
}

input:focus{
  outline: none;
}

.headers{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top:1.3rem;
  font-weight: bold;

}
.customers{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: rgba(173, 173, 173,0.2);
  height:3rem;
  border-bottom:1px solid rgba(173, 173, 173,0.3);
 
}

.View{
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: 2rem;
  width:3rem;
  border:none;
  border:1px solid rgba(173, 173, 173,0.4);
  text-decoration: none;
  color: grey;
}

.afterHr{
  margin-top: 12px;
  height: 2px;
  background: rgba(173, 173, 173,0.5);
  margin-bottom:0; 
}
</style>
