<template>
  <section id="home" class="bg-gray-50 first-letter:font-inter">
    <div class="container py-10 lg:py-28 lg:px-6 mx-auto">
      <div class="hero_wrapper_row">
        <div class="lg:w-2/3 w-full px-2">
          <h1 id="main" class="hero_title">Machine Learning<span class="text-gray-700 font-bold"> Tasks Made Easier!</span></h1>
          <div data-aos="zoom-in" class="lg:hidden w-2/3 my-10 mx-auto">
          <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_ddliuw7l.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
          <p class="hero_description">Our multiple APIs are made to meet your daily need as developer and implement
            without getting worried about coding it yourself.Apis made for every developer need starting from media
            conversion to Face Detection and sentiment Analysis.</p>
          <div class="btn_bottom_wrapper">
            <a href="#pricing" class="btn_get_started">Get Started</a>
            <a href="#apis" class="btn_explore">Explore</a>
          </div>
        </div>
        <div data-aos="zoom-in" class="hidden lg:block lg:w-1/2 md:w-5/6 w-5/6">
          <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_ddliuw7l.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
      </div>
    </div>
      <div class="container py-10 mx-auto bg-gray-100">
              <h1 data-aos="fade-up" class="our_api_title">Our APIs</h1>
    <div class="apis_card_wrapper">
        <div class="api">
          <img src="https://img.icons8.com/ios/50/374151/group-objects.png" class="mx-auto mb-2" alt="thumbnail generator"/>
          <h1 class="text-center text-2xl font-bold py-4">Object Detection</h1>
          <p class="api-desc">
            Generate Thumbnail for Video file, PDF File and Image File with
            simple API Request. No Restriction or Charges.
          </p>
          <a href="https://v1-docs.oyyi.xyz/thumbnail.html">
            <h1 class="read_btn">Read Docs</h1>
          </a>
        </div>
        <div class="api">
          <img src="https://img.icons8.com/ios/50/374151/poker-face.png" class="mx-auto mb-2" alt="Optimization"/>
          <h1 class="text-center text-2xl font-bold py-4">Face Sentiment</h1>
          <p class="api-desc">
            Compress image or pdf with lossless image or pdf compression
            algorithm without losing quality
          </p>
          <a href="https://v1-docs.oyyi.xyz/optimizer.html">
            <h1 class="read_btn">Read Docs</h1>
          </a>
        </div>
        <div class="api">
          <img src="https://img.icons8.com/ios/50/374151/align-cell-content-left.png" class="mx-auto mb-2" alt="Qr Code Generator"/>
          <h1 class="text-center text-2xl font-bold py-4">Text Sentiment</h1>
          <p class="api-desc">
            Generate Qr code for your web app / Mobile app or for any purpose
            with a single api request.
          </p>
          <a href="https://v1-docs.oyyi.xyz/qr_generator.html">
            <h1 class="read_btn">Read Docs</h1>
          </a>
        </div>
        <div class="api">
          <img src="https://img.icons8.com/ios/50/374151/general-ocr.png" class="mx-auto mb-2" alt="avatar generator"/>
          <h1 class="text-center text-2xl font-bold py-4">OCR API
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
          <img src="https://img.icons8.com/ios/50/374151/language.png" class="mx-auto mb-2" alt="fake data generator"/>
          <h1 class="text-center text-2xl font-bold py-4">Natural Language Processing</h1>
          <p class="api-desc">
            Generate fake data easily with single web request and populate
            your test database or app testing. Supported almost all types of
            data.
          </p>
          <a href="https://v1-docs.oyyi.xyz/fake/generator.html">
            <h1 class="read_btn">Read Docs</h1>
          </a>
        </div>
      </div>
      </div>

      <div class="container mx-auto bg-white">
      <h1 data-aos="fade-up" class="upcoming_api_title">Our Upcoming APIs</h1>
      <div id="image-classifier-api" class="mx-5 my-7 px-5 shadow bg-gray-200 bg-opacity-60 rounded-2xl">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-center my-3 xl:mx-20">
          <img src="/images/image_classifier.svg" class="w-72 pl-8 mx-auto lg:w-2/5" alt="Image Processing api"/>
          <div class="flex flex-col pb-10">
            <h1 class="image_processing_title">Image Classifier API</h1>
            <p class="processing_description">
              Image Conversion through API or on the fly with web request.
              Almost all type of image manipulation like crop, resize, blur,
              sharp and many more can be done with just one request.
            </p>
          </div>
        </div>
      </div>
      <div id="text-summary-api" class="mx-5 my-7 px-5 shadow bg-gray-200 bg-opacity-60 rounded-2xl">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-center my-3 xl:mx-20">
          <img src="/images/text_summary.svg" class="w-72 pl-8 mx-auto lg:w-2/5" alt="Image Processing api"/>
          <div class="flex flex-col pb-10">
            <h1 class="image_processing_title">Text Summary API</h1>
            <p class="processing_description">
              Image Conversion through API or on the fly with web request.
              Almost all type of image manipulation like crop, resize, blur,
              sharp and many more can be done with just one request.
            </p>
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
  @apply text-center mx-4 md:mx-0 mb-8 lg:mr-20 2xl:mr-60 lg:py-8 text-sm font-inter font-light lg:text-base 2xl:text-lg leading-relaxed lg:text-left text-gray-600;
}

.hero_title {
  @apply text-center text-4xl lg:text-5xl 2xl:text-6xl font-inter mb-4 font-extrabold text-green-500 lg:text-left;
}

.btn_get_started {
  @apply px-3 py-2 xl:px-6 lg:py-3 md:mr-5 bg-green-500 border-2 border-green-500 text-lg text-zinc-900 font-normal rounded-lg hover:bg-green-600 hover:border-green-600;
}

.btn_explore {
  @apply px-8 py-2 xl:px-11 lg:py-3 text-lg text-green-500 border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-gray-800 hover:animate-pulse;
}

.btn_bottom_wrapper {
  @apply flex flex-row justify-center md:pt-10 lg:justify-start gap-10 lg:gap-1 font-inter;
}

.apis_card_wrapper {
  @apply mt-20 px-5 py-10 xl:px-10 container flex flex-wrap items-center justify-center gap-x-16 gap-y-10 mx-auto;
}
.read_btn {
  @apply mx-auto w-32 mt-6 py-2 text-center text-sm border-2 border-gray-700 border-opacity-20 rounded-lg font-poppins text-green-600 hover:text-emerald-700;
}
.api_title {
  @apply text-center text-gray-700 mx-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter font-extrabold lg:pt-24 pb-24;
}
.api-desc {
  @apply text-sm h-20 font-inter text-gray-500 text-center mx-4;
}

.our_api_title {
  @apply text-center font-inter mx-4 pt-10 text-gray-700 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold lg:pt-20 lg:pb-1;
}

.upcoming_api_title {
  @apply text-center py-10 font-inter mx-4 text-gray-700 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold lg:pt-20 lg:pb-20;
}

.processing_description {
  @apply text-sm text-center font-inter font-light text-gray-600 mt-4 mx-5;
}
.image_processing_title {
  @apply text-center text-green-600 text-3xl lg:text-4xl mt-5 mx-5 font-bold;
}
</style>

