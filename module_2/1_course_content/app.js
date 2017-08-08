new Vue({
  el: '#app',
  data: {
    attachRed: false,
    color: 'green',
    colorTwo: 'gray',
    width: 100
  },
  computed: {
    divClasses: function () {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    },
    myStyle: function () {
      return {
        backgroundColor: this.colorTwo,
        width: this.width + 'px'
      };
    }
  }
});
