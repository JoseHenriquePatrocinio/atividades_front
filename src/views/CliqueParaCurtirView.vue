<template>
    <body>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  
      <h3>Clique duas vezes na imagem<i class="fas fa-heart"></i>para curtir.</h3>
      <small>Você curtiu {{ timesClicked }} vezes</small>
  
      <div class="loveMe" @click="handleClick">
        <i
          v-for="(heart, index) in hearts"
          :key="index"
          class="fas fa-heart"
          :style="{ top: heart.top, left: heart.left }"
        ></i>
      </div>
    </body>
  </template>
  
  <script>
  export default {
    name: "CliqueParaCurtirView",
    data() {
      return {
        clickTime: 0,
        timesClicked: 0,
        hearts: [],
      };
    },
    methods: {
      handleClick(event) {
        if (this.clickTime === 0) {
          this.clickTime = new Date().getTime();
        } else {
          if (new Date().getTime() - this.clickTime < 800) {
            this.createHeart(event);
            this.clickTime = 0;
          } else {
            this.clickTime = new Date().getTime();
          }
        }
      },
      createHeart(event) {
        const heart = {
          top: `${event.clientY - event.target.offsetTop}px`,
          left: `${event.clientX - event.target.offsetLeft}px`,
        };
  
        this.hearts.push(heart);
  
        this.timesClicked++;
        setTimeout(() => this.hearts.shift(), 1000);
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: 'Oswald', sans-serif;
    text-align: center;
    overflow: hidden;
    margin: 0;
  }
  
  h3 {
    margin-bottom: 0;
    text-align: center;
  }

small {
  display: block;
  margin-bottom: 20px;
  text-align: center;
}
  
  .fa-heart {
    color: red;
  }
  
  .loveMe {
    height: 440px;
    width: 300px;
    background: url('https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')
      no-repeat center center/cover;
    margin: auto;
    cursor: pointer;
    max-width: 100%;
    position: relative;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    overflow: hidden;
  }
  
  .loveMe .fa-heart {
    position: absolute;
    animation: grow 0.6s linear;
    transform: translate(-50%, -50%) scale(0);
  }
  
  @keyframes grow {
    to {
      transform: translate(-50%, -50%) scale(10);
      opacity: 0;
    }
  }
  </style>