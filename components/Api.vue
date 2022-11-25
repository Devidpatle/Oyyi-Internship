<template>
  <section id="apis" class="bg-gray-100 text-green-400">
    <div class="container mx-auto">
      <h1 data-aos="fade-up" class="api_title">We Can Meet All Your Needs </h1>
      <div id="media-api" class="mx-5 my-7 py-10 px-10 shadow bg-white rounded-2xl">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-center my-3 xl:mx-20">
          <img src="/images/media.png" class="w-72 mx-auto lg:w-2/5" alt="Image Processing api"/>
          <div class="flex flex-col">
            <h1 class="media_api_title">Media APIs</h1>
            <p class="media_description">
              Image Conversion through API or on the fly with web request.
              Almost all type of image manipulation like crop, resize, blur,
              sharp and many more can be done with just one request.
            </p>
            <a href="https://v1-docs.oyyi.xyz/image/conversion.html">
              <h1 class="read_btn" style="width: 100px">Explore</h1>
            </a>
          </div>
        </div>
      </div>
      <div id="machine-learning-api" class="mx-5 my-7 py-10 px-10 shadow bg-white rounded-2xl">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-center my-3 xl:mx-20">
          <img src="/images/machinelearning.png" class="w-72 mx-auto lg:w-2/5" alt="Image Processing api"/>
          <div class="flex flex-col">
            <h1 class="media_api_title">Machine Learning APIs</h1>
            <p class="media_description">
              Image Conversion through API or on the fly with web request.
              Almost all type of image manipulation like crop, resize, blur,
              sharp and many more can be done with just one request.
            </p>
            <a href="https://v1-docs.oyyi.xyz/image/conversion.html">
              <h1 class="read_btn" style="width: 100px">Explore</h1>
            </a>
          </div>
        </div>
      </div>
      <div id="general-api" class="mx-5 my-7 py-10 px-10 shadow bg-white rounded-2xl">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-center my-3 xl:mx-20">
          <img src="/images/general.png" class="w-72 mx-auto lg:w-2/5" alt="Image Processing api"/>
          <div class="flex flex-col">
            <h1 class="media_api_title">General Purpose APIs</h1>
            <p class="media_description">
              Image Conversion through API or on the fly with web request.
              Almost all type of image manipulation like crop, resize, blur,
              sharp and many more can be done with just one request.
            </p>
            <a href="https://v1-docs.oyyi.xyz/image/conversion.html">
              <h1 class="read_btn" style="width: 100px">Explore</h1>
            </a>
          </div>
        </div>
      </div>
      

      <!-- <div class="apis_card_wrapper">
        <div class="api">
          <img src="https://img.icons8.com/ios/42/FFFFFF/laptop-play-video--v1.png" class="mx-auto mb-2" alt="thumbnail generator"/>
          <h1 class="text-center text-2xl font-bold py-4">Thumbnail Generator</h1>
          <p class="api-desc">
            Generate Thumbnail for Video file, PDF File and Image File with
            simple API Request. No Restriction or Charges.
          </p>
          <a href="https://v1-docs.oyyi.xyz/thumbnail.html">
            <h1 class="read_btn">Read Docs</h1>
          </a>
        </div>
        <div class="api">
          <img src="https://img.icons8.com/ios/42/FFFFFF/merge-horizontal.png" class="mx-auto mb-2" alt="Optimization"/>
          <h1 class="text-center text-2xl font-bold py-4">Optimizer</h1>
          <p class="api-desc">
            Compress image or pdf with lossless image or pdf compression
            algorithm without losing quality
          </p>
          <a href="https://v1-docs.oyyi.xyz/optimizer.html">
            <h1 class="read_btn">Read Docs</h1>
          </a>
        </div>
        <div class="api">
          <img src="https://img.icons8.com/ios/42/FFFFFF/qr-code.png" class="mx-auto mb-2" alt="Qr Code Generator"/>
          <h1 class="text-center text-2xl font-bold py-4">QR Code Generator</h1>
          <p class="api-desc">
            Generate Qr code for your web app / Mobile app or for any purpose
            with a single api request.
          </p>
          <a href="https://v1-docs.oyyi.xyz/qr_generator.html">
            <h1 class="read_btn">Read Docs</h1>
          </a>
        </div>
        <div class="api">
          <img src="https://img.icons8.com/ios/42/FFFFFF/user-male-circle.png" class="mx-auto mb-2" alt="avatar generator"/>
          <h1 class="text-center text-2xl font-bold py-4">Avatar Generator
          </h1>
          <p class="api-desc">
            Get avatar for your user for web app or mobile app , based on
            username or completely random avatar without any external library
          </p>
          <a href="https://v1-docs.oyyi.xyz/avatar.html">
            <h1 class="read_btn">Read Docs</h1>
          </a>
        </div>
        <div class="api">
          <img src="https://img.icons8.com/ios/42/FFFFFF/database-export.png" class="mx-auto mb-2" alt="fake data generator"/>
          <h1 class="text-center text-2xl font-bold py-4">Fake Data Generator</h1>
          <p class="api-desc">
            Generate fake data easily with single web request and populate
            your test database or app testing. Supported almost all types of
            data.
          </p>
          <a href="https://v1-docs.oyyi.xyz/fake/generator.html">
            <h1 class="read_btn">Read Docs</h1>
          </a>
        </div>
      </div> -->
    </div>
  </section>

</template>

<style scoped>

.media_description{
  @apply text-sm text-center font-inter font-light text-gray-600 mt-4 mx-5;
}
.media_api_title{
  @apply text-center text-green-600 text-3xl lg:text-4xl mt-5 mx-5 font-bold;
}
.apis_card_wrapper{
  @apply mt-20 px-5 py-10 xl:px-10 container flex flex-wrap items-center justify-center gap-x-16 gap-y-10 mx-auto;
}
.read_btn {
  @apply mx-auto mt-6 py-2 text-center text-sm border-2 border-gray-700 border-opacity-20 rounded-lg font-poppins text-green-600 hover:text-emerald-700;
}
.api_title{
  @apply text-center text-gray-700 mx-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter font-extrabold lg:pt-24 pb-24;
}
.api-desc {
  @apply text-sm h-20 font-inter text-gray-400 text-center mx-4;
}
</style>
