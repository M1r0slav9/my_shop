<template>
  <div>
    <h1>Управление отзывами</h1>
    <ReviewsComponent />
  </div>
</template>

<script>
import ReviewsComponent from '../components/ReviewsComponent.vue';

export default {
  name: 'ManageReviews',
  components: { ReviewsComponent },
};
</script>
