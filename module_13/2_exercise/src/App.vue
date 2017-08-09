<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Filters & Mixins</h1>
      <hr>
      <h4>Exercise 1</h4>
      <p>{{ text | reverseText }}</p>
      <hr>
      <h4>Exercise 2</h4>
      <p>{{ text }} ({{ text | appendLength }})</p>
      <hr>
      <h4>Exercise 3</h4>
      <p>{{ reverseTextWithComputedProperty }}</p>
      <p>{{ appendLengthWithComputedProperty }}</p>
      <hr>
      <h4>Exercise 4</h4>
      <p>{{ appendLengthWithComputedPropertyFromMixin }}</p>
    </div>
  </div>
</div>
</template>

<script>
  import { appendLengthMixin } from './appendLengthMixin';
  export default {
    mixins: [appendLengthMixin],
    data() {
      return {
        text: 'txet looc A'
      }
    },
    filters: {
      reverseText(value) {
        return value.split("").reverse().join("");
      }
    },
    computed: {
      reverseTextWithComputedProperty() {
        return this.text.split("").reverse().join("");
      },
      appendLengthWithComputedProperty() {
        return this.text + ' (' + this.text.length + ')'
      }
    }
  }
</script>

<style>
</style>
