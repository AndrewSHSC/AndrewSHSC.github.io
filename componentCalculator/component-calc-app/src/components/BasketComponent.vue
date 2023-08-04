<template>
  <div class="basket">
    <div class="container">
      <h2>Component basket</h2>
      <ul>
        <li v-for="(item, index) in basketItems" :key="index">
          <h3>{{ item.name }}</h3>
          <p>Estimate: {{ item.estimate }} Hours</p>
          <p>{{item.grid}}</p>
          <p>{{item.options}}</p>
          <p>{{item.transitions}}</p>
        </li>
      </ul>
      <p class="total">Total: {{ totalEstimate }} Hours</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    basketItems: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    totalEstimate() {
      return this.basketItems.reduce((total, item) => total + item.estimate, 0);
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/components/components/basket.scss';
</style>
