<template>
  <div class="layout-landing">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      title: this.$store.state.landing.title,
      tagline: this.$store.state.landing.tagline
    }
  }
}
</script>
