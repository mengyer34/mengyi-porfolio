<template>
  <section id="about-page" class="relative overflow-hidden">
    <div class="absolute opacity-10 md:top-10 bottom-0">
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_fifomona.json" mode="bounce" background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop  autoplay></lottie-player>
    </div>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h2 class=" text-center text-3xl font-bold sm:text-4xl">
        About Me
        <div class="wavy"></div>
      </h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <div class="img-border-style w-full md:hidden h-fit mt-12">
          <img src="../assets/img/mengyi.jpg" alt="Mengyi">
        </div>
        <blockquote class="rounded-lg p-8">
          <p class="mt-4 text-gray-500">
            Hello and welcome to my page! My name is Mengyi and I’m a frontend developer in Phnom Penh City.
          </p>
          <p class="mt-4 text-gray-500">
            I graduated from Passerellesnumeriques Cambodia (PNC) with an associate degree in Web Programming and have been working on professional frontend development for over a year now. I specialize in building modern and responsive websites using the latest front-end technologies.
          </p>
          <p class="mt-4 text-gray-500">
            As a frontend developer, my focus is on delivering clean, user-friendly, and visually appealing designs. I’m an expert in :
          </p>
          <div class="mt-4 text-gray-500 grid grid-cols-2 lg:grid-cols-4 gap-3">
            <a href="https://nuxt.com/" target="_blank" class="h-[46px] rounded-md bg-gray-100 p-1 flex items-center gap-x-2 justify-center">
              <div class="max-w-[28px] max-h-[28px]">
                <img src="../assets/img/nuxt-logo.png" alt="nuxt">
              </div>
              <p>Nuxtjs</p>
            </a>
            <a href="https://vuejs.org/" target="_blank" class="h-[46px] rounded-md bg-gray-100 p-1 flex items-center gap-x-2 justify-center">
              <div class="max-w-[28px] max-h-[28px]">
                <img src="../assets/img/vue.png" alt="vue">
              </div>
              <p>Vuejs</p>
            </a>
            <a href="https://nextjs.org/" target="_blank" class="h-[46px] rounded-md bg-gray-100 p-1 flex items-center gap-x-2 justify-center">
              <div class="max-w-[28px] max-h-[28px]">
                <img src="../assets/img/nextjs.png" alt="next">
              </div>
              <p>Nextjs</p>
            </a>
            <a href="https://react.dev/" target="_blank" class="h-[46px] rounded-md bg-gray-100 p-1 flex items-center gap-x-2 justify-center">
              <div class="max-w-[28px] max-h-[28px]">
                <img src="../assets/img/reactjs.png" alt="react">
              </div>
              <p>Reactjs</p>
            </a>
            <a href="https://tailwindcss.com/" target="_blank" class="h-[46px] rounded-md bg-gray-100 p-1 flex items-center gap-x-2 justify-center">
              <div class="max-w-[28px] max-h-[28px]">
                <img src="../assets/img/tailwind.png" alt="tailwind">
              </div>
              <p>Tailwind</p>
            </a>
            <a href="https://getbootstrap.com/" target="_blank" class="h-[46px] rounded-md bg-gray-100 p-1 flex items-center gap-x-2 justify-center">
              <div class="max-w-[28px] max-h-[28px]">
                <img src="../assets/img/bootstrap.png" alt="bootstrap">
              </div>
              <p>Bootstrap</p>
            </a>
            <a href="https://www.w3schools.com/html/" target="_blank" class="h-[46px] rounded-md bg-gray-100 p-1 flex items-center gap-x-2 justify-center">
              <div class="max-w-[28px] max-h-[28px] my-1">
                <img src="../assets/img/html.png" alt="html">
              </div>
              <p>HTML</p>
            </a>
            <a href="https://www.w3schools.com/css/" target="_blank" class="h-[46px] rounded-md bg-gray-100 p-1 flex items-center gap-x-2 justify-center">
              <div class="max-w-[28px] max-h-[28px] my-1">
                <img src="../assets/img/css.png" alt="css">
              </div>
              <p>CSS</p>
            </a>
            <a href="https://www.w3schools.com/js/" target="_blank" class="h-[46px] rounded-md bg-gray-100 p-1 flex items-center gap-x-2 justify-center">
              <div class="max-w-[28px] max-h-[28px] my-1">
                <img src="../assets/img/js.png" alt="js">
              </div>
              <p>JavaScript</p>
            </a>
          </div>
          
        </blockquote> 
        <div class="img-border-style w-full hidden md:block lg:w-10/12 h-fit md:mt-12">
          <img src="../assets/img/mengyi.jpg" alt="Mengyi">
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.box-shadow-style {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.img-border-style {
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  margin: 26px auto 0;
  max-width: 550px;
  min-height: 300px;
  padding: 16px;
  position: relative;
  width: 80%;
}
.img-border-style:before, .img-border-style:after {
  content: "";
  height: 98%;
  position: absolute;
  width: 100%;
  z-index: -1;
}
.img-border-style:before {
  background: #fafafa;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  left: -5px;
  top: 4px;
  transform: rotate(-2.5deg);
}
.img-border-style:after {
  background: #f6f6f6;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  right: -3px;
  top: 1px;
  transform: rotate(1.4deg);
}
</style>