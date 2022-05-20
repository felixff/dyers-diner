<template>
  <div class="timeline">
    <vue-horizontal-timeline
        :items="timelineData"
        timeline-background="#441721FF"
        line-color="#883925FF"
        min-height="200px"
        :content-centered="true"
    />
  </div>
</template>

<script>
import { VueHorizontalTimeline } from "vue-horizontal-timeline";

export default {
  name: 'HelloWorld',
  components: {
    VueHorizontalTimeline
  },
  props: {
    msg: String
  },
  data() {
    return {
      timelineData : [
        {
          title: "2016",
          content: "Started out with first coffee van",
          stepCssClass: 'has-step-orange',
        },
        {
          title: "2017",
          content: "Upgraded to coffee and food van",
          stepCssClass: 'has-step-orange',
        },
        {
          title: "2020",
          content: "Upgraded to a bigger van and expanded the menu",
          stepCssClass: 'has-step-orange',
        },
        {
          title: "2021",
          content: "The van burned down in a fire and everything was lost",
          stepCssClass: 'has-step-orange',
        },
        {
          title: "2021",
          content: "Managed to get a new van and relaunched the business",
          stepCssClass: 'has-step-orange',
        },
        {
          title: "2022",
          content: "Opened the Chantry Library Cafe with the community's help",
          stepCssClass: 'has-step-orange',
        },
        {
          title: "2022",
          content: "New website",
          stepCssClass: 'has-step-orange',
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.timeline {
  width: 100%;
}
</style>
