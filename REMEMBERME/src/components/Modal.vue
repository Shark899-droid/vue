<template>
<div class="all">
  <div class="modal">
      <header>
          <h1>Invalid Input</h1>
      </header>
      <section>
          <p style="margin-bottom:1rem;">Unfortunatelly, at least one input value is invalid.</p>
          <p>Please check all inputs and make sure you enter at least a few characters int each input field;</p>
          <div id="Btndiv">
          <button type="button" @click="hideModal">Okay</button>
            </div>
      </section>
  </div>
  </div>
</template>

<script>
export default {
methods:{
    hideModal(){
        this.$emit("hideModal")
    }
}
}
</script>

<style scoped>

.all{
    position:absolute;
    width: 100%;
    height:100vh;
    background-color: rgba(0,0,0,0.5);
}

.modal{
    position:absolute;
    top:25%;
    left:50%;
    transform: translate(-50%,-25%);
    width:80%;
    border-radius:20px;
    display: flex;
    flex-direction: column;
    
}

header{
    height:2rem;
    background-color: purple;
    display:flex ;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px 20px 0 0;
    padding:20px;
}

section{
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: white;
    height:15rem;
    border-radius: 0 0 20px 20px;
}

section button{
height:2.5rem;
width:6rem;
background-color:purple;
border:none;
color:white;
}

#Btndiv{
    width: 100%;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    margin-top:4rem;
}
</style>