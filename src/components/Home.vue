<template>
  <section class="home w-100 vh-100 mt-5 mt-lg-0" id="home">
    <div class="container">
      <div class="row">
        <div class=" col-12 col-xl-6">
          <div class="intro wow slideInLeft ani-delay-1">
            <h1>Hi , I'm</h1>
            <h1 class="ml7 text-danger">
                <span class="text-wrapper">
                  <span class="letters text-nowrap"> Hein Wai Yan Htet </span>
                </span>
            </h1>
            <h5 class="">
              I'm energetic full stack web developer with 1.5 years of experience who is seeking to enhance web development excellence. I built a lot of responsive websites and projects with team. With the help of vue3 and laravel , I can make user-friendly web applications , web designs and also animations by using javascript libaries.
            </h5>
            <div id="foot">
              <button class="button-os">
                <a href="#">
                  <span> <a href="CV.pdf" target="_blank" download>Download CV</a> <i class="fas fa-download text-primary"></i></span>
                </a></button>
            </div>
            <!-- For Social App -->
            <div class="social text-sm-start mt-5 mt-sm-0">
              <div class="wrapper">
                <div class="icon facebook">
                  <div class="tooltip">Facebook</div>
                  <span><i class="fab fa-facebook-f"></i></span>
                </div>
                <div class="icon twitter">
                  <div class="tooltip">Twitter</div>
                  <span><i class="fab fa-twitter"></i></span>
                </div>
                <div class="icon instagram">
                  <div class="tooltip">Instagram</div>
                  <span><i class="fab fa-instagram"></i></span>
                </div>
                <a href="https://github.com/heinwaiyanhtet" target="_blank">
                  <div class="icon github">
                    <div class="tooltip">Github</div>
                    <span><i class="fab fa-github"></i></span>
                  </div>
                </a>
                <a href="https://www.youtube.com/channel/UCVnY1nrJnefVItNqKDAaE0Q" >
                  <div class="icon youtube">
                    <div class="tooltip">Youtube</div>
                    <span><i class="fab fa-youtube"></i></span>
                  </div>
                </a>
              </div>
            </div>
            <!-- For social app end -->
          </div>
        </div>
        <div class=" col-12 col-xl-6 wow slideInRight">
          <div class="autoplay">
            <div class="mt-0 mt-sm-3">
              <img src="images/me/me1.png" class="rounded-circle mt-5 img-fluid mt-5" alt="">
            </div>
<!--            <div class="mt-sm-5 mt-0">-->
<!--              <img src="images/me/me2.png" class="rounded-circle mt-5 img-fluid mt-5" alt="">-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import anime from "../assets/cursor_animation/anime.min";
export default {
  name: "Home",
  mounted() {
    var textWrapper = document.querySelector('.ml7 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: true})
        .add({
          targets: '.ml7 .letter',
          translateY: ["1.1em", 0],
          translateX: ["0.55em", 0],
          translateZ: 0,
          rotateZ: [180, 0],
          duration: 750,
          easing: "easeOutExpo",
          delay: (el, i) => 50 * i
        }).add({
        targets: '.ml7',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
  }
}
</script>

<style scoped>

</style>