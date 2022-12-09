<template>
  <div class="w-72 h-80 flex flex-col justify-center xl:w-80 my-5 py-5 px-3 bg-gray-200 rounded-3xl">
    <img src="https://img.icons8.com/ios/50/374151/happy-cloud.png" class="mx-auto" :alt="title+'_image'" v-if="title === 'Simple to Use'"/>
    <img src="https://img.icons8.com/ios/50/374151/expensive-2--v1.png" class="mx-auto" :alt="title+'_image'" v-if="title === 'Cost Effective'"/>
    <img src="https://img.icons8.com/ios/50/374151/keyhole-shield.png" class="mx-auto" :alt="title+'_image'" v-if="title === 'Secure'"/>
    <img src="https://img.icons8.com/ios/50/374151/quick-mode-on.png" class="mx-auto" :alt="title+'_image'" v-if="title === 'Fast'"/>
    <img src="https://img.icons8.com/ios/50/374151/api-settings.png" class="mx-auto" :alt="title+'_image'" v-if="title === 'Large API Sets'"/>
    <img src="https://img.icons8.com/ios/50/374151/code.png" class="mx-auto" :alt="title+'_image'" v-if="title === 'SDKs'"/>

    <h1 class="text-center text-2xl font-semibold py-4">{{title}}</h1>
    <p class="text-sm text-gray-500 text-center mt-4 mx-4">
      {{description}}
    </p>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props:{
    title: String,
    description: String
  }
}
</script>

<style scoped>

</style>
