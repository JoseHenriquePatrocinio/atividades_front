<template>
    <div class="container">
        <header class="header">
            <div class="filter-container">
                <h4 class="title">Filtrar Usuário</h4>
                <small class="subtitle">Pesquise por nome e/ou localização</small>
                <input type="text" id="filter" placeholder="Search" v-model="searchTerm" />
            </div>
        </header>

        <ul class="user-list">
            <li v-for="user in filteredUsers" :key="user.id">
                <img :src="user.picture.large" :alt="`${user.name.first} ${user.name.last}`" />
                <div class="user-info">
                    <h4>{{ user.name.first }} {{ user.name.last }}</h4>
                    <p>{{ user.location.city }}, {{ user.location.country }}</p>
                </div>
            </li>
            <li v-if="filteredUsers.length === 0">
                <h3>Nenhum usuário encontrado.</h3>
            </li>
        </ul>

        <div class="dadosDownload">
            <a :href="downloadLink" download="dados.zip">
                <i class="fas fa-download"></i> Baixar Arquivo Json
            </a>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "FiltroDeUsuariosView",
    data() {
        return {
            users: [],
            searchTerm: "",
        };
    },
    computed: {
        filteredUsers() {
            return this.users.filter((user) =>
                this.matchSearchTerm(user, this.searchTerm)
            );
        },
        downloadLink() {
            return "https://www.zippyshare.day/download/AEzTJ3SNLpq7WCq/0l5YzMwwYmyOA/dados.zip";
        },
    },
    methods: {
        async fetchData() {
            try {
                const res = await fetch(
                    "https://run.mocky.io/v3/8ef8a5e2-8edf-4911-a51f-a81e7112f7ad"
                );
                const { results } = await res.json();
                this.users = results;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        matchSearchTerm(user, term) {
            const userFullName = `${user.name.first} ${user.name.last}`;
            const userLocation = `${user.location.city}, ${user.location.country}`;
            return (
                userFullName.toLowerCase().includes(term.toLowerCase()) ||
                userLocation.toLowerCase().includes(term.toLowerCase())
            );
        },
    },
    watch: {
        searchTerm: "fetchData",
    },
    created() {
        this.fetchData();
    },
};
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
