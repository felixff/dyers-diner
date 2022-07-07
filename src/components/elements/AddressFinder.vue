<template>
  <div class="flex items-center justify-between flex-wrap p-6">
    <div class="w-full m-auto max-w-4xl mt-5">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-postcode">
            Postcode
          </label>
          <input @blur="findAddresses()" v-model="postcode" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-postcode" type="postcode" placeholder="B7 5SA">
          <p class="text-gray-600 text-xs italic">Type in a postcode to find related addresses.</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-postcode">
            Addresses
          </label>
          <div class="relative">
            <select class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option v-for="(address, index) in addresses" :key="index">{{ address.summaryline }}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-gray-600 text-xs italic">Choose an address from the list.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddressFinder",
  data() {
    return {
      postcode: '',
      addresses: []
    }
  },
  methods: {
    findAddresses() {
      if (this.postcode !== '') {
        axios.get('https://ws.postcoder.com/pcw/api-key-here/address/uk/'+this.postcode)
            .then(response => (
                this.addresses = response.data
            ))
      }
    }
  }
}
</script>

<style scoped>

</style>