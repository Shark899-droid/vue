<template>
  <div>
    <div
      class="alcholicItems"
      v-for="cocktail in cocktails"
      :key="cocktail.name"
    >
      <img :src="cocktail.img" alt="cock" />
      <h1>{{ cocktail.name }}</h1>
      <h5>{{ cocktail.glass }}</h5>
      <span>{{ cocktail.alchol }}</span>
      <button>DETAILS</button>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  data() {
    return {
      cocktails: [],
    };
  },
  created() {
    for (let i = 0; i < 8; i++) {
      axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then((response) => {
          this.cocktails.push({
            name: response.data.drinks[0].strDrink,
            img: response.data.drinks[0].strDrinkThumb,
            glass: response.data.drinks[0].strGlass,
            alchol: response.data.drinks[0].strAlcoholic,
          });
          console.log(this.cocktails);
        });
    }
  },
};
</script>

<style scoped>
.alcholicItems {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 7px;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.5);
  max-height: 34rem;
  min-height: 34rem;
  margin-bottom: 3rem;
}
.alcholicItems img {
  width: 100%;
  max-height: 20rem;
  min-height: 20rem;

  border-radius: 10px 10px 0 0;
}

.alcholicItems h1,
.alcholicItems h5,
.alcholicItems button,
.alcholicItems span {
  margin: 0;
  margin-left: 20px;
  margin-bottom: 10px;
}

.alcholicItems button {
  margin-bottom: 20px;
  width: 30%;
  background-color: rgb(71, 106, 46);
  color: white;
  border: none;
  border-radius: 5px;
  height: 1.7rem;
}

.alcholicItems span {
  color: rgb(175, 175, 175);
  font-size: 14px;
}

.alcholicItems h5 {
  color: rgb(34, 34, 34);
  font-size: 16px;
}

.alcholicItems h1 {
  font-size: 32;
  color: rgb(34, 34, 34);
}

.alcholicItems button:hover {
  animation: buttonAnimation 0.5s ease-in-out forwards;
}

@keyframes buttonAnimation {
  0% {
    background-color: rgb(71, 106, 46);
    color: white;
  }

  100% {
    background-color: rgb(171, 206, 146);
    color: rgb(71, 106, 46);
  }
}
</style>
