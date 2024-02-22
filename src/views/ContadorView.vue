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