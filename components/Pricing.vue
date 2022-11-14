<template>
  <section id="pricing" class="bg-slate-700 bg-opacity-20 pb-4">
    <div class="container mx-auto">
      <div data-aos="fade-up" class="pricing_title">Affordable . Simple . Transparent</div>
      <div class="pricing_box_wrapper">
        <div class="pricing_basic">
          <p class="text-gray-300 text-xl font-medium mb-4">Basic</p>
          <p class="text-gray-100 text-3xl font-bold">FREE</p>
          <p class="text-gray-300 text-xs mt-4">Made for personal project or small website</p>
          <ul class="text-sm text-gray-100 w-full mt-6 mb-6">
            <FeatureItem available="yes" feature="Api limits of 10 requests/minute"/>
            <FeatureItem available="yes" feature="500MB of Free Storage"/>
            <FeatureItem available="yes" feature="1 Free Static Website Hosting"/>
            <FeatureItem available="yes" feature="1 Queue job worker"/>
            <FeatureItem available="no" feature="Custom Domain name for file serving"/>
          </ul>
          <a type="button" href="https://dashboard.oyyi.xyz/" target="_blank" class="pricing_button">Get Started</a>
        </div>
        <div class="pricing_enterprise">
          <p class="text-gray-300 text-xl font-medium mb-4">Enterprise</p>
          <p class="text-gray-100 text-3xl font-bold">$20<span class="text-gray-400 text-sm"> / month </span></p>
          <p class="text-gray-300 text-xs mt-4">
            Best For Medium Traffic website.
          </p>
          <ul class="text-sm text-gray-100 w-full mt-6 mb-6">
            <FeatureItem available="yes" feature="Api limits of 40 requests/minute"/>
            <FeatureItem available="yes" feature="5000MB of Free Storage"/>
            <FeatureItem available="yes" feature="3 Free Static Website Hosting"/>
            <FeatureItem available="yes" feature="4 Queue job worker"/>
            <FeatureItem available="yes" feature="Custom Domain name for file serving"/>
          </ul>
          <a href="https://dashboard.oyyi.xyz/plan" type="button" class="pricing_button">Choose plan</a>
        </div>
        <div class="pricing_custom">
          <p class="text-gray-300 text-xl font-medium mb-4">Required more resources?</p>
          <p class="text-gray-100 text-3xl font-bold">Custom</p>
          <ul class="text-sm text-gray-100 w-full mt-6 mb-6">
           <li>Write to us about your requirement and our team will get back to you.</li>
           <li>&nbsp;</li>
           <li>&nbsp;</li>
          </ul>
          <a type="button" href="mailto:apppublisher.20@gmail.com" target="_blank" class="pricing_button">Contact Us</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import FeatureItem from "./Partials/FeatureItem";

export default {
  components: {FeatureItem}
}
</script>
<style scoped>
.pricing_button{
  @apply py-2 px-4 font-semibold bg-green-500 hover:bg-emerald-300 text-white w-full transition ease-in duration-200 text-center shadow-md rounded-lg;
}
.pricing_title{
  @apply text-green-500 text-center mx-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl lg:pt-20 font-inter font-extrabold;
}
.pricing_box_wrapper{
  @apply flex flex-col gap-y-10 items-center md:flex-row md:justify-center md:gap-14 lg:gap-20 mt-10 mb-24 py-10;
}
.pricing_basic{
  @apply shadow-md rounded-2xl w-80 bg-slate-700 bg-opacity-30 p-4;
}
.pricing_enterprise{
  @apply shadow-lg border-2 border-green-500 rounded-2xl w-80 bg-slate-700 bg-opacity-30 p-4;
}
.pricing_custom{
  @apply shadow-md rounded-2xl w-80 bg-slate-700 bg-opacity-30 p-4;
}
</style>