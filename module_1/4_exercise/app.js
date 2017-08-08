new Vue({
  el: '#exercise',
  data: {
    value: 0
  },
  computed: {
    result: function () {
      return this.value < 37 ? 'not there yet' : 'done';
    }
  },
  watch: {
    value: function () {
      var _this = this;
      setTimeout(function () {
        _this.value = 0;
      }, 5000);
    }
  }
});
