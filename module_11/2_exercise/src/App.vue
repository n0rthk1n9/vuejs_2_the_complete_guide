<template>
<div class="container">
  <form v-if="!isSubmitted">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Awesome Form</h1>
        <hr>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text"
                 id="firstName"
                 class="form-control"
                 v-model="userData.firstName">
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text"
                 id="lastName"
                 class="form-control"
                 v-model="userData.lastName">
        </div>
        <hr>
        <div v-if="showCustomFullNameControl">
          <h3>Custom Component for Full Name</h3>
          <app-full-name-control v-model="userData.fullName"></app-full-name-control>
        </div>
        <label for="storeData">Show custom Full Name Control?</label>
        <app-ios-switcher id="showCustomFullNameControl"
                          v-model="showCustomFullNameControl">
        </app-ios-switcher>
        <hr>
        <div class="form-group">
          <label for="email">Mail</label>
          <input type="text"
                 id="email"
                 class="form-control"
                 v-model="userData.email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password"
                 id="password"
                 class="form-control"
                 v-model="userData.password">
       </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <label for="storeData">Store in Database?</label>
        <app-ios-switcher id="storeData"
                          v-model="storeData">
        </app-ios-switcher>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <button class="btn btn-primary"
                @click.prevent="submitted">
                Submit
        </button>
      </div>
    </div>
  </form>
  <hr>
  <div class="row" v-if="isSubmitted">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4>Your Data</h4>
        </div>
        <div class="panel-body">
          <p>Full Name: {{ userData.firstName }} {{ userData.lastName }}</p>
          <p>Full Name delivered by custom component: {{ userData.fullName }}</p>
          <p>Mail: {{ userData.email }}</p>
          <p>Password: {{ userData.password }}</p>
          <p>Store in Database?: {{ storeData }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import iOSSwitcher from './components/iOSSwitcher.vue';
  import FullNameControl from './components/FullNameControl.vue';
  export default {
    data() {
      return {
        userData: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          fullName: 'Hans Müller'
        },
        storeData: false,
        showCustomFullNameControl: false,
        isSubmitted: false
      }
    },
    methods: {
      submitted() {
        this.isSubmitted = true;
      }
    },
    components: {
      appIosSwitcher: iOSSwitcher,
      appFullNameControl: FullNameControl
    }
  }
</script>

<style>
</style>
