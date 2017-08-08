<template lang="html">
  <li class="list-group-item"
      @click="serverSelected"
      style="cursor: pointer">
      Server #{{ server.id }}
  </li>
</template>

<script>
  import { eventBus } from '../../main'
  export default {
    props: ['server'],
    methods: {
      serverSelected() {
        eventBus.serverSelected(this.server);
      }
    }
  }
</script>

<style lang="css">
</style>
