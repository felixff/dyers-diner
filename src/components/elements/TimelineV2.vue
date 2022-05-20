<template>
  <div class="container__timeline">
    <div class="container__timeline-item">
      <img src="https://picsum.photos/175/100" alt="" class="timeline-image">
      <div class="timeline-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
    <div class="container__timeline-item">
      <img src="https://picsum.photos/175/100" alt="" class="timeline-image">
      <div class="timeline-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
    <div class="container__timeline-item">
      <img src="https://picsum.photos/175/100" alt="" class="timeline-image">
      <div class="timeline-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
    <div class="container__timeline-item">
      <img src="https://picsum.photos/175/100" alt="" class="timeline-image">
      <div class="timeline-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
    <div class="container__timeline-item">
      <img src="https://picsum.photos/175/100" alt="" class="timeline-image">
      <div class="timeline-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineV2"
}
</script>

<style lang="scss" scoped>
.container__timeline {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2em;
  height: 100%;
  gap: 4em;

  .container__timeline-item {
    display: flex;
    flex-direction: column;
    max-width: 14%;
    position: relative;

    &:nth-child(odd) {
      justify-self: flex-start;
      align-self: flex-start;

      &::after {
        content: "";
        background: $white;
        height: 5px;
        min-width: 20em;
        width: inherit;
        position: absolute;
        bottom: -20px;
        left: 0;
      }
    }

    &:nth-child(even) {
      justify-self: flex-end;
      align-self: flex-end;

      &::after {
        content: "";
        background: $white;
        height: 5px;
        min-width: 20em;
        width: inherit;
        position: absolute;
        top: -40px;
      }
    }
  }
}
</style>