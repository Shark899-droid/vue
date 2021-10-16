const app = Vue.createApp({
  data() {
    return {
      isHistory: true,
      isVision: false,
      isGoals: false,
    };
  },
  methods: {
    history() {
      this.isHistory = true;
      this.isVision = false;
      this.isGoals = false;
    },
    vision() {
      this.isHistory = false;
      this.isVision = true;
      this.isGoals = false;
    },
    goals() {
      this.isHistory = false;
      this.isVision = false;
      this.isGoals = true;
    },
  },
});

app.mount('#app');
