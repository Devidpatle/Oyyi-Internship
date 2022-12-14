<template>
  <section id="home" class="bg-[url('/images/herobg.png')] font-inter">
    <div id="notice" class="flex justify-center gap-5 bg-red-500">
      <p class="notice">
        Authentication required for using APIs from 31st December.
      </p>
      <button onclick="hideClose()" class="close_button">Close</button>
    </div>
    <div class="bg-white backdrop-blur-3xl bg-opacity-50">
      <div class="container py-28 lg:px-6 mx-auto">
        <div class="hero_wrapper_row">
          <div class="lg:w-2/3 w-full px-2">
            <h1 id="main" class="hero_title">
              APIs
              <span class="text-gray-800 font-bold"
                >Made Out Of<br />Perfection!</span
              >
            </h1>
            <p class="hero_description">
              Our multiple APIs are made to meet your daily need as developer
              and implement without getting worried about coding it
              yourself.Apis made for every developer need starting from media
              conversion to Face Detection and sentiment Analysis.
            </p>
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
    </div>
  </section>
</template>
<style scoped>
.hero_wrapper_row {
  @apply flex flex-col px-1 items-center justify-center lg:flex-row;
}

.notice {
  @apply text-center text-white text-xs md:text-sm font-inter bg-red-500 py-1 font-normal;
}

.hero_description {
  @apply text-center mx-4 md:mx-0 mb-8 lg:py-8 text-sm font-inter font-light lg:text-base 2xl:text-lg leading-relaxed  text-gray-900;
}

.hero_title {
  @apply text-center text-4xl lg:text-5xl 2xl:text-6xl font-inter mb-4 font-extrabold text-primary lg:text-center;
}

.btn_get_started {
  @apply px-3 py-2 xl:px-6 lg:py-3 bg-primary border-2 border-primary text-lg text-zinc-900 font-medium rounded-lg hover:bg-teal-500 hover:border-teal-500;
}

.btn_explore {
  @apply px-8 py-2 xl:px-11 lg:py-3 text-lg text-black border-2 border-gray-600 font-medium rounded-lg hover:bg-primary hover:border-primary hover:text-gray-800;
}

.btn_bottom_wrapper {
  @apply flex flex-row justify-center pt-8   md:pt-10 gap-10 lg:gap-5 font-inter;
}

.close_button {
  @apply font-semibold text-xs text-white font-montserrat border px-1 my-1 rounded-sm;
}
</style>

<script>
function hideClose() {
  const notice = document.getElementById("notice");
  notice.style.display = "none";
}
</script>
