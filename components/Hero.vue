<template>
  <section id="home" class="bg-slate-700 bg-opacity-20 font-inter">
    <div class="container lg:pt-28 lg:px-6 mx-auto">
      <div class="flex flex-col px-1 items-center justify-center lg:flex-row">
        <div class="lg:w-2/3 w-full px-2">
          <h1
              id="main"
              class="text-center text-4xl lg:text-5xl 2xl:text-6xl font-inter mb-4 font-extrabold text-green-500 lg:text-left"
          >
            APIs
            <span class="text-gray-200 font-bold"
            >Made Out Of<br />Perfection!</span
            >
          </h1>
          <img
              data-aos="zoom-in"
              class="mx-auto py-16 lg:hidden md:w-3/5 w-5/6"
              alt="hero"
              src="images/hero.png"
          />
          <p
              class="text-center mx-4 md:mx-0 mb-8 lg:mr-20 2xl:mr-60 lg:py-8 text-sm font-inter font-light lg:text-base 2xl:text-lg leading-relaxed lg:text-left text-gray-400"
          >
            Image Conversion through API or on the fly with web request, Image
            Optimizer, URL Shortner , Fake Data , Thumbnail Generation for
            testing and many more.
          </p>
          <div
              class="flex flex-row justify-center md:pt-10 lg:justify-start gap-10 lg:gap-1 font-inter"
          >
            <a
                href="#pricing"
                class="px-3 py-2 xl:px-6 lg:py-3 md:mr-5 bg-green-500 border-2 border-green-500 text-lg text-zinc-900 font-normal rounded-lg hover:bg-emerald-300"
            >Get Started</a
            >
            <a
                href="#apis"
                class="px-8 py-2 xl:px-11 lg:py-3 text-lg text-green-500 border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-gray-800 hover:animate-pulse"
            >Explore</a
            >
          </div>
        </div>
        <img
            data-aos="zoom-in"
            class="hidden lg:block lg:w-1/2 md:w-5/6 w-5/6"
            alt="hero"
            src="images/hero.png"
        />
      </div>

      <p
          class="hidden lg:block text-center text-green-400 mt-40 text-sm animate-bounce"
      >
        Scroll to know more!
      </p>
      <img
          src="https://img.icons8.com/windows/32/34D399/expand-arrow--v1.png"
          class="hidden lg:block mx-auto pt-4 mb-24 animate-pulse"
          alt=""
      />
    </div>
  </section>
</template>
