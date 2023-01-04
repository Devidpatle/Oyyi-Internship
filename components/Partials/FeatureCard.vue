<template>
  <div class="col-sm-12 col-md-12 col-lg-6">
    <div class="card border-0 mb-4">
      <div class="card-body">
        <div class="d-flex p-3">
          <div>
            <div class="icon icon-primary"><img :src="icon" :alt="title"/></div>
          </div>
          <div class="ps-4"><h3 class="h5 icon-box-title">{{ title }}</h3>
            <p class="icon-box-text">{{ description }}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    title: String,
    description: String,
    icon: String
  }
}
</script>

