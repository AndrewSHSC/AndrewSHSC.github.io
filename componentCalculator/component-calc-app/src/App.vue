<template>
  <div>
    <ItemComponent @item-added="addItemToBasket" />
    <BasketComponent :basketItems="basketItems" :componentName="componentName" />
  </div>
</template>

<script>
import ItemComponent from './components/ItemComponent.vue';
import BasketComponent from './components/BasketComponent.vue';

export default {
  components: {
    ItemComponent,
    BasketComponent,
  },
  data() {
    return {
      basketItems: [],
      componentName: '',
    };
  },
  methods: {
    addItemToBasket(item) {
      this.basketItems.push(item);
      this.componentName = '';
    },
  },
};
</script>
