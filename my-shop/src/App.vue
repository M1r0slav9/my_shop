<template>
  <div id="app">
    <ProductList />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';

export default {
  name: "App",
  components: {
    ProductList
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}
</style>
