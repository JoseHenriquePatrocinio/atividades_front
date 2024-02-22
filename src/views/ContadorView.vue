<template>
  <body>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

    <div class="counter-container">
      <i class="fab fa-twitter fa-3x"></i>
      <div class="counter" :data-target="12000"></div>
      <span>Seguidores do Twitter</span>
    </div>

    <div class="counter-container">
      <i class="fab fa-youtube fa-3x"></i>
      <div class="counter" :data-target="5000"></div>
      <span>Assinantes do YouTube</span>
    </div>

    <div class="counter-container">
      <i class="fab fa-facebook fa-3x"></i>
      <div class="counter" :data-target="7500"></div>
      <span>Fãs do Facebook</span>
    </div>
  </body>
</template>

<script>
export default {
  name: 'ContadorView',
  mounted() {
    this.counters();
  },
  methods: {
    counters() {
      const counters = document.querySelectorAll('.counter');
      const speed = 200;

      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const inc = target / speed;

        const updateCount = () => {
          const count = +counter.innerText;
          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background-color: #1013cb;
  color: #fff;
  font-family: 'Roboto Mono', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.counter-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 30px 50px;
}

.counter {
  font-size: 60px;
  margin-top: 10px;
}

@media (max-width: 580px) {
  body {
    flex-direction: column;
  }
}
</style>