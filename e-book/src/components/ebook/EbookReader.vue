<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from "epubjs";
import { mapGetters } from "vuex";
import { exists } from "fs";

global.ePub = Epub;

export default {
  computed: {
    ...mapGetters(["fileName","menuVisible"])
  },
  methods: {
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
      }
    },

    toggleTitleAndMenu() {
      console.log('title');
      console.log(this.$store.state.book.menuVisible);
      this.$store.dispatch('setMenuVisible',!this.$store.state.book.menuVisible)
            console.log(this.$store.state.book.menuVisible);

    },

    initEpub() {
      const url =
        "http://192.168.1.80:9001/epub/" +
        this.$store.state.book.fileName +
        ".epub";
      this.book = new Epub(url);
      //   向ifram 绑定事件
      this.rendition = this.book.renderTo("read", {
        width: innerWidth,
        height: innerHeight,
        method: "default"
      });
      /* 触摸开始*/
      this.rendition.display();
      this.rendition.on("touchstart", event => {
        /* 获取点击X坐标 */
        this.touchStartX = event.changedTouches[0].clientX;
        /* 获取点击Y坐标 */
        this.touchStartY = event.changedTouches[0].clientY;
        /* 获取长按时间 */
        this.touchStartTime = event.timeStamp;
      });
      this.rendition.on("touchend", event => {
        const offseX = event.changedTouches[0].clientX - this.touchStartX;
        const time = event.timeStamp - this.touchStartTime;
        console.log(offseX, time);
        if (time < 500 && offseX > 40) {
          this.prevPage();
        } else if (time < 500 && offseX < -40) {
          this.nextPage();
        } else {
          this.toggleTitleAndMenu();
        }
        event.preventDefault();
        event.stopPropagation();
      });
    }
  },
  mounted() {
    console.log(this);
    this.$store
      .dispatch("setFileName", this.$route.params.fileName.split("|").join("/"))
      .then(() => {
        this.initEpub();
      });
  }
};
</script>

<style>
</style>
