<template>
  <body>
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