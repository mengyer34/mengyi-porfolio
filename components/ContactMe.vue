<template>
  <section id="contact-page" class="relative z-10 overflow-hidden">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h2 class=" text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Contact Me
        <div class="wavy"></div>
      </h2>
      <div class="absolute right-0 top-0 mt-[-10px] z-0 overflow-hidden opacity-20">
        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_gaplvsns.json"  background="transparent"  speed="1"  style="width: 450px; height: 420px;"  loop  autoplay></lottie-player>
      </div>
      <div class="mt-20 flex gap-x-5 mx-auto w-fit">
        <div class="p-1 shadow-md rounded-full w-fit bg-white">
          <a href="https://github.com/mengyi-dev" target="_blank">
            <img src="../assets/icons/github.svg" alt="github" class="w-11">
          </a>
        </div>
        <div class="p-1 shadow-md rounded-full w-fit bg-white">
          <a href="https://web.facebook.com/mengyi.yoeng" target="_blank">
            <img src="../assets/icons/facebook.svg" alt="facebook" class="w-11">
          </a>
        </div>
        <div class="p-1 shadow-md rounded-full w-fit bg-white">
          <a href="https://t.me/mengyi_yoeng" target="_blank">
            <img src="../assets/icons/telegram.svg" alt="facebook" class="w-11">
          </a>
        </div>
        <div class="p-1 shadow-md rounded-full w-fit bg-white">
          <a href = "mailto: mengyi.yoeng34@gmail.com">
            <img src="../assets/icons/email.svg" alt="facebook" class="w-11">
          </a>
        </div>
      </div>
    </div>
  </section>
  </template>
  <script>
  export default {
      name: 'Projects',
  }
  </script>