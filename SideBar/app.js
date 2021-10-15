const app = Vue.createApp({
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    visibility() {
      this.isVisible = !this.isVisible;
    },
    clear() {
      this.isVisible = true;
    },
  },
});

app.mount('#app');
