<template>
  <div class="scroll-smooth">
    <Head>
      <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@300;400;600;800&family=Poppins:wght@300;400;500;600&display=swap"></Link>
      <Title>Oyyi | Free Apis for Media Conversion , Machine Learning , Object Detection, Face Detection, Sentiment Analysis</Title>
    </Head>
    <Header/>
    <slot/>
    <Footer/>
    <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"/>
    <Script>
      const btn = document.querySelector("button.mobile-menu-button");
      const menu = document.querySelector(".mobile-menu");
      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    </Script>
  </div>
</template>