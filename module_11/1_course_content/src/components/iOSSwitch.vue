<template>
  <div class="switch" id="switch-wrap">
    <input type="checkbox"
           id="switch"
           @click="switched(value)"/>
    <label class="toggle" for="switch"></label>
  </div>
</template>
<script>
export default {
  props: {
    value: Boolean
  },
  methods: {
    switched(value) {
      if (value == true) {
        this.$emit('input', false)
      } else {
        this.$emit('input', true)
      }
    }
  }
}
</script>
<style lang="css" scoped>
  .switch,
  .switch input,
  .switch .toggle {
  /* Share Layout Settings */
  font-size: 10px;
  width: 5em;
  height: 2.6em;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  text-align: left;
  cursor: pointer;
  background: transparent;
  border: none;
  appearance: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  transform: translateZ(0);
  }

  .switch {
  /* Animations to Replace Transition Sliding */
  }
  .switch input, .switch .toggle {
  /* Increase hit area */
  }
  .switch input::after, .switch .toggle::after {
  content: "";
  position: absolute;
  top: -0.73333em;
  left: -0.73333em;
  bottom: -0.73333em;
  right: -0.73333em;
  }
  .switch input {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  }
  .switch .toggle {
  z-index: 1;
  box-shadow: inset 0 0 0 0.2em #eee;
  border-radius: 1.3em;
  transition: box-shadow .3s ease-in-out, padding .25s ease-in-out;
  transition-delay: 0s, 0s;
  /* Round Switch */
  }
  .switch .toggle::before {
  content: "";
  display: inline-block;
  height: 2.2em;
  width: 2.2em;
  margin: 0.2em 0 0 0.2em;
  background-color: #fff;
  border-radius: 1.1em;
  box-shadow: 0 0.2em 0.4em 0 rgba(0, 0, 0, 0.2), 0 0 0.1em 0.1em rgba(0, 0, 0, 0.1);
  transform: translateZ(0);
  transition: all .1s linear .025s;
  }
  .switch input:active + .toggle {
  box-shadow: inset 0 0 0 1.48571em #eee !important;
  }
  .switch input:checked + .toggle {
  box-shadow: inset 0 0 0 1.48571em #00c169 !important;
  padding-left: 2.4em;
  }
  .switch.hit input + .toggle {
  animation: slide-off .4s ease both;
  }
  .switch.hit input:checked + .toggle {
  animation: slide-on  .4s ease both;
  }
  .switch input:active + .toggle::before {
  width: 3em;
  }
  .switch input:active:checked + .toggle::before {
  margin-left: -0.6em;
  }

  /* Animations if supported */
  @keyframes slide-on {
  0% {
    padding-left: 0em;
  }
  50% {
    padding-left: 2.8em;
  }
  100% {
    padding-left: 2.4em;
  }
  }
  @keyframes slide-off {
  0% {
    padding-left: 2.4em;
    text-indent: 0;
  }
  50% {
    padding-left: 0em;
    text-indent: -0.4em;
  }
  100% {
    padding-left: 0em;
    text-indent: 0;
  }
  }
</style>
