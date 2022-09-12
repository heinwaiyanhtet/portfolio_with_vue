<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light header__nav">
    <div class="container-fluid">

      <button class="border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <div class="humburgarMenuContainer me-5">
          <div class="humburger line1"></div>
          <div class="humburger line2"></div>
          <div class="humburger line3"></div>
        </div>
      </button>

      <div class="collapse navbar-collapse justify-content-end mt-5 mt-md-0" id="navbarSupportedContent">
        <div>
          <div class="position-relative">
              <ul class="navbar-nav  mb-2 mb-lg-0 tabs" style="position: relative;">
                    <li class="nav-item"
                        v-for="(navBarItem,index) in navBarItems" :key="index"
                    >
                      <a class="nav-link fw-bold text-black active" :id="index" @click="navigate(navBarItem)">{{navBarItem}}</a>
                  </li>
              </ul>
          </div>
          <div id="slider" class="slider d-none d-lg-block"></div>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>
<script>

import $ from "../../node_modules/jquery/dist/jquery.min";

export default {
  name: "Nav",
  data() {
    return {
       navBarItems:["About","Projects","Skills","Testimonials","Contact"],
       screenheight : $(window).height(),
       url:window.location.origin,
    }
  },
  methods: {
    navigate(navBarItem) {
      this.$router.push({ name: `${navBarItem}` });
    }
  },
    mounted() {
      let screenHeight = this.screenheight;
      $(window).scroll(function () {
          let currentPosition = $(this).scrollTop();
          if(currentPosition > screenHeight-150){
              $(".site-nav").addClass("site-nav-scroll");
          }
          else{
            $(".site-nav").removeClass("site-nav-scroll");
          }
      });

      let tabsMenu = document.querySelectorAll(".nav-item a");
      const sliderTag = document.getElementById("slider");
      tabsMenu.forEach((el) => {
          sliderTag.style.width = el.offsetWidth + "px";
          el.addEventListener("click",function (event) {
              const clickTagId = event.target.id;
              const clickLiTag = document.getElementById(clickTagId);
              const clickLiTagWidth = clickLiTag.offsetWidth;
              sliderTag.style.width = clickLiTagWidth + "px";
              const clickedLiTagOffsetLeft = clickLiTag.offsetLeft;
              sliderTag.style.transform = `translateX(${clickedLiTagOffsetLeft}px)`
          })
      })
  }
}
</script>

<style lang="scss">

</style>