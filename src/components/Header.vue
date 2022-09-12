<template>
  <header class="container-fluid site-nav header" id="header">
    <div class="row">
      <div class="container">
        <div class="row align-items-center">
              <div class="col-12 px-0">
                  <Nav></Nav>
                  <DarkMode></DarkMode>
              </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Nav from "./Nav";
import DarkMode from "./DarkMode";
export default {
  name: "Header",
  components: {DarkMode, Nav}
}
</script>

<style scoped>

</style>