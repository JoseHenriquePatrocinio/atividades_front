<template>
  <body>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    
    <div class="phone">
      <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt="home" class="content show">
      <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="work" class="content">
      <img src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80" alt="blog" class="content">
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="about" class="content">
      <nav>
        <ul>
          <li class="active">
            <i class="fas fa-home"></i>
            <p>Home</p>
          </li>
          <li>
            <i class="fas fa-box"></i>
            <p>Trabalho</p>
          </li>
          <li>
            <i class="fas fa-book-open"></i>
            <p>Blog</p>
          </li>
          <li>
            <i class="fas fa-users"></i>
            <p>Sobre nós</p>
          </li>
        </ul>
      </nav>
    </div>
  </body>
</template>

<script>
export default {
    name: "BarraNavegacaoView"
}

</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background-color: rgba(13, 30, 127, 0.7);
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

.phone {
  position: relative;
  overflow: hidden;
  border: 3px solid #eee;
  border-radius: 15px;
  height: 600px;
  width: 340px;
}

.phone .content {
  opacity: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% - 60px);
  width: 100%;
  transition: opacity 0.4s ease;
}

.phone .content.show {
  opacity: 1;
}

nav {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-top: -5px;
  width: 100%;
}

nav ul {
  background-color: #fff;
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: -25px;
  height: 80px;
}

nav li {
  color: #777;
  cursor: pointer;
  flex: 1;
  padding: 10px;
  text-align: center;
}

nav ul li p {
  font-size: 12px;
  margin: 2px 0;
}

nav ul li:hover,
nav ul li.active {
  color: #8e44ad;
}
</style>