<template>
  <section id="home" class="bg-white font-inter">
    <div class="bg-[url('/images/generalbg.png')]">
      <div class="bg-white backdrop-blur-md bg-opacity-75">
        <div class="container py-10 lg:py-28 lg:px-6 mx-auto">
          <div class="hero_wrapper_row">
            <div class="lg:w-2/3 w-full px-2">
              <h1 id="main" class="hero_title">
              <span class="text-gray-700 font-bold">
                  APIs For Your </span
                >Day-to-Day Tasks
              </h1>
              <div data-aos="zoom-in" class="lg:hidden w-2/3 my-10 mx-auto">
                <lottie-player
                  src="https://assets10.lottiefiles.com/private_files/lf30_5bsxhzst.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
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
            <div
              class="hidden lg:block w-2/5"
            >
              <lottie-player
                src="https://assets10.lottiefiles.com/private_files/lf30_5bsxhzst.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50">
      <div class="container py-10 mx-auto">
        <h1 data-aos="fade-up" class="our_api_title">Our APIs</h1>
        <div class="apis_card_wrapper">
          <div class="api">
            <img
              src="https://img.icons8.com/ios/50/374151/cat-profile.png"
              class="mx-auto mb-2"
              alt="thumbnail generator"
            />
            <h1 class="text-center text-2xl font-bold py-4">
              Avatar Generator
            </h1>
            <p class="api-desc">
              Avatar generator api allow you to easily get random avatar for you user profile pic.
            </p>
            <a href="https://v1-docs.oyyi.xyz/thumbnail.html">
              <h1 class="read_btn">Read Docs</h1>
            </a>
          </div>
          <div class="api">
            <img
              src="https://img.icons8.com/ios/50/374151/database-export.png"
              class="mx-auto mb-2"
              alt="Optimization"
            />
            <h1 class="text-center text-2xl font-bold py-4">Fake Data Generator</h1>
            <p class="api-desc">
              Fake Date generator api allow you easily get fake data for your development needs with simple api request.
            </p>
            <a href="https://v1-docs.oyyi.xyz/optimizer.html">
              <h1 class="read_btn">Read Docs</h1>
            </a>
          </div>
          <div class="api">
            <img
              src="https://img.icons8.com/ios/50/374151/qr-code--v1.png"
              class="mx-auto mb-2"
              alt="Qr Code Generator"
            />
            <h1 class="text-center text-2xl font-bold py-4">QR Code Generator</h1>
            <p class="api-desc">
              Generate Qr code for your web app / Mobile app or for any purpose
              with a single api request.
            </p>
            <a href="https://v1-docs.oyyi.xyz/qr_generator.html">
              <h1 class="read_btn">Read Docs</h1>
            </a>
          </div>
          
        </div>
      </div>
    </div>

  </section>
</template>
<style scoped>
.hero_wrapper_row {
  @apply flex flex-col px-1 items-center justify-center lg:flex-row;
}

.hero_description {
  @apply text-center mx-4 md:mx-0 mb-8 lg:mr-20 2xl:mr-60 lg:py-8 text-sm font-inter font-light lg:text-base 2xl:text-lg leading-relaxed lg:text-left text-gray-900;
}

.hero_title {
  @apply text-center text-4xl lg:text-5xl 2xl:text-6xl font-inter mb-4 font-extrabold text-primary lg:text-left;
}

.btn_get_started {
  @apply px-3 py-2 xl:px-6 lg:py-3 md:mr-5 bg-primary border-2 border-primary text-lg text-zinc-900 font-normal rounded-lg hover:bg-primary hover:border-primary;
}

.btn_explore {
  @apply px-8 py-2 xl:px-11 lg:py-3 text-lg text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-gray-800 hover:animate-pulse;
}

.btn_bottom_wrapper {
  @apply flex flex-row justify-center md:pt-10 lg:justify-start gap-10 lg:gap-1 font-inter;
}

.apis_card_wrapper {
  @apply mt-10 md:mt-20 px-5 py-10 xl:px-10 container flex flex-wrap items-center justify-center gap-x-16 gap-y-10 mx-auto;
}
.read_btn {
  @apply mx-auto w-32 mt-6 py-2 text-center text-sm border-2 border-gray-700 border-opacity-20 rounded-lg font-poppins text-primary hover:text-emerald-700;
}
.api_title {
  @apply text-center text-gray-700 mx-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter font-extrabold lg:pt-24 pb-24;
}
.api-desc {
  @apply text-sm h-20 font-inter text-gray-600 text-center mx-4;
}

.our_api_title {
  @apply text-center font-inter mx-4 pt-10 text-gray-700 text-3xl sm:text-4xl lg:text-5xl font-extrabold lg:pt-20 lg:pb-1;
}

.upcoming_api_title {
  @apply text-center py-10 font-inter mx-4 text-gray-700 text-3xl sm:text-4xl lg:text-5xl font-extrabold lg:pt-20 lg:pb-20;
}

.processing_description {
  @apply text-sm text-center font-inter font-light text-gray-600 mt-4 mx-5;
}
.image_processing_title {
  @apply text-center text-primary text-3xl lg:text-4xl mt-5 mx-5 font-bold;
}
</style>
