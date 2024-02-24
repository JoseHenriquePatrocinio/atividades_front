<template>
  <div class="grid grid-template-columns">
    <router-link to="/contador" class="card">
      <div>
        <img class="card-img-top" src="/img/contador.png" alt="Contador incremental">
        <h2>Contador incremental</h2>
      </div>
    </router-link>

    <router-link to="/faq" class="card">
      <div>
        <img class="card-img-top" src="/img/faq.png" alt="FAQ">
        <h2>Perguntas frequentes</h2>
      </div>
    </router-link>

    <router-link to="/cliqueparacurtir" class="card">
      <div>
        <img class="card-img-top" src="/img/curtir.png" alt="FAQ">
        <h2>Clique para Curtir</h2>
      </div>
    </router-link>

    <router-link to="/filtrousuarios" class="card">
      <div>
        <img class="card-img-top" src="/img/filtrar.png" alt="FAQ">
        <h2>Filtro de usuário</h2>
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
  font-size: 10px;
}
</style>
