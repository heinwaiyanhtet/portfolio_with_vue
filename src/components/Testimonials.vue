<template>
  <section id="testimonials" class="testimonials">
    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3F4F5" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,112C384,75,480,53,576,74.7C672,96,768,160,864,170.7C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <div class="row testimonials-role">

      <div class="container">
        <div class="col-lg-12 text-center">
          <h2 class="text-center fw-bolder text-danger wow rotateIn">Testimonials</h2>
          <div class="line mx-auto mb-3 mt-3"></div>
          <h4 class="text-danger mb-5">What my clients are saying</h4>
        </div>

        <div class="testimonials-role__card single-item">

          <div class="col-lg-12">
            <div class="card shadow bg-white mb-3 w-100 wow ">
              <div class="card-body text-center">
                <p class="lh-lg text-black">
                  <i class="fas fa-quote-left"></i>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro illo tempora hic nulla nemo iste. Porro assumenda enim earum vero qui!
                  <i class="fas fa-quote-right"></i>
                <div class="ratings p-1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                </p>
              </div>
            </div>


            <div class="d-flex flex-column align-items-center testimonials__imageAndNamecontainer">
              <div class="testimonials__picture">
                <img src="images/client/client-1.jpg" class="img-fluid rounded-circle" alt="">
              </div>

              <div class="testimonials__name text-center">
                <h3>Patrick Muriunigi</h3>
                <p class="fw-light">CEO & founder</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3F4F5" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,112C384,75,480,53,576,74.7C672,96,768,160,864,170.7C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> -->
  </section>
</template>

<script>
export default {
  name: "Testimonials"
}
</script>

<style scoped>

</style>