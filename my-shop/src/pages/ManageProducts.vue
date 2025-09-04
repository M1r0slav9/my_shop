<template>
  <div class="manage-products">
    <h1>Управління товарами</h1>
    <input v-model="searchQuery" type="text" placeholder="Введіть назву товару" />
    <ManageCart />
    <ProductList :products="filteredProducts" />
  </div>
</template>

<script>
import ManageCart from '@/components/ManageCart.vue';
import ProductList from '../components/ProductList.vue';

export default {
  name: 'ManageProducts',
  components: { ProductList },
  data() {
    return {
      searchQuery: '',
      products: [
        {
          id: 1,
          name: "Смартфон Samsung Galaxy S23",
          description: "Флагманський смартфон з потужним процесором",
          price: 35000,
          image: "https://img.freepik.com/free-photo/white-cell-phone-box-background_58702-4721.jpg"
        },
        {
          id: 2,
          name: "Ноутбук Apple MacBook Air M2",
          description: "Легкий та швидкий ноутбук на чіпі M2",
          price: 58000,
          image: "https://img.freepik.com/free-photo/workplace-with-laptop-stand-near-eyeglasses_23-2148040478.jpg"
        },
        {
          id: 3,
          name: "Бездротові навушники Sony",
          description: "Якісний звук та до 30 годин автономної роботи",
          price: 7800,
          image: "https://img.freepik.com/free-photo/closeup-shot-white-wireless-headphones-with-their-case-white-background_181624-31412.jpg"
        },
        {
          id: 4,
          name: "Механічна клавіатура HyperX",
          description: "Надійна клавіатура з підсвіткою",
          price: 4500,
          image: "https://img.freepik.com/free-photo/top-view-keyboard-mouse-arrangement_23-2149386333.jpg"
        },
        {
          id: 5,
          name: "Смарт-годинник Apple Watch Series 9",
          description: "Новітній смарт-годинник з безліччю функцій",
          price: 17000,
          image: "https://img.freepik.com/free-photo/modern-sport-adult-hand-lifestyle_1127-2745.jpg"
        },
        {
          id: 6,
          name: "Портативна колонка JBL Series 1",
          description: "Гучний звук у компактному корпусі",
          price: 5200,
          image: "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722602.jpg"
        },
        {
          id: 7,
          name: "Телевізор Samsung 4K QLED",
          description: "Якісне зображення з роздільною здатністю 4K",
          price: 28000,
          image: "https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generative-ai_188544-12122.jpg"
        },
        {
          id: 8,
          name: "Фітнес-браслет Xiaomi Mi Band 7",
          description: "Зручний фітнес-трекер для щоденного використання",
          price: 1800,
          image: "https://img.freepik.com/free-photo/futuristic-virtual-reality-headset-illuminates-dark-studio-shot-generated-by-ai_188544-13298.jpg"
        }
      ]
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
.manage-products {
  padding: 20px;
}

input {
  margin-bottom: 20px;
  padding: 8px;
  width: 100%;
  max-width: 400px;
}
</style>
