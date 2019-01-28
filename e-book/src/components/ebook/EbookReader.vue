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
    // initEpub(){
    //  const url='http://192.168.1.80:9001/epub/'+this.fileName+'.epub'
    //  console.log(url);
    // }
  },
  mounted() {
    console.log(this.fileName);

    // this.$store.dispatch('setFileName',this.$route.params.fileName.split('|').join('/')).then(()=>{
    //     // this.initEpub()
    // })
  }
};
</script>

<style>
</style>
