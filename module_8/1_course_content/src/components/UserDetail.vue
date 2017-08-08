<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User age: {{ age }}</p>
        <!-- passing data from child to parent with custom event -->
        <button @click="resetName"
                class="btn">Reset Name</button>
        <!-- passing data from parent to child with callback function from parent
             acessible in child via probs -->
        <button @click="resetFunction()"
                class="btn">Reset Name</button>
    </div>
</template>

<script>
  import { eventBus } from '../main';
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      resetFunction: Function,
      age: Number
    },
    methods: {
      switchName() {
        return this.name.split('').reverse().join('');
      },
      resetName() {
        this.name = 'Jan';
        this.$emit('nameWasReset', this.name);
      }
    },
    created() {
      eventBus.$on('ageWasEdited', (age) => {
        this.age = age;
      });
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
