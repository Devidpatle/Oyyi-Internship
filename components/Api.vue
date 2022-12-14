<template>
  <section id="apis" class="bg-white text-green-400 py-12">
    <div class="container mx-auto">
      <h1 data-aos="fade-up" class="api_title">We Can Meet All Your Needs </h1>
      
      <div id="media-api" class="mx-5 my-10 py-5 px-5 bg-[url('/images/mediabg.png')] rounded-2xl">
        <div class="flex bg-white backdrop-blur-xl py-16 bg-opacity-80 rounded-2xl flex-col lg:flex-row lg:items-center lg:justify-center">
          <!-- <div class="w-full lg:w-2/3">
          <img src="/images/media.png" class="h-55 mx-auto" alt="Image Processing api"/>
          </div> -->
          <div class="flex flex-col">
            <h1 class="media_api_title">Media APIs</h1>
            <p class="media_description">
              Image Conversion through API or on the fly with web request.
              Almost all type of image manipulation like crop, resize, blur,
              sharp and many more can be done with just one request.
            </p>
            <a href="/mediaapis">
              <h1 class="read_btn" style="width: 100px">Explore</h1>
            </a>
          </div>
        </div>
      </div>
      <div id="machine-learning-api" class="mx-5 my-10 py-5 px-5 bg-[url('/images/mlbg.png')] rounded-2xl">
        <div class="flex bg-white backdrop-blur-xl py-16 bg-opacity-80 rounded-2xl flex-col lg:flex-row lg:items-center lg:justify-center">
          <!-- <div class="w-full lg:w-2/3">
          <img src="/images/machinelearning.png" class="h-55 mx-auto" alt="Machine Learning API"/>
          </div> -->
          <div class="flex flex-col">
            <h1 class="media_api_title">Machine Learning APIs</h1>
            <p class="media_description">
              Image Conversion through API or on the fly with web request.
              Almost all type of image manipulation like crop, resize, blur,
              sharp and many more can be done with just one request.
            </p>
            <a href="/machinelearning">
              <h1 class="read_btn" style="width: 100px">Explore</h1>
            </a>
          </div>
        </div>
      </div>
      <div id="general-api" class="mx-5 my-10 py-5 px-5 bg-[url('/images/generalbg.png')] rounded-2xl">
        <div class="flex bg-white backdrop-blur-xl py-16 bg-opacity-80 rounded-2xl flex-col lg:flex-row lg:items-center lg:justify-center">
          <!-- <div class="w-full lg:w-2/3">
          <img src="/images/general.png" class="h-42 mx-auto" alt="General Purpose API"/>
          </div> -->
          <div class="flex flex-col">
            <h1 class="media_api_title">General Purpose APIs</h1>
            <p class="media_description">
              Image Conversion through API or on the fly with web request.
              Almost all type of image manipulation like crop, resize, blur,
              sharp and many more can be done with just one request.
            </p>
            <a href="/generalapis">
              <h1 class="read_btn" style="width: 100px">Explore</h1>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </section>

</template>

<style scoped>

.media_description{
  @apply text-sm text-center font-inter font-light text-gray-800 mt-4 mx-5;
}
.media_api_title{
  @apply text-center text-gray-700 font-montserrat text-3xl lg:text-4xl mx-5 font-semibold;
}
.apis_card_wrapper{
  @apply mt-20 px-5 py-10 xl:px-10 container flex flex-wrap items-center justify-center gap-x-16 gap-y-10 mx-auto;
}
.read_btn {
  @apply mx-auto mt-6 py-2 text-center font-semibold text-sm border-2 border-gray-700 bg-white bg-opacity-40 border-opacity-20 rounded-lg font-poppins text-primary hover:text-emerald-700;
}
.api_title{
  @apply text-center text-gray-700 mx-4 py-5 text-3xl sm:text-4xl lg:text-5xl font-inter font-bold lg:pt-24 lg:pb-24;
}
.api-desc {
  @apply text-sm h-20 font-inter text-gray-400 text-center mx-4;
}
</style>
