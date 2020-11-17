<template>
  <div class="nav_menu">
    <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Navbar brand -->
    <a class="navbar-brand" href="#">

    <img src="../assets/111logo.png"
        height="50"
        loading="lazy"
        width="320"
    >
    
    </a>

    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Left links -->
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">首頁</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">最新消息</a>
        </li>
        <!-- Navbar dropdown -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            公開勸募專案
          </a>
          <!-- Dropdown menu -->
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">1</a></li>
            <li><a class="dropdown-item" href="#">2</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#">3</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">加入會員</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">關於我們</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">影音專區</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FACEBOOK</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">BLOG</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
            >Disabled</a
          >
        </li>
      </ul>
      <!-- Left links -->

      <!-- Search form -->
      <form class="d-flex input-group w-auto">
        <input
          type="search"
          class="form-control"
          placeholder="Type query"
          aria-label="Search"
        />
        <button class="btn btn-outline-primary" type="button" data-ripple-color="dark">
          Search
        </button>
      </form>
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
  </div>
</template>

<script>
export default {
  name: 'nav_menu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
