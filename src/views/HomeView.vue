<template>
  <div class="grid grid-template-columns">
    <router-link to="/contador" class="card">
      <div>
        <img class="card-img-top" src="/img/contador.png" alt="contador">
        <h2>Contador incremental</h2>
      </div>
    </router-link>

    <router-link to="/faq" class="card">
      <div>
        <img class="card-img-top" src="/img/faq.png" alt="faq">
        <h2>Perguntas frequentes</h2>
      </div>
    </router-link>

    <router-link to="/cliqueparacurtir" class="card">
      <div>
        <img class="card-img-top" src="/img/curtir.png" alt="curtir">
        <h2>Clique para Curtir</h2>
      </div>
    </router-link>

    <router-link to="/filtrousuarios" class="card">
      <div>
        <img class="card-img-top" src="/img/filtrar.png" alt="filtrar">
        <h2>Filtro de usuário</h2>
      </div>
    </router-link>

    <router-link to="/barranavegacao" class="card">
      <div>
        <img class="card-img-top" src="/img/mobile.png" alt="mobile">
        <h2>Barra de navegação Mobile</h2>
      </div>
    </router-link>

    <router-link to="/calculadora" class="card">
      <div>
        <img class="card-img-top" src="/img/calculadora.png" alt="calculadora">
        <h2>Calculadora</h2>
      </div>
    </router-link>
    
    <router-link to="/projetonotas" class="card">
      <div>
        <img class="card-img-top" src="/img/notas.png" alt="notas">
        <h2>Projeto de notas</h2>
      </div>
    </router-link>

    <router-link to="/slidesverticais" class="card">
      <div>
        <img class="card-img-top" src="/img/slides.png" alt="notas">
        <h2>Slides Verticais</h2>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.grid {
  display: grid;
}

.grid-template-columns {
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
}

.card {
  background-color: #e0e0e0;
  border-radius: 8px;
  margin: 10px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  object-fit: contain;
  margin-bottom: 10px;
}

h2 {
  color: #333;
  font-size: 15px;
}
</style>
