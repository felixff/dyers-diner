<template>
  <div class="container__cart">
    <div v-if="cart.total > 0" class="cart-handle rounded-l-full" @click="toggleCart()">
      <i class="fas fa-shopping-cart fa-xl"></i>
    </div>
    <div class="cart-control">
      <button class="cart__checkout text-white font-bold py-2 px-4 rounded-full" @click="enableCheckout()">
        Go to checkout
      </button>
      <div class="container__service-type">
        <button class="button__service font-bold py-2 px-4 ease-linear"
                :class="{ 'active-service' : activeService === 'delivery'}" @click="setActiveService('delivery')">
          <i class="fas fa-truck-fast service-icon"></i>
          Delivery
        </button>
        <button class="button__service font-bold py-2 px-4 ease-linear"
                :class="{ 'active-service' : activeService === 'collection'}" @click="setActiveService('collection')">
          <i class="fas fa-bag-shopping service-icon"></i>
          Collection
        </button>
      </div>
    </div>
    <div class="cart-list">
      <div class="cart-items">
        <div v-for="(item, index) in cart.items" :key="index" class="item-line">
          <div class="quantity-and-description">
            <div class="item-line__quantity">
              {{ item.quantity }}
            </div>
            <div class="item-line__description">
              {{ item.description }}
            </div>
          </div>
          <div class="remove-and-price">
            <div class="remove-item" @click="removeFromCart(item)">
              <i class="fas fa-trash cursor-pointer"></i>
            </div>
            <div class="item-line__price">
              £<span style="letter-spacing: 0;">{{ priceForDisplay(item.price) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="cart.total > 0" class="cart__total">
      <label class="label__total">Total:</label>
      <div class="total-amount">
        £{{ priceForDisplay(cart.total) }}
      </div>
    </div>
  </div>
</template>

<script>
import format from '@/components/utils/format';

export default {
  name: "CartComponent",
  format,
  components: {},
  data() {
    return {
    }
  },
  computed: {
    priceForDisplay() {
      return price => format.numberWithDecimals(price, true);
    },
    cart() {
      return this.$store.state.cart;
    },
    activeService() {
      return this.$store.state.activeService;
    }
  },
  methods: {
    setActiveService(activeService) {
      this.$store.commit('setActiveService', activeService);
    },
    removeFromCart(item) {
      this.$store.commit('removeFromCart', item);
    },
    formattedPrice(price, asText = false) {
      return format.numberWithDecimals(asText);
    },
    enableCheckout() {
      this.$store.commit('toggleCheckout', true);
    },
    toggleCart() {
      this.$store.commit('toggleCart');
    }
  }
}
</script>

<style lang="scss" scoped>
.container__cart {
  max-height: 90vh;
  width: 100%;
  position: sticky;
  top: 0;
  align-self: flex-start;
  justify-content: flex-start;
  margin-top: 3em;
  padding: 20px;
  margin-bottom: 20px;
  background-color: $grey-calmer;
  box-shadow: 0 1px 1px rgb(0 0 0 / 30%);
  -moz-box-shadow: 0 1px 1px rgb(0 0 0 / 30%);
  -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 30%);
  -o-box-shadow: 0 1px 1px rgb(0 0 0 / 30%);
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;

  @include md {
    background-color: $secondary;
    border-radius: 12px;
    margin-top: 1em;
    margin-right: 2em;
  }

  .cart-handle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: $secondary;
    background-color: $tertiary;
    padding-left: 6px;
    position: absolute;
    top: 5em;
    left: 0;
    transform: translateX(-100%);
    width: 40px;
    height: 40px;

    @include md {
      transform: translateX(0);
      display: none;
    }

    .fa-shopping-cart {
      font-size: 1.2rem;
    }
  }

  .cart-control {
    display: flex;
    flex-direction: column;
    gap: 2em;
    border-bottom: 1px solid $grey-darker;
    padding-bottom: 2em;
    margin-bottom: 2em;
    height: 100%;

    @include md {
      border-bottom: 1px solid $grey-calmer;
    }

    .cart__checkout {
      width: 100%;
      background-color: $tertiary;
      height: 3em;
    }

    .container__service-type {
      border-radius: 50rem;
      color: $black;
      background-color: $grey-darker;
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 0;
      align-items: center;
      justify-content: space-evenly;
      padding: 2px;
      height: 3em;

      @include md {
        background-color: $grey-calmer;
      }

      .button__service {
        width: 40%;
        transition-duration: 75ms;
        transition-property: all;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        font-size: 0.8rem;
        gap: 4px;
        justify-content: center;
      }

      .active-service {
        color: $black;
        background-color: $off-white;
        width: 60% !important;
        border-radius: 50rem;
        font-size: 1rem;
        font-weight: bold;
        box-shadow: 0 1px 1px rgb(0 0 0 / 30%);
        -moz-box-shadow: 0 1px 1px rgb(0 0 0 / 30%);
        -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 30%);
        -o-box-shadow: 0 1px 1px rgb(0 0 0 / 30%);

        .service-icon {
          color: $tertiary !important;
        }
      }
    }
  }

  .cart-list {
    display: flex;
    max-height: 40vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid $grey-darker;
    margin-bottom: 2em;
    padding-bottom: 2em;

    @include phoneLandscape {
      max-height: 40vh !important;
    }

    @include md {
      border-bottom: 1px solid $grey-calmer;
      max-height: 50vh;
    }

    .cart-items {
      height: 80%;
      width: 100%;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 2em;
      padding-right: 10px;

      .item-line {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 5px;

        .quantity-and-description {
          display: flex;
          flex-direction: row;
          gap: 5px;
          align-items: center;

          .item-line__quantity {
            font-size: 1rem;
            border-radius: 50%;
            background-color: $grey-darker;
            width: 25px;
            height: 25px;
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: flex-start;
            color: $off-white;

            @include md {
              background-color: $grey-calmer;
              color: $black;
            }
          }

          .item-line__description {
            font-size: 1rem;
            max-width: 60%;
            text-align: left;
          }
        }

        .remove-and-price {
          display: flex;
          flex-direction: row;
          gap: 7px;
          justify-content: space-between;
          align-items: center;
          align-self: flex-start;
          min-width: 71px;

          .remove-item {
            font-size: 1rem;
            color: $primary-lighter;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 5;
          }

          .item-line__price {
            font-size: 1rem;
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            min-width: 30px;
            transform: translateY(1px);
          }
        }


      }
    }
  }

  .cart__total {
    display: flex;
    flex-direction: row;
    gap: 5em;

    .label__total {
      font-weight: bold;
      font-size: 1.2rem;
    }

    .total-amount {
      font-size: 1.2rem;
    }
  }
}
</style>