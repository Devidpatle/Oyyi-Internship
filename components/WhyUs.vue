<template>
  <section id="feature" class="bg-gray-100">
    <div class="container mx-auto">
      <h1 data-aos="fade-up" class="feature_title">Why choose Oyyi?</h1>
      <div class="feature_wrapper">
        <FeatureCard title="Simple to Use" description=" Our Api are simple to user with any programming language with network Library."/>
        <FeatureCard title="Cost Effective" description="Free plan of the api service is suitable for small project and cheaper than any api provider."/>
        <FeatureCard title="Secure" description=" Our tech team has spent sufficient time designing secure api with HTTPS, TLS enabled."/>
        <FeatureCard title="Fast" description="Our web server are configured to deliver response within a seconds for large through puts of your services."/>
        <FeatureCard title="Large API Sets" description=" We have covered all the major api that are needed for any web services. 20+ apis and new api adding soon."/>
        <FeatureCard title="SDKs" description=" Sdk for alm ost every popular programming language like Python , Php , Javascript. (Coming Soon)"/>
      </div>
      <div class="bg-gray-600 bg-opacity-10 py-10 mx-5 rounded-2xl" id="dashboard">
        <h1 class="block xl:hidden pb-14 text-center font-bold text-3xl lg:text-4xl text-gray-700">A Dashboard that is made just for you!</h1>
        <div class="dashboard_features_row">
          <div class="flex flex-col">
            <p class="hidden xl:block text-center font-bold text-4xl xl:text-5xl text-gray-700">A dashboard that is made just for you!</p>
            <div class="dashboard_feature_wrapper">
              <div class="dashboard_features">
                <img src="https://img.icons8.com/ios/50/374151/api-settings.png" class="w-7 mx-auto pb-3" alt="manage token"/>
                <h6>Manage Tokens</h6>
              </div>
              <div class="dashboard_features">
                <img src="https://img.icons8.com/ios/50/374151/data-in-both-directions.png" class="w-7 mx-auto pb-3" alt="track response"/>
                <h6>Track Response</h6>
              </div>
              <div class="dashboard_features">
                <img src="https://img.icons8.com/ios/50/374151/bar-chart--v1.png" class="w-7 mx-auto pb-3" alt="view stats"/>
                <h6>View Stats</h6>
              </div>
            </div>
          </div>
          <img src="/images/dashboard1.png" class="py-4 mx-auto w-2/3 xl:w-3/5" alt="dashboard image"/>
        </div>
      </div>
    </div>
  </section>

</template>
<script>
import FeatureCard from "./Partials/FeatureCard";

export default {
  components: {FeatureCard}
}
</script>
<style scoped>
.feature_title {
  @apply text-center py-5 mx-4 text-gray-700 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold lg:pt-20 lg:pb-20;
}

.dashboard_features {
  @apply text-sm xl:text-xl text-green-600 w-20 sm:w-48 py-5 text-center font-semibold rounded-xl;
}

.dashboard_feature_wrapper {
  @apply flex flex-wrap items-center justify-center mx-auto gap-x-8 sm:gap-x-1 gap-y-5 xl:pt-10 xl:gap-x-10;
}

.dashboard_features_row {
  @apply flex sm:flex-col flex-col-reverse lg:flex-row items-center justify-center gap-x-2 lg:mx-20 2xl:mx-40;
}
.feature_wrapper{
  @apply pt-5 pb-16 container flex flex-wrap items-center justify-center gap-x-10 lg:gap-y-4 xl:px-10 mx-auto text-green-600;
}
</style>
