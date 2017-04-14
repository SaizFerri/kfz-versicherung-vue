<template>
  <div id="app">
    <app-main></app-main>
  </div>
</template>

<script>
import AppMain from './components/Main'
import $ from 'foundation-sites/vendor/jquery/dist/jquery.js'

export default {

  name: 'app',
  created () {
    $(document).ready(() => {
      $(document).foundation()
    })
  },
  components: {
    AppMain
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway');
html, body {
  min-height: 100%;
  font-family: 'Raleway' !important;
  background-color: #FDFFFC;
}
</style>
