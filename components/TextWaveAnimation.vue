<template>
    <div class="content w-fit">
        <h2 class="text-center text-3xl font-bold tracking-tight sm:text-4xl">{{words}}</h2>
        <h2 class="text-center text-3xl font-bold tracking-tight sm:text-4xl">{{words}}</h2>
    </div>
</template>
<script>
export default {
    props: {
        words: String
    }
}
</script>
<style scoped>
.content {
    position: relative;
}
 
.content h2 {
    position: absolute;
    transform: translate(-50%, -50%);
    text-shadow: -4px 4px 4px #21425e;
}
 
.content h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #03a9f4;
}
 
.content h2:nth-child(2) {
    color: #03a9f4;
    animation: animate 4s ease-in-out infinite;
}
 
@keyframes animate {
    0%,
    100% {
        clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
    }
    50% {
        clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
    }
}
</style>