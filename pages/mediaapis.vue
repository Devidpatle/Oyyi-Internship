<template>
  <mediahero />

  <section id="apis" class="font-inter">
    <div class="bg-gray-50 pb-12">
      <h1 data-aos="fade-up" class="our_api_title">Our APIs</h1>

      <div id="apis" class="container lg:pt-28 lg:px-6 mx-auto">
        <div
          id="image-processing-api"
          class="mx-5 shadow-md bg-gray-100 bg-opacity-50 rounded-2xl"
        >
          <div
            class="flex flex-col lg:flex-row lg:items-center lg:justify-center my-3 xl:mx-20"
          >
            <img
              src="/images/image.svg"
              class="w-72 pl-8 mx-auto lg:w-2/5"
              alt="Image Processing api"
            />
            <div class="flex flex-col">
              <h1 class="image_processing_title">Image Processing API</h1>
              <p class="processing_description">
                Image Conversion through API or on the fly with web request.
                Almost all type of image manipulation like crop, resize, blur,
                sharp and many more can be done with just one request.
              </p>
              <a href="https://docs.oyyi.xyz/media/image-conversion-api.html">
                <h1 class="read_btn mr-auto" style="width: 100px">Read Docs</h1>
              </a>
            </div>
          </div>

          <div class="try_it_now_box">
            <h1 class="text-sm lg:text-base mb-4 font-inter font-semibold">
              Try it now!
            </h1>
            <span
              >curl <span class="text-primary">--</span>form
              <span class="text-primary"
                >"file=@my_image.jpg&sharp=10&resize=400,200,1"</span
              >
              https:<span class="text-gray-400"
                >//api.oyyi.xyz/v1/image/convert</span
              >
            </span>
          </div>
        </div>
      </div>

      <div class="apis_card_wrapper">
        <div class="api">
          <img
            src="https://img.icons8.com/ios/42/374151/laptop-play-video--v1.png"
            class="mx-auto mb-2"
            alt="thumbnail generator"
          />
          <h1 class="text-center text-primary text-2xl font-bold py-4">
            Thumbnail Generator
          </h1>
          <p class="api-desc">
            Generate Thumbnail for Video file, PDF File and Image File with
            simple API Request. No Restriction or Charges.
          </p>
          <a href="https://docs.oyyi.xyz/media/thumbnail-generator-api.html">
            <h1 class="read_btn">Read Docs</h1>
          </a>
        </div>
        <div class="api">
          <img
            src="https://img.icons8.com/ios/42/374151/merge-horizontal.png"
            class="mx-auto mb-2"
            alt="Optimization"
          />
          <h1 class="text-center text-primary text-2xl font-bold py-4">
            Optimizer
          </h1>
          <p class="api-desc">
            Compress image or pdf with lossless image or pdf compression
            algorithm without losing quality
          </p>
          <a href="https://docs.oyyi.xyz/media/file-optimizer-api.html">
            <h1 class="read_btn">Read Docs</h1>
          </a>
        </div>
      </div>
    </div>

    <div class="bg-[url('/images/upcomingbg.png')]">
      <div class="bg-white backdrop-blur-sm bg-opacity-50">
        <div class="container py-10 mx-auto">
          <h1 data-aos="fade-up" class="upcoming_api_title">
            Our Upcoming APIs
          </h1>

          <div
            class="mx-5 bg-gray-100 backdrop-blur-3xl bg-opacity-80 py-1 rounded-2xl mt-12"
          >
            <div class="upcoming_api_wrapper">
              <img
                src="/images/video.svg"
                class="hidden lg:block w-40 md:ml-5 md:w-72 xl:ml-0"
                alt="video processing"
              />
              <div class="flex flex-col">
                <img
                  src="/images/video.svg"
                  class="w-40 mx-auto lg:hidden"
                  alt="video processing"
                />
                <h1
                  class="text-3xl text-center lg:text-4xl mx-5 font-bold text-primary"
                >
                  Video Processing API
                </h1>
                <p class="video_processing_description">
                  Video processing api allow you to easily encode/ decode videos
                  in many different format like MP4, 3GP , MKV, FLV, Webm and
                  HLS. Our services are capable of transcoding video faster at
                  cheaper rate.
                </p>
                <div class="video_feature_wrapper">
                  <h1 class="video-api-feature">1080P</h1>
                  <h1 class="video-api-feature">720P</h1>
                  <h1 class="video-api-feature">480P</h1>
                  <h1 class="video-api-feature">Audio</h1>
                  <h1 class="video-api-feature">HLS</h1>
                  <h1 class="video-api-feature">DASH</h1>
                  <h1 class="video-api-feature">Watermark</h1>
                </div>
              </div>
            </div>
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
  @apply text-center text-4xl lg:text-5xl 2xl:text-6xl font-inter mb-4 font-extrabold text-primary lg:text-left;
}

.btn_get_started {
  @apply px-3 py-2 xl:px-6 lg:py-3 md:mr-5 bg-primary border-2 border-primary text-lg text-zinc-900 font-normal rounded-lg hover:bg-emerald-300;
}

.btn_explore {
  @apply px-8 py-2 xl:px-11 lg:py-3 text-lg text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-gray-800 hover:animate-pulse;
}

.btn_bottom_wrapper {
  @apply flex flex-row justify-center md:pt-10 lg:justify-start gap-10 lg:gap-1 font-inter;
}

.try_it_now_box {
  @apply bg-zinc-900 text-white text-center text-xs w-auto py-6 rounded-b-xl font-mono;
}
.processing_description {
  @apply text-sm text-center font-inter text-gray-700 mt-4 mx-5;
}
.image_processing_title {
  @apply text-center text-primary text-3xl lg:text-4xl mt-5 mx-5 font-bold;
}

.media_description {
  @apply text-sm text-center font-inter text-gray-600 mt-4 mx-5;
}
.media_api_title {
  @apply text-center text-primary text-3xl lg:text-4xl mt-5 mx-5 font-bold;
}
.apis_card_wrapper {
  @apply mt-20 px-5 py-10 xl:px-10 container flex flex-wrap items-center justify-center gap-x-16 gap-y-10 mx-auto;
}

.api {
  @apply bg-gray-100 bg-opacity-50 pt-7 rounded-3xl shadow-sm w-full h-80 sm:w-80 xl:h-80;
}

.api-desc {
  @apply text-sm h-20 font-inter text-gray-700 text-center mx-4;
}

.read_btn {
  @apply mx-auto w-40 mt-6 py-2 text-center text-sm border-2 border-gray-700 border-opacity-20 rounded-lg font-poppins text-primary hover:text-emerald-700;
}

.video_feature_wrapper {
  @apply flex flex-wrap justify-center mx-4 lg:flex-row gap-3 pt-10 text-primary;
}

.video_processing_description {
  @apply text-center text-sm font-inter font-light text-gray-800 mt-4 mx-5;
}

.our_api_title {
  @apply text-center mx-4 py-10 text-gray-700 text-3xl sm:text-4xl lg:text-5xl font-extrabold lg:pt-20 lg:pb-2;
}

.upcoming_api_title {
  @apply text-center mx-4 py-10 text-gray-700 text-3xl sm:text-4xl lg:text-5xl font-extrabold lg:pt-20 lg:pb-20;
}

.video-api-feature {
  @apply font-inter text-sm font-semibold lg:w-24 text-center py-2 px-3 bg-emerald-700 bg-opacity-5 rounded-lg;
}

.upcoming_api_wrapper {
  @apply flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-center xl:mx-60 my-20 rounded-md;
}
</style>
