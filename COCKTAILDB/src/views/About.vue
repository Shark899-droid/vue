<template>
  <div class="about">
    <div class="subClass">
      <h1>About Us</h1>
      <p class="align">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit earum
        nobis deleniti doloribus. Recusandae, expedita corporis. Commodi labore
        at, consequatur in ab ex, officiis cum, provident quasi nobis delectus
        voluptatem nam magnam nihil alias placeat nesciunt. Repudiandae impedit
        modi officiis nesciunt earum nemo reprehenderit dignissimos, nisi
        necessitatibus, quo ea at?
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-content: center;
}
.subClass {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
}
.align {
  line-height: 2em;
}

.subClass h1 {
  margin: 0;
  margin-top: 5rem;
  margin-bottom: 3rem;
}
</style>
