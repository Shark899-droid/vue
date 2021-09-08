<template>
<div>
    <modal-item v-if="showModal" @hideModal="hideModal"/>
  <header>
    <h1>RememberMe</h1>
  </header>
  <section>
  <div class="selectors">
    <button :class="{push:showStoredvar,btnStored:showAddvar}"><a href=""  @click.prevent="showStored">Stored Resources</a></button>
    <button  :class="{push:showAddvar,btnAdd:showStoredvar}"><a href=""  @click.prevent="showAdd">Add Resources</a></button>
    </div>
   <add-item v-if="showAddvar" @sendData="sendData"/>
   <stored-item v-if="showStoredvar" :remembers="remembers"  @deleteOne="deleteOne" />
  </section>
    </div>
</template>

<script>


export default {
data(){
  return{
    showAddvar : false,
    showStoredvar: true,
    showModal:false,
    remembers: [
      
      ]
  }
},
methods:{
  showStored(){
  this.showStoredvar = true
  this.showAddvar = false
  },
  showAdd(){
    this.showAddvar = true
    this.showStoredvar = false
  },
  deleteOne(id){
    this.remembers.splice(id,1)
  },
  sendData(title,description,link){
    const newRemember = {
      id: new Date().toISOString(),
      title:title,
      description:description,
      link:link
    }

if(title !== "" && description !== "" && link !== ""){
    this.remembers.push(newRemember)}
    else{
      this.showModal = true
    }
  },
  hideModal(){
    this.showModal = false
  }
},
computed:{

}
}
</script>

<style scoped>

section{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
header{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:6rem;
  background-color: rgb(133, 40, 40);
  color:white
}

.selectors{
  width:80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top:5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height:5rem;
  border-radius: 20px;
  padding:20px;
  margin-left:10px;
}


.selectors a{
  text-decoration: none;
}

.push{
  height:2.5rem;
  background-color: rgb(156, 107, 202);
  color:white !important;
  font-weight:bold;
  border:none;
  text-decoration: none;
  border-radius:15px;
  padding:10px;
}

 .btnStored{
  height:2.5rem;
  background-color: white;
  font-weight:bold;
  border:none;
  text-decoration: none;
  padding:10px;
}

.btnAdd{
  height:2.5rem;
  background-color: white;
  font-weight:bold;
  border:none;
  text-decoration: none;
  padding:10px;
} 


</style>
