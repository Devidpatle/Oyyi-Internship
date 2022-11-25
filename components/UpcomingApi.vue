<template>
  <section id="upcoming" class="bg-gray-100">
    <div class="container mx-auto">
      <h1 data-aos="fade-up" class="upcoming_api_title">Our Upcoming APIs</h1>
      <div class="mx-5 shadow-sm bg-gray-50 py-1 rounded-2xl mt-24">
        <div class="upcoming_api_wrapper">
          <img src="/images/video.svg" class="hidden lg:block w-40 md:ml-20 md:w-72" alt="video processing"/>
          <div class="flex flex-col">
            <img src="/images/video.svg" class="w-40 mx-auto lg:hidden" alt="video processing"/>
            <h1 class="text-3xl text-center lg:text-4xl mx-5 font-bold text-green-400">Video Processing API</h1>
            <p class="video_processing_description">
              Video processing api allow you to easily encode/ decode videos in many different format like MP4, 3GP ,
              MKV, FLV, Webm and HLS. Our services are capable of transcoding video faster at cheaper rate.
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
      <div class="mx-5">
        <div class="flex flex-col lg:flex-row lg:gap-4 font-montserrat text-green-400 font-bold my-20">
          <div class="api-coming">
            <img src="https://img.icons8.com/ios/50/FFFFFF/mind-map.png" class="w-7 mx-auto" alt="Machine learning Api"/>
            <h3 class="text-lg self-center">Machine Learning API</h3>
          </div>
          <div class="api-coming">
            <img src="https://img.icons8.com/ios/50/FFFFFF/internet.png" class="w-7 mx-auto" alt="website hosting api"/>
            <h3 class="text-lg self-center">Website Hosting API</h3>
          </div>
          <div class="api-coming">
            <img src="https://img.icons8.com/ios/50/FFFFFF/network-drive.png" class="w-7 mx-auto" alt="Storage Api"/>
            <h3 class="text-lg self-center">Cloud Storage API</h3>
          </div>
          <div class="api-coming">
            <img src="https://img.icons8.com/ios/50/FFFFFF/database.png" class="w-7 mx-auto" alt="Database API"/>
            <h3 class="text-lg self-center">Database API</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.video_feature_wrapper {
  @apply flex flex-wrap justify-center mx-4 lg:flex-row gap-3 pt-10 text-green-300;
}

.video_processing_description {
  @apply text-center text-sm font-inter font-light text-gray-400 mt-4 mx-5;
}

.upcoming_api_title {
  @apply text-center mx-4 text-gray-700 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold lg:pt-20 lg:pb-20;
}

.video-api-feature {
  @apply font-inter text-sm font-semibold lg:w-20 text-center py-2 px-3 bg-emerald-700 bg-opacity-5 rounded-lg;
}

.upcoming_api_wrapper {
  @apply flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-center xl:mx-60 my-20 rounded-md;
}
</style>
