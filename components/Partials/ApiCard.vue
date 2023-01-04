<template>
  <div class="col-12 col-md-6 mb-5 mb-md-7 mb-lg-0">
    <div class="card border-0 overflow-hidden h-100">
      <div class="position-relative">
        <img :src="image" class="card-img-top" :alt="title"></div>
      <div class="card-body position-relative mt-n6 mx-2 bg-white border border-gray-300 text-center rounded-0"><h3
          class="h5 card-title">{{title}}</h3>
        <p class="mt-3"> {{description}}</p>
          <NuxtLink tag="button" :to="link" class="btn btn-outline-secondary btn-icon rounded-0" >
            Read More
          </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApiCard",
  props:[
      "title","description","image","link"
  ]
}
</script>
