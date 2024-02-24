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
.container {
    border-radius: 5px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
}

.title {
    margin: 0;
}

.subtitle {
    display: inline-block;
    margin: 5px 0 20px;
    opacity: 0.8;
}

.header {
    background-color: #626367;
    color: #fff;
    padding: 30px 20px;
    margin: 0 auto;
}

.header input {
    background-color: rgba(0, 0, 0, 0.3);
    border: 0;
    border-radius: 50px;
    color: #fff;
    font-size: 14px;
    padding: 10px 05px;
    width: 100%;
    margin: 0 auto;
}

.header input:focus {
    outline: none;
}

.user-list {
    background-color: #fff;
    list-style-type: none;
    margin: 0;
    padding: 0;
    max-height: 400px;
    overflow-y: auto;
}

.user-list li {
    display: flex;
    padding: 20px;
}

.user-list img {
    border-radius: 50%;
    object-fit: cover;
    height: 50px;
    width: 50px;
}

.user-list .user-info {
    margin-left: 10px;
}

.user-list .user-info h4 {
    margin: 0 0 10px;
}

.user-list .user-info p {
    font-size: 12px;
}

.user-list li:not(:last-of-type) {
    border-bottom: 1px solid #eee;
}

.user-list li.hide {
    display: none;
}

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
