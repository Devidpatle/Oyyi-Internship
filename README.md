```html
  <section class="section-hero">
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
            </div>
            <div data-aos="zoom-in" class="hidden lg:block lg:w-1/2 md:w-5/6 w-5/6">
              <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_oM7iJ42y70.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="apis">
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
```