<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary"
                        @click="selectComponentBlue"
                        >
                        Load Blue Template
                </button>
                <button class="btn btn-success"
                        @click="selectComponentGreen"
                        >
                        Load Green Template
                </button>
                <button class="btn btn-danger"
                        @click="selectComponentRed"
                        >
                        Load Red Template
                </button>
                <hr>
                <component :is="selectedComponent">
                    <h2>Super awesome heading</h2>
                    <p>Hello I am the {{ componentText }} template</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
          return {
            selectedComponent: 'appBlue',
            componentText: 'blue'
          }
        },
        methods: {
          selectComponentBlue() {
            this.selectedComponent = 'appBlue';
            this.componentText = 'blue';
          },
          selectComponentGreen() {
            this.selectedComponent = 'appGreen';
            this.componentText = 'green';
          },
          selectComponentRed() {
            this.selectedComponent = 'appRed';
            this.componentText = 'red';
          }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
