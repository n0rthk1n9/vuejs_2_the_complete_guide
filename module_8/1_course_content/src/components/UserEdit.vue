<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ age }}</p>
        <button @click="editAge"
                class="btn"
                style="margin-bottom: 5px;">
                Edit Age (custom event)
        </button>
        <button @click="editAgeWithEventBus"
                class="btn"
                style="margin-bottom: 5px;">
                Edit Age (event bus)
        </button>
        <button @click="editAgeWithEventBusCentralized"
                class="btn">
                Edit Age (event bus centralized)
        </button>
    </div>
</template>

<script>
  import { eventBus } from '../main';
  export default {
    props: {
      age: Number
    },
    methods: {
      editAge() {
        this.age = 30;
        this.$emit('ageWasEdited', this.age);
      },
      editAgeWithEventBus() {
        this.age = 30;
        eventBus.$emit('ageWasEdited', this.age);
      },
      editAgeWithEventBusCentralized() {
        this.age = 30;
        eventBus.changeAge(this.age);
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
