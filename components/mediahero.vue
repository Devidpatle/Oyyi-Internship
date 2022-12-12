<template>
  <section id="home" class="bg-[url('/images/mediabg.png')] font-inter">
  <div class="bg-white backdrop-blur-md bg-opacity-75">
    <div class="container py-10 lg:py-28 lg:px-6 mx-auto">
      <div class="hero_wrapper_row">
        <div class="lg:w-2/3 w-full px-2">
          <h1 id="main" class="hero_title"><span class="text-gray-800 font-bold">APIs For All Your</span><br/>Media Files!</h1>
          <div data-aos="zoom-in" class="lg:hidden w-96 mx-auto">
          <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_oM7iJ42y70.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
          <p class="hero_description">Our multiple APIs are made to meet your daily need as developer and implement
            without getting worried about coding it yourself.Apis made for every developer need starting from media
            conversion to Face Detection and sentiment Analysis.</p>
          <div class="btn_bottom_wrapper">
            <a href="/#pricing" class="btn_get_started">Get Started</a>
            <a href="#apis" class="btn_explore">Explore</a>
          </div>
        </div>
        <div data-aos="zoom-in" class="hidden lg:block lg:w-1/2 md:w-5/6 w-5/6">
          <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_oM7iJ42y70.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>
<style scoped>
.hero_wrapper_row {
  @apply flex flex-col px-1 lg:flex-row;
}

.hero_description {
  @apply text-center mx-4 md:mx-0 mb-8 lg:py-8 text-sm font-inter font-light lg:text-base lg:text-left 2xl:text-lg text-gray-900;
}

.hero_title {
  @apply text-center text-4xl lg:text-5xl 2xl:text-6xl font-inter mb-4 font-extrabold text-primary lg:text-left;
}

.btn_get_started {
  @apply px-3 py-2 xl:px-6 lg:py-3 bg-primary border-2 border-primary text-lg text-zinc-900 font-normal rounded-lg hover:bg-primary;
}

.btn_explore {
  @apply px-8 py-2 xl:px-11 lg:py-3 text-lg text-black border-2 border-gray-600 rounded-lg hover:bg-primary hover:text-gray-800;
}

.btn_bottom_wrapper {
  @apply flex flex-row justify-center lg:justify-start mx-auto md:pt-10 gap-10 lg:gap-5 font-inter;
}
</style>
