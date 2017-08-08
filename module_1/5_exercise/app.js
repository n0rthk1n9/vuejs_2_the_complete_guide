new Vue({
  el: '#exercise',
  data: {
    attachHighlight: false
  },
  methods: {
    startEffect: function() {
      return {
        highlight: this.attachHighlight
      }
    }
  }
});
