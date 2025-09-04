<template>
  <div id="app">
    <header>
      <nav style="padding: 10px; background: #eee; display: flex; gap: 20px;">
        <router-link to="/admin/products">Товары</router-link>
        <router-link to="/admin/reviews">Отзывы</router-link>
      </nav>
    </header>

    <main style="padding: 20px;">
      <router-view />
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: "App",
  components: {
    FooterComponent,
  }
};
</script>
