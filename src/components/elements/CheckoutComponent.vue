<template>
  <div class="container__checkout">
    <div class="order__form">
      <div class="back-button" @click="disableCheckout()">
        <i class="fas fa-arrow-left"></i>
      </div>
      <!--      <address-finder></address-finder>-->
      <div class="form-title">
        Checkout
      </div>
      <div class="form-fields">
        <div class="container__form-field">
          <label for="address-first-line">Address</label>
          <input type="text" v-model="addressLine" class="input__field" id="address-first-line"
                 placeholder="First line of your address...">
        </div>
        <!--        <div class="container__form-field">-->
        <!--          <label for="address-town">Town</label>-->
        <!--          <input class="input__field"  v-model="addressLine" id="address-town" placeholder="Town...">-->
        <!--        </div>-->
        <div class="container__form-field">
          <label for="address-postcode">Postcode</label>
          <input class="input__field" v-model="postcode" id="address-postcode" placeholder="Postcode...">
        </div>
        <div class="container__form-field">
          <label for="order-contact__telephone">Telephone</label>
          <input class="input__field" v-model="telephone" id="order-contact__telephone" placeholder="Telephone...">
        </div>
        <div class="container__form-field email">
          <label for="order-contact__email">Email</label>
          <input class="input__field" v-model="email" id="order-contact__email" placeholder="Email...">
        </div>
        <div class="container__form-field mentions">
          <label for="order-contact__mentions">Mentions</label>
          <textarea class="input__field" v-model="mentions" id="order-contact__mentions"
                    placeholder="If you have any mentions..." maxlength="500"/>
        </div>
      </div>
      <div class="terms">
        <input type="checkbox" class="checkbox" v-model="detailsVerified">
        <div class="terms-text">
          Please confirm that you have entered the right address.
        </div>
      </div>
      <div class="terms">
        You will receive payment instructions via phone or email once your order is accepted.
      </div>
      <div class="total-and-submit">
        <div class="order__total">Total: <span>£{{ cartTotal }}</span></div>
        <button class="submit-order text-white font-bold py-2 px-4 rounded-full" @click="submitOrder()" :class="[ !detailsVerified || cartTotal <= 0 ? ['disabled', 'opacity-50', 'cursor-not-allowed'] : '']">Submit Order
        </button>
      </div>
    </div>
  </div>
</template>

<script>

// import AddressFinder from "@/components/elements/AddressFinder";

export default {
  name: "CheckoutComponent",
  components: {
    // AddressFinder
  },
  mounted() {
    document.body.style.overflow = 'hidden';
  },
  unmounted() {
    document.body.style.overflow = 'auto';
  },
  data() {
    return {
      detailsVerified: false,
      addressLine: null,
      postcode: null,
      email: null,
      telephone: null,
      mentions: null
    }
  },
  computed: {
    cartTotal() {
      return this.$store.state.cart.total ?? 0.00;
    }
  },
  methods: {
    disableCheckout() {
      this.$store.commit('toggleCheckout', false);
    },
    submitOrder() {
      this.$store.dispatch('submitOrder', {
        address: {
          addressLine: this.addressLine,
          postcode: this.postcode
        },
        email: this.email,
        telephone: this.telephone
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.container__checkout {
  height: 100%;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: $black-transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  .order__form {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: $off-white;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    padding: 20px;
    overflow: auto;
    justify-content: space-between;

    @include md {
      border-radius: 1%;
      width: 80%;
      height: 90%;
      padding: 20px;
    }

    @include lg {
      width: 50%;
    }

    .form-title {
      font-weight: bold;
      font-size: 2.5rem;
      text-align: center;
      width: 100%;
      margin-top: 2em;
    }

    .form-fields {
      display: flex;
      flex-direction: row;
      gap: 1em;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      width: 100%;

      @include md {
        width: 65%;
      }

      .container__form-field {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        min-width: 45%;

        &.email, &.mentions {
          width: 95%;
        }

        .input__field {
          width: 100%;
          background-color: $grey;
        }

        textarea {
          width: 100%;
          min-width: 20em;
          min-height: 8em;
          background-color: $grey;
        }
      }
    }

    .terms {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 7px;

      .terms-text {
        font-size: 0.8rem;
      }
    }

    .total-and-submit {
      width: 100%;
      align-self: center;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      gap: 1em;

      .order__total {
        width: 50%;
        font-size: 1.2rem;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .submit-order {
        width: 100%;
        background-color: $tertiary;
        height: 3em;
      }
    }

    .back-button {
      font-size: 2rem;
      position: absolute;
      top: 20px;
      left: 20px;
      color: $primary;
    }

    input {
      padding: 4px;
    }
  }
}

</style>