<template lang="html">
  <div class="row">
    <app-server-status></app-server-status>
    <app-server-details></app-server-details>
  </div>
</template>

<script>
  import ServerStatus from '../../components/Server/ServerStatus.vue'
  import ServerDetails from '../../components/Server/ServerDetails.vue'
  export default {
    components: {
      'app-server-status': ServerStatus,
      'app-server-details': ServerDetails
    }
  }
</script>

<style lang="css">
</style>
