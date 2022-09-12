<template>
  <section id="skills" class="skills">

    <div class="container">
      <div class="row justify-content-center mb-3">
        <div class="col-12 col-md-6 col-lg-6 col-xl-4 between">
          <div class="card shadow-lg wow fadeInDownBig ani-delay-2">
            <div class="card-body text-center">
              <i class="fas fa-medal fa-2x"></i>
              <h2 class="d-inline-block">Ui/Ux</h2>
              <h6>front-end web developer</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <h1 class="text-nowrap noPhotoHoverEffect wow flipInX">
          MY Awesome SKILLS <img class="noPhoto" alt="" style="display: none; transition: all 0.5s ease-in-out;">
      </h1>
      <div class="heading-line mb-5"></div>
    </div>

    <div class="container">
      <div class="row">

        <Skill :skills="skills"
               v-for="(skill,index) in skills"
               :indexKey="index"
               :key="skill.id"
        >
        </Skill>

      </div>
    </div>
  </section>
</template>
<script>

import { v4 as uuidv4 } from 'uuid';
import Skill from "./Skill";

export default {
  name: "Skills",
  components: {Skill},
  data() {
    return {
      "skills":[
        {
          "id":uuidv4(),
          "image":"images/html.png",
          "title":"HTML",
          "width":"100%",
          "bgColor":"bg-html",
          "animateClass":"rotateInDownLeft",
        },
        {
          "id":uuidv4(),
          "image":"images/css-3.png",
          "title":"CSS",
          "width":"85%",
          "bgColor": "bg-css",
          "animateClass":"rotateInDownLeft",
        },
        {
          "id":uuidv4(),
          "image":"images/js-file.png",
          "title":"JAVASCRIPT",
          "width":"60%",
          "bgColor":"bg-javascript",
          "animateClass":"rotateInDownLeft",
        },
        {
          "id":uuidv4(),
          "image":"images/js-file.png",
          "title":"jQuery",
          "width":"85%",
          "bgColor":"bg-jquery",
          "animateClass":"rotateInDownRight",
        },
        {
          "id":uuidv4(),
          "image":"images/vue.svg",
          "title":"Vue",
          "width":"85%",
          "bgColor":"bg-vue",
          "animateClass":"rotateInDownRight",
        },
        {
          "id":uuidv4(),
          "image":"images/experience.png",
          "title":"Adobe Xd",
          "width":"90%",
          "bgColor":"bg-xd",
          "animateClass":"rotateInDownRight",
        },
        {
          "id":uuidv4(),
          "image":"images/illustrator.png",
          "title":"Adobe Illustrator",
          "width":"90%",
          "bgColor":"bg-Ai",
          "animateClass":"fadeInUpBig",
        },
        {
          "id":uuidv4(),
          "image":"images/photoshop.png",
          "title":"Adobe photoshop 2021",
          "width":"90%",
          "bgColor":"bg-ps",
          "animateClass":"fadeInUpBig",
        },
        {
          "id":uuidv4(),
          "image":"images/laravel.svg",
          "title":"Laravel",
          "width":"75%",
          "bgColor":"bg-laravel",
          "animateClass":"fadeInUpBig",
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>



<!--        <div class="col-md-6 col-lg-4 col-12 mb-4 wow rotateInDownLeft">-->
<!--          <img src="images/html.png" class="mt-3" alt="">-->
<!--          <h6 class="d-inline-block ms-3 fw-bolder">HTML</h6>-->
<!--          <div class="progress mt-4">-->
<!--            <div class="bg-html progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-md-6 col-lg-4 col-12 mb-4 wow rotateInDownLeft">-->
<!--          <img src="images/css-3.png" class="mt-3" alt="">-->
<!--          <h6 class="d-inline-block ms-3 fw-bolder">CSS</h6>-->
<!--          <div class="progress mt-4">-->
<!--            <div class="bg-css progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 85%"></div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-6 col-lg-4 col-12 mb-4 wow rotateInDownLeft">-->
<!--          <img src="images/js-file.png" class="mt-3" alt="">-->
<!--          <h6 class="d-inline-block ms-3 fw-bolder">JAVASCRIPT</h6>-->
<!--          <div class="progress mt-4">-->
<!--            <div class="bg-javascript progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 50%"></div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-md-6 col-lg-4 col-12 mb-4 wow rotateInDownRight">-->
<!--          <img src="images/jquery.png" class="mt-3" alt="">-->
<!--          <h6 class="d-inline-block ms-3 fw-bolder">jQuery</h6>-->
<!--          <div class="progress mt-4">-->
<!--            <div class="bg-jquery progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 85%"></div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-6 col-lg-4 col-12 mb-4 wow rotateInDownRight">-->
<!--          <img src="images/vue.svg" class="mt-3" alt="">-->
<!--          <h6 class="d-inline-block ms-3 fw-bolder">Vue</h6>-->
<!--          <div class="progress mt-4">-->
<!--            <div class="bg-vue progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-6 col-lg-4 col-12 mb-4 wow rotateInDownRight">-->
<!--          <img src="images/experience.png" class="mt-3" alt="">-->
<!--          <h6 class="d-inline-block ms-3 fw-bolder">Adobe Xd</h6>-->
<!--          <div class="progress mt-4">-->
<!--            <div class=""bg-xd" progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-6 col-lg-4 col-12 mb-4 wow fadeInUpBig">-->
<!--          <img src="images/illustrator.png" class="mt-3" alt="">-->
<!--          <h6 class="d-inline-block ms-3 fw-bolder">Adobe Illustrator</h6>-->
<!--          <div class="progress mt-4">-->
<!--            <div class="bg-Ai progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-6 col-lg-4 col-12 mb-4 wow fadeInUpBig">-->
<!--          <img src="images/photoshop.png" class="mt-3" alt="">-->
<!--          <h6 class="d-inline-block ms-3 fw-bolder">Adobe photoshop 2021</h6>-->
<!--          <div class="progress mt-4">-->
<!--            <div class="bg-ps progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-6 col-lg-4 col-12 mb-4 wow fadeInUpBig">-->
<!--          <img src="images/laravel.svg" class="mt-3" alt="">-->
<!--          <h6 class="d-inline-block ms-3 fw-bolder">Laravel (comming soon)</h6>-->
<!--          <div class="progress mt-4">-->
<!--            <div class="bg-laravel progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 25%"></div>-->
<!--          </div>-->
<!--        </div>-->