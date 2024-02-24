<template>
    <body>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

        <header class="header">
            <h4 class="title">Filtrar Usuário</h4>
            <small class="subtitle">Pesquise por nome e/ou localização</small>
            <input type="text" id="filter" placeholder="Search">
        </header>

        <ul id="result" class="user-list">
            <li>
                <h3>Carregando...</h3>
            </li>
        </ul>

        <div class="dadosDownload">
            <a href="https://www.zippyshare.day/download/AEzTJ3SNLpq7WCq/0l5YzMwwYmyOA/dados.zip" download="dados.zip">
                <i class="fas fa-download"></i> Baixar Arquivo Json
            </a>
        </div>
    </body>
</template>

<script>
export default {
    name: "FiltroDeUsuariosView",
}
</script>

<style scoped>
.dadosDownload {
  text-align: center;
  margin-top: 20px;
}
.dadosDownload a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dadosDownload a i {
  margin-right: 5px;
}
</style>
