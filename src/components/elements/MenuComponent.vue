<template>
  <div class="container__menu relative">
    <div class="menu-nav fixed h-96 w-46 text-left flex flex-col gap-3 border-l-2 border-slate-200">
      <div v-for="(group, groupName) in groupedMenuItems" :key="groupName"
           class="text-black text-left flex align-middle pl-10 pt-5 pb-5 border-transparent border-l-2 hover:border-slate-800 h-15 pointer">
        {{ groupName }}
      </div>
    </div>
    <div v-for="(group, groupName) in groupedMenuItems" class="menu__group" :key="groupName">
      <div class="group-name">{{ groupName }}</div>
      <div class="flex flex-col gap-4">
        <div v-for="(item, index) in group"
             class="menu__item flex items-center p-5 text-base rounded-lg group shadow cursor-pointer hover:scale-[1.01]"
             :key="index">
          <div class="item-description">{{ item.productName }}</div>
          <span class=short></span>
          <div class="item-price"><span>from</span> {{ item.price.regular }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import menuItemsRaw from '@/assets/menu/DyersDinerProducts.json'
import _ from 'lodash';

export default {
  name: "MenuComponent",
  setup() {
    const menuItems = ref(menuItemsRaw)

    console.log(menuItems.value)

    return {menuItems}
  },
  data() {
    return {}
  },
  onMounted() {
  },
  computed: {
    groupedMenuItems() {
      return _.groupBy(this.menuItems, 'productCategory');
    }
  }
}
</script>

<style lang="scss" scoped>
.container__menu {
  width: 100%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: $secondary;
  padding: 20px;

  .menu-nav {
    height: fit-content;
    left: 20%;
    top: 20%;
    transform: translate3d(-50%, 0, 0);
    display: none;

    @include lg {
      display: inline-block;
    }
  }

  .align-middle {
    align-items: center;
  }

  .menu__group {
    width: 90%;
    text-align: left;
    margin-block: 2em;
    margin-inline: auto;

    @include md {
      width: 100%;
    }

    @include lg {
      width: 35%;
    }

    .group-name {
      font-family: PlayFairRegular, serif;
      font-size: 2rem;
      margin-bottom: 0.5em;
      font-weight: bold;
    }

    .menu__item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .item-description {
        font-weight: bold;
      }

      .short {
        flex: 1;

        &::after {
          content: " ";
          flex: 1;
          border-bottom: 1px dotted $primary;
        }
      }

      .item-price {
        font-size: 0.9rem;
        font-weight: 600;
      }
    }
  }
}
</style>
<style lang="scss">
  .container__map {
    display: none;
  }
</style>