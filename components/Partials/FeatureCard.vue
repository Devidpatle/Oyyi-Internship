<template>
  <div class="w-72 xl:w-80 my-5">
    <img
        src="https://img.icons8.com/material-outlined/50/E5E7EB/installing-updates.png"
        class="mx-auto"
    />
    <h1 class="text-center text-2xl font-semibold py-4">{{title}}</h1>
    <p class="text-sm text-gray-400 text-justify mx-4">
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