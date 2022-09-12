<template>
    <div :class="['col-md-6 col-lg-4 col-12 mb-4 wow',skills[indexKey].animateClass]">
      <img :src="skills[indexKey].image" class="mt-3" alt="">
      <h6 class="d-inline-block ms-3 fw-bolder">{{ skills[indexKey].title }}</h6>
      <div class="progress mt-4">
        <div :class="['progress-bar progress-bar-striped progress-bar-animated',skills[indexKey].bgColor]"
             role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="{width: skills[indexKey].width}"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Skill",
  props:{
    skills:{
      type:Object,
      required:true,
    },
    indexKey:{
      type: Number,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>