<template>
  <section class="section bg-primary" id="whyus">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-sm-8 col-md-8 text-white"><h2 class="h1 mb-4">Why Oyyi ?</h2>
          <p class="lead">We have apis to meet all your development needs.</p></div>
      </div>
      <div class="row">
        <FeatureCard title="Simple to Use" description=" Our API are simple to use with any programming language with network Library." icon="https://img.icons8.com/ios/50/374151/happy-cloud.png"/>
        <FeatureCard title="Cost Effective" description="Free plan of the API service is suitable for small projects and cheaper than any API provider." icon="https://img.icons8.com/ios/50/374151/expensive-2--v1.png"/>
        <FeatureCard title="Secure" description=" Our tech team has spent sufficient time designing secure API with HTTPS, TLS enabled." icon="https://img.icons8.com/ios/50/374151/keyhole-shield.png"/>
        <FeatureCard title="Fast" description="Our Web Servers are configured to deliver response within seconds for large through puts of your services." icon="https://img.icons8.com/ios/50/374151/quick-mode-on.png"/>
        <FeatureCard title="Large API Sets" description=" We have covered all the major API that are needed for any web services. 20+ APIs and New API adding soon." icon="https://img.icons8.com/ios/50/374151/api-settings.png"/>
        <FeatureCard title="SDKs" description=" SDK for almost every popular programming language like Python, PHP, Javascript. (Coming Soon)" icon="https://img.icons8.com/ios/50/374151/code.png"/>
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
