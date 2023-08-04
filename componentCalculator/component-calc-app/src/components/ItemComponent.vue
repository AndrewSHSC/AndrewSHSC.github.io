<template>
  <section class="itemComponent">
      <div class="container">
        <h2>Component</h2>
        <div class="option">
          <label for="componentNameID">
            Component Name:
            <input type="text" id="componentNameID" placeholder="Component" v-model="componentName">
          </label>
        </div>
        <div class="option">
            <label for="itemIdNonGrid" class="checkbox">
              <input type="checkbox" id="itemIdNonGrid" v-model="nonGridChecked">
              Non-grid
            </label>
          <p>Does the component have a layout style that does not follow a grid like pattern?</p>
        </div>
        <div class="option">
          <label for="itemIdOptions">
            <input type="checkbox" id="itemIdOptions" v-model="optionsChecked">
            Options
          </label>
          <p>Will the component have options?</p>
          <p>
            For example a different layout or style depending on data returned or input
          </p>
        </div>
        <div class="option">
          <label for="itemIdUmbraco">
            <input type="checkbox" id="itemIdUmbraco" v-model="umbracoChecked">
            Umbraco integration
          </label>
          <p>Will the component be integrated with Umbraco?
          </p>
          <p>
            Note: this estimate is only applicable
             for banners and content blocks where the UI team can complete the Umbraco integration
          </p>
        </div>
        <div class="option">
          <label for="itemIdTransitions">
            <input type="checkbox" id="itemIdTransitions" v-model="transitionsChecked">
            Enhanced transitions
          </label>
          <p>Will the component have enhanced transitions? For example:</p>
          <ul>
            <li>Image parallax</li>
            <li>Bespoke fading/loading</li>
            <li>Swipe/Wipe transitions</li>
          </ul>
          <p>Note: This field should not be used for truly bespoke transitions.
             For advanced/bespoke transition estimates please get in touch with a member
             of the UI team
          </p>
        </div>
        <p>Estimate: {{ totalEstimate }} Hours</p>
        <button @click="addItemToBasket" class="button">Add to Basket</button>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nonGridChecked: false,
      optionsChecked: false,
      umbracoChecked: false,
      transitionsChecked: false,
      componentName: '',
      baseEstimate: 1,
    };
  },
  computed: {
    totalEstimate() {
      let estimate = this.baseEstimate;

      if (this.nonGridChecked && !this.optionsChecked) {
        estimate = 3;
      } else if (!this.nonGridChecked && this.optionsChecked) {
        estimate = 1.5;
      } else if (this.nonGridChecked && this.optionsChecked) {
        estimate = 4;
      }

      if (this.umbracoChecked) {
        if (!this.optionsChecked) {
          estimate += 1;
        } else {
          estimate += 1.5;
        }
      }

      if (this.transitionsChecked) {
        if (!this.optionsChecked) {
          estimate += 1;
        } else {
          estimate += 1.5;
        }
      }

      return estimate;
    },
  },
  methods: {
    addItemToBasket() {
      this.$emit('item-added', {
        name: this.componentName || 'Component',
        estimate: this.totalEstimate,
        grid: this.nonGridChecked ? 'Non-standard layout' : 'Grid/Standard layout',
        options: this.optionsChecked ? 'No options' : 'Has options',
        umbraco: this.umbracoChecked ? 'Umbraco integration' : 'No Umbraco integration',
        transitions: this.transitionsChecked ? 'Has enhanced transitions' : 'No enhanced transitions',
      });

      this.nonGridChecked = false;
      this.optionsChecked = false;
      this.umbracoChecked = false;
      this.transitionsChecked = false;
      this.componentName = '';
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/components/components/itemComponent.scss';
</style>
