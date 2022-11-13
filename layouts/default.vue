<template>
  <div class="scroll-smooth">
    <Head>
      <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@300;400;600;800&family=Poppins:wght@300;400;500;600&display=swap"></Link>
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" body=true />
      <Link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css"/>

      <Title>Oyyi</Title>
    </Head>
    <Header/>
    <slot/>
    <Footer/>
  </div>
</template>