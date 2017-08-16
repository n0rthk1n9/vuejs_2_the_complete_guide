<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h4 class="panel-titel">
          {{ stock.name }}
          <small>(Price: {{ stock.price | formatDeEuro }} | Quantity: {{ stock.quantity }})</small>
        </h4>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <div class="form-group has-feedback"
               :class="{ 'has-error': insufficentQuantity || !Number.isInteger(quantity),
                         'has-success': quantity > 0 && !(insufficentQuantity), }">
               <input type="number"
                      class="form-control"
                      placeholder="Quantity"
                      v-model.number="quantity">
               <span  class="glyphicon form-control-feedback"
                      :class="{ 'glyphicon-remove': insufficentQuantity || !Number.isInteger(quantity),
                                'glyphicon-ok': quantity > 0 && !(insufficentQuantity), }">
               </span>
         </div>
        </div>
        <div class="pull-right">
          <button class="btn btn-success"
                  @click="sellStock"
                  :disabled="insufficentQuantity || quantity <= 0 || !Number.isInteger(quantity)">
                  {{ insufficentQuantity ? 'Insufficient Stock' : 'Sell' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficentQuantity() {
        return this.quantity > this.stock.quantity;
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.placeSellOrder(order);
        this.quantity = 0;
      }
    }
  }
</script>
