<template>
    <transition name="slide-down" >
    <div class="title-wrapper" v-show="this.$store.state.book.menuVisible">
      <div class="left" >
        <span class="icon-menu"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon-progress"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright"></span>
        </div>
        <div class="icon-wrapper" >
          <span class="icon-A"></span>
        </div>
      </div>
    </div>
  </transition> 
</template>

<script>
export default {

}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global.scss";

  .title-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 500;
    background-color: #fff;
    display: flex;
    width: 100%;
    height: px2rem(48);
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15);
    font-size: px2rem(22);
    .left {
      flex: 0 0 px2rem(37);
      @include right;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper {
        flex: 0 0 px2rem(37);
        @include left;
      }
    }
  }
</style>

