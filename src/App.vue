<template>
  <div id="app">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/categorias">Categorias</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>
