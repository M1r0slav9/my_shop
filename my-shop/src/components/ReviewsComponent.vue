<template>
  <div>
    <h2>Відгуки</h2>
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Рейтинг</th>
          <th>Коментар</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(review, index) in reviews" :key="index">
          <td>{{ review.Name }}</td>
          <td>{{ review.Rating }}</td>
          <td>{{ review.Comment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Papa from 'papaparse';

export default {
  name: "ReviewsTable",
  data() {
    return {
      reviews: []
    };
  },
  created() {
    const csvContent = `
Name,Rating,Comment
Андрій,5,Все супер!
Марія,4,Добре, але є нюанси
Іван,3,Могло бути краще
    `;

    Papa.parse(csvContent.trim(), {
      header: true,
      complete: (result) => {
        this.reviews = result.data;
        console.log(result.data)
      },
    });
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 16px;
}

table {
  width: 90%;
  margin: 0 auto; /* відцентровує таблицю */
  border-collapse: collapse;
}

th, td {
  background-color: #f8f9fa;
  padding: 4px;
  border: 1px solid #ddd;
}
</style>
