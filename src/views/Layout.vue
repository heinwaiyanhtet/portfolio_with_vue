<template>
  <Waypoint @change="onChange">
    <Header></Header>
  </Waypoint>
  <Waypoint @change="onChange">
    <Home></Home>
  </Waypoint>
  <Waypoint @change="onChange">
    <Projects></Projects>
  </Waypoint>
  <Waypoint @change="onChange">
    <Skills></Skills>
  </Waypoint>
   <Waypoint @change="onChange">
     <Testimonials></Testimonials>
   </Waypoint>
    <Waypoint @change="onChange">
      <Footer></Footer>
    </Waypoint>
</template>


<script>
import Header from "../components/Header";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

import { defineComponent } from "vue";
import { Waypoint } from 'vue-waypoint'

export default {
  name: "Layout",
  components: {Footer, Testimonials, Skills, Projects, Home, Header,Waypoint},

  setup() {
    const onChange = (waypointState) => {
      // Going can be:
      // IN
      // OUT
      // console.log(waypointState.going);

      // Direction can be:
      // UP
      // DOWN
      // LEFT
      // RIGHT
      // console.log(waypointState.direction);
    }

    return { onChange };
  }
}
</script>

<style>

</style>