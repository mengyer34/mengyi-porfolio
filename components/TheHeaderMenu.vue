<template>
    <header aria-label="Site Header" id="navbar" class="bg-inherit fixed top-0 w-full z-[999999] transition-all">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
            <NuxtLink to="/">
                <div class="block relative z-[9999999]">
                    <Logo />
                </div>
            </NuxtLink>
        </div>

        <div class="md:flex md:items-center md:gap-12 z-[999999]">
            <nav aria-label="Site Nav" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
                <li>
                <div
                    class="text-gray-500 transition hover:text-gray-500/75 cursor-pointer"
                    @click="changePage('about-page')"
                >
                    <span class="text-primary">0.</span>
                    About
                </div>
                </li>

                <li>
                <div
                    class="text-gray-500 transition hover:text-gray-500/75 cursor-pointer"
                    @click="changePage('project-page')"
                >
                    <span class="text-primary">1.</span>
                    Projects
                </div>
                </li>

                <li>
                <div
                    class="text-gray-500 transition hover:text-gray-500/75 cursor-pointer"
                    @click="changePage('contact-page')"
                >
                    <span class="text-primary">2.</span>
                    Contact
                </div>
                </li>

                <li>
                <div
                    class="text-gray-500 transition hover:text-gray-500/75 cursor-pointer"
                    @click="changePage('blog-page')"
                >
                    <span class="text-primary">3.</span>
                    Blog
                </div>
                </li>
            </ul>
            </nav>

            <transition name="fade">
                <div v-if="isOpen" @click="handleClick" class="fixed backdrop-blur w-full h-screen z-[999] left-0 top-0"></div>
            </transition>
            <transition name="fade">
                <nav aria-label="Site Nav" class="block md:hidden fixed z-[99999] bg-white w-[100%] h-screen top-0 p-10 shadow-md" :class="isOpen ? 'slide-left': 'slide-right'">
                <ul class="flex flex-col items-start gap-6 text-base">
                    <li>
                    <div
                        class="text-gray-500 transition hover:text-gray-500/75 cursor-pointer"
                        @click="changePage('about-page')"
                    >
                        <span class="text-primary">0.</span>
                        About
                    </div>
                    </li>
    
                    <li>
                    <div
                        class="text-gray-500 transition hover:text-gray-500/75 cursor-pointer"
                        @click="changePage('project-page')"
                    >
                        <span class="text-primary">1.</span>
                        Projects
                    </div>
                    </li>
    
                    <li>
                    <div
                        class="text-gray-500 transition hover:text-gray-500/75 cursor-pointer"
                        @click="changePage('contact-page')"
                    >
                        <span class="text-primary">2.</span>
                        Contact
                    </div>
                    </li>
    
                    <li>
                    <div
                        class="text-gray-500 transition hover:text-gray-500/75 cursor-pointer"
                        @click="changePage('blog-page')"
                    >
                        <span class="text-primary">3.</span>
                        Blog
                    </div>
                    </li>
                </ul>
                </nav>
            </transition>

            <div class="flex items-center gap-4">
                <div class="block md:hidden">
                    <button class="menu" @click="handleClick" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu">
                        <svg width="56" height="56" viewBox="0 0 100 100">
                            <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path class="line line2" d="M 20,50 H 80" />
                            <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
</header>

</template>
<script>
export default {
  name: 'TheHeaderMenu',
  data(){
    return {
        isOpen: false
    }
  },
  methods: {
    handleClick() {
        this.isOpen = !this.isOpen
        if(this.isOpen){
           document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
    },
    handleScroll() {
        if(process.client){
        var currentScrollPosition = window.scrollY
        if(currentScrollPosition < this.scrollPosition){
            document.getElementById("navbar").style.top = "0";
            document.getElementById("navbar").style.backgroundColor = "#fff";
            if(this.scrollPosition >= 100){
                document.getElementById("navbar").classList.add('shadow-md');
            }else{
                document.getElementById("navbar").classList.remove('shadow-md');
            }
        }
        else{
            this.showFullNav = false
            document.getElementById("navbar").style.top = "-70px";
            document.getElementById("navbar").style.backgroundColor = "inherit";
        }

        this.scrollPosition = window.scrollY
        }
    },
    changePage(id){
      const element = document.getElementById(id);
      element.scrollIntoView({behavior: "smooth"});
    }
  },
  created() {
    if(process.client){
            window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if(process.client){
       window.removeEventListener("scroll",this.handleScroll);  
    }
  },
}
</script>
<style>
.fade-enter-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  z-index: 9999999;
  position: relative;
}
.line {
  fill: none;
  stroke: #20a7d8;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.slide-left {
	-webkit-animation: slide-left 0.5s both;
	        animation: slide-left 0.5s both;
}
@-webkit-keyframes slide-left {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-200px);
            transform: translateX(-200px);
  }
}
@keyframes slide-left {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-200px);
            transform: translateX(-200px);
  }
}

.slide-right {
	-webkit-animation: slide-right 0.5s both;
	        animation: slide-right 0.5s both;
}
@-webkit-keyframes slide-right {
  0% {
    -webkit-transform: translateX(-200px);
            transform: translateX(-200px);
  }
  100% {
    -webkit-transform: translateX(100px);
            transform: translateX(100px);
            
  }
}
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(-200px);
            transform: translateX(-200px);
  }
  100% {
    -webkit-transform: translateX(100px);
            transform: translateX(100px);
  }
}
</style>