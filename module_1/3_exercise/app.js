new Vue({
  el: '#exercise',
  data: {
      value: '',
      value_two: ''
  },
  methods: {
    showAlert: function () {
      alert('Button clicked');
    },
    storeValue: function (event) {
      if (event.target.id == 'input_one') {
        return this.value = event.target.value
      } else {
        return this.value_two = event.target.value
      }
    }
  }
});
