<template lang="html">
  <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <app-server v-for="server in servers"
                    :server="server">
        </app-server>
      </ul>
  </div>
</template>

<script>
  import Server from './Server.vue';
  export default {
    data() {
      return {
        servers: [
          { id: 1, status: 'Normal'},
          { id: 2, status: 'Warning'},
          { id: 3, status: 'Critical'},
          { id: 4, status: 'Unknown'},
          { id: 5, status: 'Down'}
        ]
      }
    },
    components: {
      'app-server': Server
    }
  }
</script>

<style lang="css">
</style>
