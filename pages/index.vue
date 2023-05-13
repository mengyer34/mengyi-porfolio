<template>
  <div>
    <TheHeaderMenu/>
    <TheBanner/>
    <AboutMe/>
    <Projects/>
    <ContactMe/>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  }
})
</script>
