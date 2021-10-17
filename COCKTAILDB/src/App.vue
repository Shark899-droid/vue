<template>
  <div id="nav">
    <h3>The<span style="color:rgb(71,106,46);">Cocktail</span>DB</h3>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f0f5fc;
}

#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: white;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.7);
}

#nav a {
  text-decoration: none;
  color: #5d5d5d;
  font-weight: bold;
  margin-right: 1rem;
}

#nav h3 span {
  margin: 0;
  font-weight: bold;
}
</style>
