<template>
  <div class="landing-home">
    <h1>{{ this.$store.state.landing.title }}</h1>
    <h2>{{ this.$store.state.landing.tagline }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
h1 {
  margin: 50px auto 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
