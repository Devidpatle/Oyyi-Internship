<template>
  <header class="py-3 px-3 pt-4 bg-zinc-900  text-gray-200">
    <div
        class="container flex justify-between items-center mx-auto px-8 w-full"
    >
      <div class="text-3xl lg:text-4xl font-montserrat font-bold">Oyyi</div>
      <div
          class="hidden lg:flex space-x-9 items-center font-inter text-base font-medium"
      >
        <a href="#apis" class="hover:text-green-500">Our APIs</a>
        <a href="whyus" class="hover:text-green-500">Features</a>
        <a href="https://v1-docs.oyyi.xyz/" class="hover:text-green-500"
        >Documentation</a
        >
        <a href="#pricing" class="hover:text-green-500">Pricing</a>
        <a href="#dashboard" class="hover:text-green-500">Dashboard</a>
        <a
            href="#contact"
            class="px-4 py-3 bg-green-500 text-zinc-900 rounded-lg hover:bg-emerald-300"
        >Contact Us</a
        >
      </div>
      <div class="lg:hidden">
        <button class="outline-none mobile-menu-button mt-3">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="34"
              height="34"
              viewBox="0 0 30 30"
              style="fill: #fff"
          >
            <path
                d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div
        data-aos="slide-down"
        class="hidden mobile-menu bg-slate-700 bg-opacity-10 rounded-lg mt-8 px-7 pt-5"
    >
      <ul class="text-white text-center text-base font-semibold">
        <li><a href="#apis" class="nav-item-mobile">Our APIs</a></li>
        <li><a href="#whyus" class="nav-item-mobile">Features</a></li>
        <li>
          <a href="https://v1-docs.oyyi.xyz/" class="nav-item-mobile"
          >Documentation</a
          >
        </li>
        <li><a href="#pricing" class="nav-item-mobile">Pricing</a></li>
        <li><a href="#dashboard" class="nav-item-mobile">Dashboard</a></li>
        <li><a href="#contact" class="nav-item-mobile">Contact Us</a></li>
      </ul>
    </div>
  </header>
</template>
