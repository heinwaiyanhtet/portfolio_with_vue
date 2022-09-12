<template>
  <div class="">
    <Header> </Header>
    <router-view></router-view>
  </div>
</template>

<script>

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import WOW from "wowjs/dist/wow.min"
import Header from "./components/Header";


export default {
  components: {Header},
  beforeCreate() {
    let wow = new WOW.WOW(
        {
          boxClass:     'wow',      // default
          animateClass: 'animated', // default
          offset:       0,          // default
          mobile:       true,       // default
          live:         false        // default
        }
    )
    wow.init();



  },

  methods: {
  },
}
</script>


<style>

@import "~wowjs/css/libs/animate.css";
@import "../public/css/style.css";
@import "../public/css/fontawesome.css";
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap');


*{
  font-family: 'Oswald', sans-serif;
}


</style>
