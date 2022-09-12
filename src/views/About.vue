<template>
  <section className="home w-100 vh-100 mt-5 mt-lg-0" id="home">
    <div className="container">
      <div className="row">
        <div className=" col-12 col-xl-6">
          <div className="intro wow slideInLeft ani-delay-1">
            <h1>Hi , I'm</h1>
            <h1 className="ml7 text-danger">
                <span className="text-wrapper">
                  <span className="letters text-nowrap"> Hein Wai Yan Htet </span>
                </span>
            </h1>
            <h5 className="">
              I'm energetic full stack web developer with 1.5 years of experience who is seeking to enhance web
              development excellence. I built a lot of responsive websites and projects with team. With the help of vue3
              and laravel , I can make user-friendly web applications , web designs and also animations by using
              javascript libaries.
            </h5>
            <div id="foot">
              <button className="button-os">
                <a href="#">
                  <span> <a href="CV.pdf" target="_blank" download>Download CV</a> <i
                      className="fas fa-download text-primary"></i></span>
                </a></button>
            </div>
            <!-- For Social App -->
            <div className="social text-sm-start mt-5 mt-sm-0">
              <div className="wrapper">
                <div className="icon facebook">
                  <div className="tooltip">Facebook</div>
                  <span><i className="fab fa-facebook-f"></i></span>
                </div>
                <div className="icon twitter">
                  <div className="tooltip">Twitter</div>
                  <span><i className="fab fa-twitter"></i></span>
                </div>
                <div className="icon instagram">
                  <div className="tooltip">Instagram</div>
                  <span><i className="fab fa-instagram"></i></span>
                </div>
                <a href="https://github.com/heinwaiyanhtet" target="_blank">
                  <div className="icon github">
                    <div className="tooltip">Github</div>
                    <span><i className="fab fa-github"></i></span>
                  </div>
                </a>
                <a href="https://www.youtube.com/channel/UCVnY1nrJnefVItNqKDAaE0Q">
                  <div className="icon youtube">
                    <div className="tooltip">Youtube</div>
                    <span><i className="fab fa-youtube"></i></span>
                  </div>
                </a>
              </div>
            </div>
            <!-- For social app end -->
          </div>
        </div>
        <div className=" col-12 col-xl-6 wow slideInRight">
          <div className="autoplay">
            <div className="mt-0 mt-sm-3">
              <img src="images/me/me1.png" className="rounded-circle mt-5 img-fluid mt-5" alt="">
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
  name: "About",
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