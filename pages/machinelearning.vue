<template>
  <section id="home" class="bg-white font-inter">
    <div class="bg-[url('/images/mlbg.png')]">
      <div class="bg-white backdrop-blur-md bg-opacity-75">
        <div class="container py-10 lg:py-28 lg:px-6 mx-auto">
          <div class="hero_wrapper_row">
            <div class="lg:w-2/3 w-full px-2">
              <h1 id="main" class="hero_title">
                Machine Learning<span class="text-gray-700 font-bold">
                  Tasks Made Easier!</span
                >
              </h1>
              <div data-aos="zoom-in" class="lg:hidden w-2/3 my-10 mx-auto">
                <lottie-player
                  src="https://assets5.lottiefiles.com/private_files/lf30_ddliuw7l.json"
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
              data-aos="zoom-in"
              class="hidden lg:block lg:w-1/2 md:w-5/6 w-5/6"
            >
              <lottie-player
                src="https://assets5.lottiefiles.com/private_files/lf30_ddliuw7l.json"
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
              src="https://img.icons8.com/ios/50/374151/group-objects.png"
              class="mx-auto mb-2"
            />
            <h1 class="text-center text-2xl font-bold py-4">
              Object Detection
            </h1>
            <p class="api-desc">
              Object Detection is part of Machine Learning , in which we use different algorithm to detect object in Image, Or Video files. Our algorithm can detect around 10K+ different objects.
            </p>
            <a href="https://docs.oyyi.xyz/mlapi/object-detection-api.html">
              <h1 class="read_btn">Read Docs</h1>
            </a>
          </div>
          <div class="api">
            <img
              src="https://img.icons8.com/ios/50/374151/poker-face.png"
              class="mx-auto mb-2"
            />
            <h1 class="text-center text-2xl font-bold py-4">Face Sentiment</h1>
            <p class="api-desc">
              Face Sentiment api allow you to detect sentiment of person within the image. Along with sentiment other characteristics like Age , Face Cordinate , Gender , Emotion , Race
            </p>
            <a href="https://docs.oyyi.xyz/mlapi/facial-sentiment-api.html">
              <h1 class="read_btn">Read Docs</h1>
            </a>
          </div>
          <div class="api">
            <img
              src="https://img.icons8.com/ios/50/374151/align-cell-content-left.png"
              class="mx-auto mb-2"
            />
            <h1 class="text-center text-2xl font-bold py-4">Text Sentiment</h1>
            <p class="api-desc">
              Text Sentiment allow you to predict the sentiment of text either data is POSITIVE , NEGATIVE , NEUTRAL. You can use this result to predict user reviews and many other task on you server side.
            </p>
            <a href="https://docs.oyyi.xyz/mlapi/text-sentiment-api.html">
              <h1 class="read_btn">Read Docs</h1>
            </a>
          </div>
          <div class="api">
            <img
              src="https://img.icons8.com/ios/50/374151/general-ocr.png"
              class="mx-auto mb-2"
            />
            <h1 class="text-center text-2xl font-bold py-4">OCR API</h1>
            <p class="api-desc">
              Text Recognition api allow you to extract text from image , video or any visual documents. Our Api are trained to detect more than 100 different languages and many scripts.
            </p>
            <a href="https://docs.oyyi.xyz/mlapi/text-recognition-api.html">
              <h1 class="read_btn">Read Docs</h1>
            </a>
          </div>
          <div class="api">
            <img
              src="https://img.icons8.com/ios/50/374151/language.png"
              class="mx-auto mb-2"
            />
            <h1 class="text-center text-2xl font-bold py-4">
              Natural Language Processing
            </h1>
            <p class="api-desc">
              Language Processing api is also Natural Langugage Processing Api allow you to extract meaningful part of human language by the means of NLP algorithm.
            </p>
            <a href="https://docs.oyyi.xyz/mlapi/language-processing-api.html">
              <h1 class="read_btn">Read Docs</h1>
            </a>
          </div>
        </div>
      </div>
    </div>

<div class="bg-[url('/images/upcomingbg.png')]">
    <div class="bg-white backdrop-blur-sm bg-opacity-50">
    <div id="upcoming" class="container py-10 mx-auto">
      <h1 data-aos="fade-up" class="upcoming_api_title">Our Upcoming APIs</h1>

      <div class="flex flex-col md:flex-row gap-5 px-10">
        <div class="bg-white rounded-3xl flex flex-col justify-center py-8">
          <img
            src="/images/image_classifier.gif"
            class="w-10 mx-auto"
            alt="Image Classifier API"
          />
          <h4 class="text-center text-2xl font-semibold py-4" >Image Classifier API</h4>
          <p class="api-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum, quaerat dolor ullam, repudiandae id est dicta ipsa neque possimus corrupti ducimus animi eius nulla dolores omnis suscipit consectetur unde. </p>
        </div>
        <div class="bg-white rounded-3xl flex flex-col justify-center py-8">
          <img
            src="/images/text_summary.gif"
            class="w-10 mx-auto"
            alt="Image Classifier API"
          />
          <h4 class="text-center text-2xl font-semibold py-4" >Image Classifier API</h4>
          <p class="api-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum, quaerat dolor ullam, repudiandae id est dicta ipsa neque possimus corrupti ducimus animi eius nulla dolores omnis suscipit consectetur unde. </p>
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
  @apply mt-20 px-5 py-10 xl:px-10 container flex flex-wrap items-center justify-center gap-x-16 gap-y-10 mx-auto;
}
.read_btn {
  @apply mx-auto w-32 mt-6 py-2 text-center text-sm border-2 border-gray-700 border-opacity-20 rounded-lg font-poppins text-primary hover:text-emerald-700;
}
.api_title {
  @apply text-center text-gray-700 mx-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter font-extrabold lg:pt-24 pb-24;
}
.api-desc {
  @apply text-sm font-inter text-gray-600 text-center mx-4;
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
