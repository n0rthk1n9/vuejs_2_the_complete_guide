Vue.component('hello', {
  template: `<div>
               <hr>
               <h1>Hello!</h1>
             </div>`
});

var vmOne = new Vue({
  data: {
    title: 'The first VueJS Instance',
    showParagraph: false
  },
  methods: {
    show() {
      this.showParagraph = true;
      this.updateTitle('The first VueJS Instance (Updated)');
      console.log(this.$refs);
    },
    updateTitle(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title(value) {
      alert('Title changed, new value: ' + value)
    }
  }
});

vmOne.$mount('#appOne');

function changeVmOneWithVanillaJS() {
  return setTimeout(function() {
    vmOne.title = 'Changed by Vanilla JS Timer';
  }, 3000);
}

var vmTwo = new Vue({
  el: '#appTwo',
  data: {
    title: 'The second VueJS Instance'
  },
  methods: {
    changeVmOnewithVmTwo() {
      vmOne.title = 'Title changed from second VueJS Instance';
    }
  }
});

var vmThree = new Vue({
  el: 'hello',
  template: `<div>
               <hr>
               <h1>Hello!</h1>
             </div>`
});

var vmFour = new Vue({
  el: '#appFour',
  data: {
    title: 'The fourth VueJS Instance'
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeDestroy() {
    console.log('beforeDestroy()');
  },
  destroyed() {
    console.log('destroyed()');
  },
  methods: {
    destroy() {
      this.$destroy();
    }
  }
});

// vmThree.$mount();
//
// document.getElementById('appThree').appendChild(vmThree.$el);
