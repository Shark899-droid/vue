<template>
  <header>
      <div class="left">
         <router-link class="item" to="/">vCustomers</router-link>
         <router-link class="item" to="/">Home</router-link>
         <router-link class="item" to="/about">About</router-link>
      </div>
      <router-link class="add item" to="/add">Add Customer</router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:3rem;
    width: 100%;
    background-color:#c8c7c8;

}

.left{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left:5rem ;
    width:20rem;
    
}

.add{
    margin-right:5rem;
    
}

.item{
text-decoration: none;
color:grey;
font-size: 1.2em;
}

router-link{
    text-decoration: none;
    color:white;
}
</style>