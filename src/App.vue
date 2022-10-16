<template>
  <div>
    <router-link to="/page-one">Page One</router-link>
    <router-link to="/page-two">Page Two</router-link>
    <router-link to="/page-three">Page Three</router-link>

    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
</style>
