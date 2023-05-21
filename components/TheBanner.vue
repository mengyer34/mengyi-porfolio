<template>
  <section class="bg-gray-50 wave">
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center z-[9999]"
  >
    <div class="mx-auto max-w-xl text-center">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Hello 👋 I'm
        <strong class="font-extrabold sm:block">
          <section class="animation text-white text-4xl">
            <div class="first"><div>YOENG Mengyi</div></div>
            <div class="second"><div>Web Developer</div></div>
          </section>
        </strong>
      </h1>

      <p class="mt-4 sm:text-xl sm:leading-relaxed">
        I am always looking to improve my skills and stay up to date with the latest web development technologies and best practices.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4" >
        <div  @click="changePage('contact-page')">
          <button-main :title="'Contact Me'"></button-main>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import ButtonMain from './ButtonMain.vue'
export default {
  components: { ButtonMain },
  name: 'TheBanner',
  methods: {
    changePage(id){
      console.log(' helerkjer')
      const element = document.getElementById(id);
      element.scrollIntoView({behavior: "smooth"});
    }
  }
}
</script>
<style scoped>
.animation {
  height:50px;
  overflow:hidden;
  margin-top: 10px;
}

.animation > div > div {
  padding: 0.25rem 0.75rem;
  height:2.81rem;
  margin-bottom: 2.81rem;
  display:inline-block;
}

.animation div:first-child {
  animation: text-animation 8s infinite;
}

.first div {
  background-color:#20a7d8;
}
.second div {
  background-color:#CD921E;
}

@keyframes text-animation {
  0% {margin-top: 0;}
  10% {margin-top: 0;}
  20% {margin-top: -5.62rem;}
  30% {margin-top: -5.62rem;}
  40% {margin-top: -11.24rem;}
  60% {margin-top: -11.24rem;}
  70% {margin-top: -5.62rem;}
  80% {margin-top: -5.62rem;}
  90% {margin-top: 0;}
  100% {margin-top: 0;}
}

.wave {
	 position: relative;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 flex-direction: column;
	 min-height: 100vh;
	 background-color: #20a7d8;
	 overflow: hidden;
}
 .wave:before, .wave:after {
	 content: "";
	 position: absolute;
	 left: 50%;
	 min-width: 300vw;
	 min-height: 300vw;
	 background-color: #fff;
	 animation-name: rotate;
	 animation-iteration-count: infinite;
	 animation-timing-function: linear;
}
 .wave:before {
	 bottom: 15vh;
	 border-radius: 45%;
	 animation-duration: 10s;
}
 .wave:after {
	 bottom: 12vh;
	 opacity: 0.5;
	 border-radius: 47%;
	 animation-duration: 10s;
}
 @keyframes rotate {
	 0% {
		 transform: translate(-50%, 0) rotateZ(0deg);
	}
	 50% {
		 transform: translate(-50%, -2%) rotateZ(180deg);
	}
	 100% {
		 transform: translate(-50%, 0%) rotateZ(360deg);
	}
}

</style>