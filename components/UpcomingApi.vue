<template>
  <section id="upcoming" class="bg-slate-700 bg-opacity-20">
    <div class="container mx-auto">
      <h1
          data-aos="fade-up"
          class="text-center mx-4 text-green-500 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold lg:pt-20 lg:pb-20"
      >
        Our Upcoming APIs
      </h1>
      <div
          class="mx-5 shadow-sm bg-slate-700 bg-opacity-10 py-1 rounded-2xl mt-24"
      >
        <div
            class="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-center xl:mx-60 my-20 rounded-md"
        >
          <img
              src="images/video.svg"
              class="hidden lg:block w-40 md:ml-20 md:w-72"
              alt=""
              srcset=""
          />

          <div class="flex flex-col">
            <img
                src="images/video.svg"
                class="w-40 mx-auto lg:hidden"
                alt=""
                srcset=""
            />

            <h1
                class="text-3xl text-center lg:text-4xl mx-5 font-bold text-green-400"
            >
              Video Processing API
            </h1>
            <p
                class="text-center text-sm font-inter font-light text-gray-400 mt-4 mx-5"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              molestiae. Cupiditate id similique dolores reiciendis. Ad
              maiores nesciunt corporis minima.
            </p>
            <div
                class="flex flex-wrap justify-center mx-4 lg:flex-row gap-3 pt-10 text-green-300"
            >
              <h1 class="video-api-feature">720 P</h1>
              <h1 class="video-api-feature">360 P</h1>
              <h1 class="video-api-feature">Audio</h1>
              <h1 class="video-api-feature">HLS</h1>
              <h1 class="video-api-feature">720 P</h1>
              <h1 class="video-api-feature">720 P</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-5">
        <div
            class="flex flex-col lg:flex-row lg:gap-4 font-montserrat text-green-400 font-bold my-20"
        >
          <div class="api-coming">
            <img
                src="https://img.icons8.com/ios/50/FFFFFF/mind-map.png"
                class="w-7 mx-auto"
            />
            <h3 class="text-lg self-center">Machine Learning API</h3>
          </div>
          <div class="api-coming">
            <img
                src="https://img.icons8.com/ios/50/FFFFFF/internet.png"
                class="w-7 mx-auto"
            />
            <h3 class="text-lg self-center">Website Hosting API</h3>
          </div>
          <div class="api-coming">
            <img
                src="https://img.icons8.com/ios/50/FFFFFF/network-drive.png"
                class="w-7 mx-auto"
            />
            <h3 class="text-lg self-center">Cloud Storage API</h3>
          </div>
          <div class="api-coming">
            <img
                src="https://img.icons8.com/ios/50/FFFFFF/database.png"
                class="w-7 mx-auto"
            />
            <h3 class="text-lg self-center">Database API</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
