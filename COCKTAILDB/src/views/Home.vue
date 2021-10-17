<template>
  <div>
    <div style="display:flex;justify-content:center;margin-top:5rem;">
      <div class="home">
        <span>Search your favourite cocktail</span>
        <input type="text" v-model="name" />
      </div>
    </div>
    <h1 style="text-align:center;margin-top:4rem;">Cocktails</h1>
    <div style="display:flex;justify-content:center;align-items:center">
      <div class="items">
        <Cocktail />
        <Cocktail />
        <Cocktail />
      </div>
    </div>
  </div>
</template>

<script>
import Cocktail from '../components/HomeComponents/Cocktail.vue';
export default {
  name: 'Home',
  components: { Cocktail },
  data() {
    return {
      name: '',
    };
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  width: 35%;
  padding: 20px;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.7);
}

.home span {
  font-size: 16px;
  color: rgb(71, 106, 46);
  font-weight: 700;
}

.home input {
  width: 90%;
  height: 2rem;
  background-color: #f0f5fc;
  border: none;
  margin-top: 1rem;
  font-size: 20px;
}
.home input:focus {
  outline: 2px solid blue;
  border: none;
}

.items {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: auto auto auto;
  gap: 1.5rem;
  row-gap: 3rem;
  width: 70%;
  margin-bottom: 5rem;
}
</style>
