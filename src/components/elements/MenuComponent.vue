<template>
  <div class="container__menu relative">
    <div class="menu-nav sticky h-96 w-46 text-left flex flex-col gap-3 border-l-2 border-slate-200 top-12">
      <a v-for="(group, groupName) in groupedMenuItems" :key="groupName" :href="`#${groupName}`" :id="`nav${groupName}`"
         class="text-black text-left flex align-middle pl-5 pt-3 pb-3 border-transparent border-l-2 h-15 pointer">
        {{ groupName }}
      </a>
    </div>
    <div class="container__menu-groups">
      <div v-for="(group, groupName) in groupedMenuItems" class="menu__group" :key="groupName" :id="groupName"
           :style="screenWidth < 768 ? {'border-bottom' : '1px solid rgba(0, 0, 0, 0.2)'} :  {'border-bottom' : 'none'}">
        <div class="group-name__container" @click="menuExpanded[groupName] = !menuExpanded[groupName]">
          <div class="group-name" :class="{'group-control' : screenWidth < 768}">{{ groupName }}</div>
          <div v-if="screenWidth < 768 && menuExpanded[groupName] === false">
            <i class="fas fa-chevron-down chevron"></i>
          </div>
          <div v-else-if="screenWidth < 768 && menuExpanded[groupName]">
            <i class="fas fa-chevron-up chevron"></i>
          </div>
        </div>
        <div class="flex flex-col gap-4" :class="{'shrunk' : screenWidth < 768 && menuExpanded[groupName] === false}">
          <div v-for="(item, index) in group"
               class="menu__item flex items-center p-5 text-base rounded-lg group shadow cursor-pointer transition"
               :key="index" @click="addToCart(group[index])">
            <div class="item-description">{{ item.productName }}</div>
            <span class=short></span>
            <div class="item-price">
              £{{ item.price.regular }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import menuItemsRaw from '@/assets/menu/DyersDinerProducts.json'
import _ from 'lodash';
import format from "@/components/utils/format";

export default {
  name: 'MenuComponent',
  setup() {
    const menuItems = ref(menuItemsRaw)
    return {menuItems}
  },
  data() {
    return {
      quantityToAdd: 1,
      menuExpanded: {},
    }
  },
  mounted() {
    const groups = Object.keys(this.groupedMenuItems);
    groups.forEach(group => {
      this.menuExpanded[group] = false;
    })
    window.addEventListener("scroll", this.trackMenu(), {passive: true});
  },
  unmounted() {
    this.$store.commit('setNavbarFixed', false);
    window.removeEventListener("scroll", this.trackMenu(), true);
  },
  computed: {
    groupedMenuItems() {
      return _.groupBy(this.menuItems, 'productCategory');
    },
    screenWidth() {
      return this.$store.state.windowInternalWidth;
    }
  },
  methods: {
    addToCart(item) {
      this.$store.commit('addToCart', {
        description: item.productName,
        quantity: this.quantityToAdd,
        price: format.numberWithDecimals(this.quantityToAdd * item.price.regular)
      });
    },
    trackMenu() {
      return () => {
        const menuSections = document.querySelectorAll('.menu__group');
        const navItems = document.querySelectorAll('.menu-nav a');

        let current = '';
        menuSections.forEach((section) => {
          const sectionTop = section.offsetTop;

          if (scrollY >= sectionTop - 200 + screen.height / 2) {
            current = section.getAttribute('id');
          }
        });

        navItems.forEach((item) => {
          item.classList.remove('active');
          item.classList.add('border-transparent');

          const itemId = item.getAttribute('id') ? item.getAttribute('id').replace('nav', '') : null;

          if (current === itemId) {
            item.classList.add('active');
            item.classList.remove('border-transparent');
          }
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container__menu {
  width: 80%;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
  gap: 5em;

  @include phoneLandscape {
    justify-content: center !important;
  }

  @include md {
    width: 100%;
    justify-content: flex-start;
  }

  @include lg {
    width: 100%;
    justify-content: flex-end;
  }

  .container__menu-groups {
    background-color: $secondary;
    box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
    -moz-box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
    -webkit-box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
    -o-box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
    border-radius: 12px;
    padding: 20px;

    @include lg {
      width: 675px;
    }

    //@include md {
    //  width: 100%;
    //}
    //
    //@include lg {
    //  width: 70%;
    //}
    //
    //@include xl {
    //  width: 50%;
    //}

    .menu__group {
      width: 100%;
      text-align: left;
      margin-bottom: 2em;
      margin-right: 5em;
      height: 100%;

      .group-name__container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;

        .group-name {
          font-family: PlayFairRegular, serif;
          font-size: 2rem;
          margin-bottom: 0.5em;
          font-weight: bold;
        }
      }

      .menu__item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .item-description {
          font-weight: bold;
          padding-right: 40px;
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

  .menu-nav {
    height: fit-content;
    top: 60px;
    display: none;
    border-left-width: 2px;
    margin-top: 5em;
    margin-left: 3em;

    a {
      font-size: 1rem;
      transform: translateX(-2px);

      &.active {
        border-color: rgb(30 41 59) !important;
      }
    }

    @include xl {
      display: inline-block;
    }
  }

  .align-middle {
    align-items: center;
  }

  .shrunk {
    height: 0 !important;
    overflow: hidden;
  }

  .group-control {
    font-size: 1.4rem !important;
  }

  .chevron {
    color: $primary;
    width: 20px;
  }
}
</style>
<style lang="scss">
.container__map {
  display: none;
}

.hide-this {
  a {
    color: $primary !important;
  }
}
</style>