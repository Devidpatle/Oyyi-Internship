<template>
  <main>
    <section class="section d-flex justify-content-center bg-dark text-white align-items-center" style="min-height: 80vh;">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-2 text-center">
            <h1 id="main" class="display-2 fw-bolder text-capitalize mb-3">Process, Convert , Store <br> your media files</h1>
            <p class="lead">Media processing apis for image conversion, media optimization , storing and many more with a simple http requests</p>
            <AvailableClient/>
            <a href="https://docs.oyyi.xyz/media/image-conversion-api.html"
               class="btn btn-primary shadow-none my-3 py-3 px-5 btn-lg"> Read Documentation</a>&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-sm-8 col-md-8 "><h2 class="display-2 mb-4">How it works ?</h2>
            <p class="lead">Process media from any source and store it to any Storage</p></div>
        </div>
        <img src="/images/oyyimediaapi.png" alt="media api processing">
      </div>
    </section>
    <section class="section bg-light-subtle">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4 my-3 text-center">
            <div class="card shadow-lg mb-4 h-100" style="border-color: #0d6efd;">
              <div class="card-header" style="height: 100px;background-color: #0d6efd">
              </div>
              <div class="card-body py-5">
                <h2 class="fw-bolder display-3 py-2">Image Processing Api</h2>
                <p class="card-text py-4 mb-0">
                  Image Conversion through API or on the fly with web request.
                  Almost all type of image manipulation like crop, resize, blur,
                  sharp and many more can be done with just one request.</p>
                <a href="https://docs.oyyi.xyz/media/image-conversion-api.html" class="#">Read Docs</a></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 my-3 text-center">
            <div class="card shadow-lg mb-4 h-100" style="border-color: #2CA58D;">
              <div class="card-header" style="height: 100px;background-color: #2CA58D;">
              </div>
              <div class="card-body py-5">
                <h2 class="fw-bolder display-3 py-2"> Thumbnail Generator Api</h2>
                <p class="card-text py-4 mb-0">
                  Generate Thumbnail for Video file, PDF File and Image File with
                  simple API Request. No Restriction or Charges.</p>
                <a href="https://docs.oyyi.xyz/media/thumbnail-generator-api.html" class="#">Read Docs</a></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 my-3 text-center">
            <div class="card border-secondary shadow-lg mb-4 h-100">
              <div class="card-header bg-secondary" style="height: 100px;">
              </div>
              <div class="card-body py-5">
                <h2 class="fw-bolder display-3 py-2">Media Optimization Api</h2>
                <p class="card-text py-4 mb-0">
                  Compress image or pdf with lossless image or pdf compression
                  algorithm without losing quality.</p>
                <a href="https://docs.oyyi.xyz/media/file-optimizer-api.html" class="#">Read Docs</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import AvailableClient from "../components/Partials/AvailableClient";
export default {
  components: {AvailableClient}
}
</script>