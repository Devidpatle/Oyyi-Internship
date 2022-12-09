<template>
  <section id="home" class="bg-[url('/images/herobg.png')] font-inter" style="height: 100vh;">
      <p class="notice">Authentication required for using APIs from 31st December.</p>

    <div class="container pt-28 lg:pt-28 lg:px-6 mx-auto">
      <div class="hero_wrapper_row">
        <div class="lg:w-2/3 w-full px-2">
          <h1 id="main" class="hero_title">APIs <span class="text-gray-800 font-bold">Made Out Of<br/>Perfection!</span></h1>
          <p class="hero_description">Our multiple APIs are made to meet your daily need as developer and implement
            without getting worried about coding it yourself.Apis made for every developer need starting from media
            conversion to Face Detection and sentiment Analysis.</p>
          <div class="btn_bottom_wrapper">
            <a href="#pricing" class="btn_get_started">Get Started</a>
            <a href="#apis" class="btn_explore">Explore</a>
          </div>
        </div>
        <!-- <div data-aos="zoom-in" class="hidden lg:block lg:w-1/2 md:w-5/6 w-5/6">
          <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_vybwn7df.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div> -->
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero_wrapper_row {
  @apply flex flex-col px-1 items-center justify-center lg:flex-row;
}

.notice {
  @apply text-center animate-pulse text-xs md:text-sm font-montserrat bg-gray-700 bg-opacity-30 py-1 font-medium
}

.hero_description {
  @apply text-center mx-4 md:mx-0 mb-8 lg:py-8 text-sm font-inter font-light lg:text-base 2xl:text-lg leading-relaxed  text-gray-900;
}

.hero_title {
  @apply text-center text-4xl lg:text-5xl 2xl:text-6xl font-inter mb-4 font-extrabold text-green-600 lg:text-center;
}

.btn_get_started {
  @apply px-3 py-2 xl:px-6 lg:py-3 bg-green-500 border-2 border-green-500 text-lg text-zinc-900 font-medium rounded-lg hover:bg-emerald-300;
}

.btn_explore {
  @apply px-8 py-2 xl:px-11 lg:py-3 text-lg text-black border-2 border-gray-600 font-medium rounded-lg hover:bg-green-500 hover:text-gray-800 hover:animate-pulse;
}

.btn_bottom_wrapper {
  @apply flex flex-row justify-center pt-8   md:pt-10 gap-10 lg:gap-5 font-inter;
}
</style>
