<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName"
                class="btn">
                Change my name
        </button>
        <p>Name is: {{ name }}</p>
        <p>Age is: {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name"
                                 @nameWasReset="name = $event"
                                 :resetFunction="resetName"
                                 :age="age">
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :age="age"
                               @ageWasEdited="age = $event">
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
          return {
            name: 'Jan',
            age: 27
          }
        },
        methods: {
          changeName() {
            this.name = 'Maike';
          },
          resetName() {
            this.name = 'Jan';
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
