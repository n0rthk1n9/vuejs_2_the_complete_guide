<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Animations</h1>
      <hr>
      <h3>CSS Animations (Single Item)</h3>
      <br>
      <select v-model="alertAnimation"
              class="form-control">
        <option value="fade">fade</option>
        <option value="slide">slide</option>
      </select>
      <br>
      <transition :name="alertAnimation">
        <div class="alert alert-info"
             v-if="show">
             This is some Info
        </div>
      </transition>
      <transition name="slide" type="animation">
        <div class="alert alert-info"
             v-if="show">
             This is some Info
        </div>
      </transition>
      <transition appear
                  enter-active-class="animated bounce"
                  leave-active-class="animated shake">
        <div class="alert alert-info"
             v-if="show">
             This is some Info
        </div>
      </transition>
      <transition :name="alertAnimation" mode="out-in">
        <div class="alert alert-info"
             v-if="show"
             key="info">
             This is some Info
        </div>
        <div class="alert alert-warning"
             v-if="!show"
             key="warning">
             This is some Info
        </div>
      </transition>
      <button class="btn btn-primary"
              @click="show = !show">
              Show Alert
      </button>
      <hr>
      <h3>JS Animations (Single Item)</h3>
      <br>
      <transition @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
                  @enter-cancelled="enterCancelled"

                  @before-leave="beforeLeave"
                  @leave="leave"
                  @after-leave="afterLeave"
                  @leave-cancelled="leaveCancelled"
                  :css="false">
        <div style="width: 300px; height: 100px; background-color: lightgreen"
             v-if="load">

        </div>
      </transition>
      <br>
      <button class="btn btn-primary"
              @click="load = !load">
              Load / Remove Element
      </button>
      <hr>
      <h4>Dynamic Components Animations (Single Item)</h4>
      <br>
      <transition name="fade"
                  mode="out-in">
        <componentName :is="selectedComponent"></componentName>
      </transition>
      <button class="btn btn-primary"
              @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">
              Toggle Components
      </button>
      <hr>
      <h3>CSS Animations (Multiple Items)</h3>
      <br>
      <ul class="list-group">
        <transition-group name="slide"
                          enter-active-class="animated slideInRight"
                          leave-active-class="animated slideOutLeft">
          <li class="list-group-item delete-effect"
              v-for="(number, index) in numbers"
              @click="removeItem(index)"
              :key="number">
              {{ number }}
          </li>
        </transition-group>
      </ul>
      <button class="btn btn-primary"
              @click="addItem">
              Add Item
      </button>
      <hr>
    </div>
  </div>
</div>
</template>

<script>
  import DangerAlert from './DangerAlert.vue'
  import SuccessAlert from './SuccessAlert.vue'
  export default {
    data() {
      return {
        show: false,
        load: true,
        alertAnimation: 'fade',
        elementWidth: 100,
        selectedComponent: 'app-success-alert',
        numbers: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      beforeEnter(el) {
        console.log('beforeEnter');
        this.elementWidth = 100;
        el.style.width = this.elementWidth + 'px';
      },
      enter(el, done) {
        console.log('enter');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth + round * 10) + 'px';
          round++;
          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      afterEnter(el) {
        console.log('afterEnter');
      },
      enterCancelled(el) {
        console.log('enterCancelled');
      },
      beforeLeave(el) {
        console.log('beforeLeave');
        this.elementWidth = 300;
        el.style.width = this.elementWidth + 'px';
      },
      leave(el, done) {
        console.log('leave');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth - round * 10) + 'px';
          round++;
          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      afterLeave(el) {
        console.log('afterLeave');
      },
      leaveCancelled(el) {
        console.log('leaveCancelled');
      },
      addItem() {
        const pos = Math.floor(Math.random() * this.numbers.length);
        this.numbers.splice(pos, 0, this.numbers.length + 1);
      },
      removeItem(index) {
        this.numbers.splice(index, 1);
      }
    },
    components: {
      appDangerAlert: DangerAlert,
      appSuccessAlert: SuccessAlert
    }
  }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {

  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }

  .delete-effect:hover {
    cursor: pointer;
    background-color: lightcoral;
  }
</style>
