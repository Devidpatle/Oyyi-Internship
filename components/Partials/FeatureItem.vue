<template>
  <li class="mb-3 flex items-center opacity-50">
    <img src="https://img.icons8.com/material/24/16A34A/checkmark--v1.png" class="mr-2" alt="Feature Available" v-if="available === 'yes'"/>
    <img src="https://img.icons8.com/material/24/FF0000/multiply--v1.png" class="mr-2" alt="Feature Not Available" v-else/>
    {{feature}}
  </li>
</template>

<script>
export default {
  name: "FeatureItem",
  props:{
    feature: String,
    available :String
  }
}
</script>
