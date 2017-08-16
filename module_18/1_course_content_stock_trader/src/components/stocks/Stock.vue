<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h4 class="panel-titel">
          {{ stock.name }}
          <small>(Price: {{ stock.price | formatDeEuro }})</small>
        </h4>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <div class="form-group has-feedback"
               :class="{ 'has-error': insufficentFunds || !Number.isInteger(quantity),
                         'has-success': quantity > 0 && !(insufficentFunds), }">
               <input type="number"
                      class="form-control"
                      placeholder="Quantity"
                      v-model.number="quantity">
               <span  class="glyphicon form-control-feedback"
                      :class="{ 'glyphicon-remove': insufficentFunds || !Number.isInteger(quantity),
                                'glyphicon-ok': quantity > 0 && !(insufficentFunds), }">
               </span>
          </div>
        </div>
        <div class="pull-right">
          <button class="btn btn-success"
                  @click="buyStock"
                  :disabled="insufficentFunds || quantity <= 0 || !Number.isInteger(quantity)">
                  {{ insufficentFunds ? 'Insufficient Funds' : 'Buy' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficentFunds() {
        return this.quantity * this.stock.price > this.funds;
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
