<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="contact">
        <h3>Контакти</h3>
        <p>Email: info@myshop.com</p>
        <p>Телефон: +38 012 345 6789</p>
      </div>
      <div class="links">
        <h3>Посилання</h3>
        <ul>
          <li><a href="#">Про нас</a></li>
          <li><a href="#">Доставка</a></li>
        </ul>
      </div>
    </div>
    <p class="footer-copy">© 2025 MyShop. Всі права захищені.</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style scoped>
.footer {
  background-color: #f5f5f5; /* світлий фон, гармонійний з картками */
  color: #333;
  padding: 20px 0;
  margin-top: auto;
  border-top: 1px solid #ddd;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.contact, .links {
  margin-bottom: 15px;
}

h3 {
  margin-bottom: 10px;
  font-size: 18px;
  color: #444;
}

a {
  color: #555;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.footer-copy {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  color: #777;
}
</style>
