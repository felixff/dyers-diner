<template>
  <div class="container__timeline">
    <div class="timeline__separator">
      <div class="timeline">
        <ul>
          <span class="default-line"></span>
          <span class="draw-line"></span>
          <li :style="{'height':lineHeight(0)}">
            <div>
            </div>
          </li>
          <li :style="{'height':lineHeight(0)}">
            <div>
            </div>
          </li>
          <li :style="{'height':lineHeight(-2)}">
            <div>
            </div>
          </li>
          <li :style="{'height':lineHeight(-3)}">
            <div>
            </div>
          </li>
          <li :style="{'height':lineHeight(-7)}">
            <div>
            </div>
          </li>
          <li :style="{'height':lineHeight(-5)}">
            <div>
            </div>
          </li>
          <li :style="{'height':lineHeight(7)}">
            <div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-for="(item, index) in timelineData" class="timeline-item" :key="index">
      <div class="timeline-item__title"
           data-aos="zoom-in"
           data-aos-duration="1000"
      >
        {{ item.title }}
      </div>
      <div class="timeline-item__image">
        <img
            :src="item.image"
            :alt="`Timeline image for ${item.title}`"
            :data-aos="getFadeStyleImage(index)"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted} from 'vue';
import AOS from 'aos'
import $ from "jquery";

export default {
  name: 'TimelineComponent',
  setup() {
    onMounted(() => {
      let timelineHeight = 0;

      AOS.init();
      // Timeline Scroll Section
// --------------------------------------------------------------
      const items = $(".timeline li"),
          greyLine = $('.default-line'),
          lineToDraw = $('.draw-line');

// sets the height that the greyLine (.default-line) should be according to `.timeline ul` height

// run this function only if draw line exists on the page
      if (lineToDraw.length) {
        $(window).on('scroll', function () {

          // Need to constantly get '.draw-line' height to compare against '.default-line'
          const greyLineHeight = greyLine.height(),
              windowDistance = $(window).scrollTop(),
              windowHeight = $(window).height() / 2,
              timelineDistance = $(".timeline").offset().top;
          timelineHeight = greyLine.height();

          if (windowDistance >= timelineDistance - windowHeight) {
            const line = windowDistance - timelineDistance + windowHeight;

            if (line <= greyLineHeight) {
              lineToDraw.css({
                'height': line + 20 + 'px'
              });
            }
          }

          // This takes care of adding the class in-view to the li:before items
          const bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
          items.each(function () {
            const circlePosition = $(this).offset();

            if (bottom > circlePosition.top) {
              $(this).addClass('in-view');
            } else {
              $(this).removeClass('in-view');
            }
          });

          return {timelineHeight};
        });
      }
    });
  },
  components: {},
  props: {
    msg: String
  },
  data() {
    return {
      timelineData: [
        {
          title: "2016",
          content: "Started out with first coffee van",
          image: require('@/assets/img/timeline/2022-1.webp')
        },
        {
          title: "2017",
          content: "Upgraded to coffee and food van",
          image: require('@/assets/img/timeline/2022-1.webp')
        },
        {
          title: "2020",
          content: "Upgraded to a bigger van and expanded the menu",
          image: require('@/assets/img/timeline/2022-1.webp')
        },
        {
          title: "2021",
          content: "The van burned down in a fire and everything was lost",
          image: require('@/assets/img/timeline/2022-1.webp')
        },
        {
          title: "2021",
          content: "Managed to get a new van and relaunched the business",
          image: require('@/assets/img/timeline/2022-1.webp')
        },
        {
          title: "2022",
          content: "Opened the Chantry Library Cafe with the community's help",
          image: require('@/assets/img/timeline/2022-1.webp')
        },
        {
          title: "2022",
          content: "New website",
          image: require('@/assets/img/timeline/2022-1.webp')
        }
      ]
    }
  },
  methods: {
    getFadeStyleImage(index) {
      return index % 2 !== 0 ? 'fade-left' : 'fade-right';
    },
    // eslint-disable-next-line no-unused-vars
    lineHeight(index) {
      return `${25 + index}em`;
    }
  }
}
</script>

<style lang="scss" scoped>
.container__timeline {
  width: 100%;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  position: relative;
  margin-bottom: 3em;

  .timeline {
    padding: 50px;

    ul {
      padding: 0;
    }

    .default-line {
      content: '';
      position: absolute;
      left: 50%;
      width: 4px;
      background: $white-calmer;
      height: 89%;
    }

    .draw-line {
      width: 4px;
      height: 0;
      position: absolute;
      left: 50%;
      background: $black;
    }

    ul li {
      list-style-type: none;
      position: relative;
      width: 2px;
      margin: 0 auto;
      height: calc(100% * 9/21);
      background: transparent;

      &.in-view {
        @include global-transition;

        &::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: $primary;
          background-size: 20px 20px;
          background-repeat: no-repeat;
          background-position: center;
          @include global-transition;
        }
      }

      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: inherit;
        background: $white-calmer;
        transition: all .4s ease-in-out;
      }

    }
  }

  .timeline__separator {
    position: absolute;
    //width: 1px;
    height: 100%;
    //border-right: 1px solid $black;
  }

  .timeline-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }

    .timeline-item__title {
      text-align: center;
      font-family: PlayFairRegular, serif;
      font-size: 3rem;
      width: 30%;
    }

    .timeline-item__image {
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 80%;
        height: 30%;
      }
    }
  }
}
</style>
