<template>
    <div v-if="loading" class="loading-page">
        <svg xmlns="https://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 64 64" class="mx-auto">
            <polygon id="animation" fill="none" stroke="#20a7d8" stroke-width="4" points="32,2 2,32 32,62 62,32"/>
            <polygon id="animation" fill="none" stroke="transparent" stroke-width="1" points="20,32 32,20 44,32 32,44"/>
            <text x="32" id="animation" y="42" text-anchor="middle" fill="#20a7d8" font-size="30" font-weight="500">M</text>
        </svg>
    </div>
  </template>
  
  <script>
    export default {
      data: () => ({
        loading: false
      }),
      methods: {
        start() {
          this.loading = true
        },
        finish() {
          this.loading = false
        }
      }
    }
  </script>
  
  <style scoped>
    .loading-page {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* background: rgb(32, 167, 216); */
      backdrop-filter: blur(10px);
      text-align: center;
      padding-top: 200px;
      font-size: 30px;
      font-family: sans-serif;
      display: flex;
      z-index: 999999999;
    }

    #animation:nth-of-type(1) {
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    }

    #animation:nth-of-type(2) {
    fill-opacity: 0;
    }

    #animation:nth-of-type(3) {
    opacity: 0;
    }
    @keyframes reveal {
    0% {
        stroke-dashoffset: 200;
    }
    30% {
        stroke-dashoffset: 150;
    }
    100% {
        stroke-dashoffset: 0;
    }
    }

    @keyframes appear {
    0% {
        fill-opacity: 0;
    }
    40% {
        fill-opacity: .5;
    }
    100% {
        fill-opacity: 1;
    }
    }

    @keyframes fadein {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
    }
    #animation:nth-of-type(1) {
    animation: reveal 1s ease-in forwards;
    animation-delay: 0s;
    }

    #animation:nth-of-type(2) {
    animation: appear 1s ease-in forwards;
    animation-delay: 0.2s;
    }

    #animation:nth-of-type(3) {
    animation: fadein 1s ease-in forwards;
    animation-delay: 0.4s;
    }
  </style>