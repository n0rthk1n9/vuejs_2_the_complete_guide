<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Directives Exercise</h1>
      <button class="btn btn-primary"
              v-custom-on:click="clicked">
              Click Me
      </button>
      <hr>
      <div style="width: 100px; height: 100px; background-color: lightgreen"
           v-custom-on:mouseenter="mouseEnter"
           v-custom-on:mouseleave="mouseLeave">
           <p style="margin: 5px">{{ mouseEnteredOrLeftText }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        mouseEnteredOrLeftText: ''
      }
    },
    directives: {
      customOn: {
        bind(el, binding, vnode) {
          const type = binding.arg;
          const fn = binding.value;
          el.addEventListener(type, fn);
        }
      }
    },
    methods: {
      clicked() {
        alert('I was clicked');
      },
      mouseEnter() {
        this.mouseEnteredOrLeftText = "Mouse entered rectangle";
      },
      mouseLeave() {
        this.mouseEnteredOrLeftText = "Mouse leaved rectangle";
      }
    }
  }
</script>

<style>
</style>
