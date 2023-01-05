<template>
  <main>
    <section class="section d-flex justify-content-center bg-info text-white align-items-center"
             style="min-height: 80vh;">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-2 text-center">
            <h1 id="main" class="display-2 fw-bolder text-capitalize mb-3">General Purpose APi for difficult day to day
              task.</h1>
            <p class="lead">These are those api which you will surely need in every project either for backend or app or
              any development</p>
            <AvailableClient/>
            <a href="https://docs.oyyi.xyz/mlapi/object-detection-api.html"
               class="btn btn-dark shadow-none my-3 py-3 px-5 btn-lg"> Read Documentation</a>&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </section>
    <section class="section bg-light-subtle">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4 my-3 text-center">
            <div class="card shadow-lg h-100" style="border-color: #0d6efd;">
              <div class="card-header" style="height: 100px;background-color: #0d6efd">
              </div>
              <div class="card-body py-5">
                <h2 class="fw-bolder display-3 py-2">Avatar Generation Api</h2>
                <p class="card-text py-4 mb-0">
                  Use this api route to get random and unique avatar for api. Use it for default profile pic or profile
                  placeholder for any website ,app or anywhere. You don't need any library to generate avatar , just a
                  simple http request.</p>
                <a href="https://docs.oyyi.xyz/general/avatar.html" class="#">Read Docs</a></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 my-3 text-center">
            <div class="card shadow-lg h-100" style="border-color: #2CA58D;">
              <div class="card-header" style="height: 100px;background-color: #2CA58D;">
              </div>
              <div class="card-body py-5">
                <h2 class="fw-bolder display-3 py-2"> QR Generator Api</h2>
                <p class="card-text py-4 mb-0">
                  Generate Qr code with a single api request. Easy to use with any programming language and don't required you to install any library.</p>
                <a href="https://docs.oyyi.xyz/general/qr_generator.html" class="#">Read Docs</a></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 my-3 text-center">
            <div class="card border-secondary shadow-lg h-100">
              <div class="card-header bg-secondary" style="height: 100px;">
              </div>
              <div class="card-body py-5">
                <h2 class="fw-bolder display-3 py-2">Fake Data Api</h2>
                <p class="card-text py-4 mb-0">
                  Generate fake data for you api or app development process. Support almost every data types including name phone credit card and others more.</p>
                <a href="https://docs.oyyi.xyz/general/fake_generator.html" class="#">Read Docs</a></div>
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