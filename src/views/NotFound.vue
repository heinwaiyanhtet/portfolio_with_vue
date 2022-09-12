<template>
<div>
  <h1>Oops!</h1>
  <h3>The one you are looking for isn't here.</h3>
  <router-link :to="{name:'Layout'}"> Back to the home page </router-link>
</div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>