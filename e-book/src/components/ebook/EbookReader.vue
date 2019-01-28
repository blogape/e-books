<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from "epubjs";
import { mapGetters } from "vuex";

global.ePub = Epub;

export default {
  computed: {
    ...mapGetters(["fileName"])
  },
  methods: {
    initEpub() {
      const url =
        "http://192.168.1.80:9001/epub/" +
        this.$store.state.book.fileName +
        ".epub";
      this.book = new Epub(url);
       //   向ifram 绑定事件
      /* 触摸开始*/
      this.rendition = this.book.renderTo("read", {
        width: innerWidth,
        height: innerHeight,
        method: "default"
      });
    //   触摸结束
      this.rendition.display();
      this.rendition.on("touchstart", event => {
        alert("123");
      });
    }
  },
  mounted() {
    // console.log(this.fileName);
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
