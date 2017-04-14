<template>
  <div>
    <!--<h2>KFZ-Versicherungsrechner</h2>-->
    <div class="expanded row">
      <div class="large-2 column left-column"><!--Left column component--><app-result-container></app-result-container></div>
      <div class="large-8 column"><!--Main content column component--><app-main-content></app-main-content></div>
      <div class="large-2 column"><!--Empty column--></div>
    </div>
  </div>
</template>

<script>
import AppResultContainer from './ResultContainer'
import AppMainContent from './MainContent'
export default {
  name: 'app-main',
  data () {
    return {
    }
  },
  components: {
    AppResultContainer,
    AppMainContent
  }
}
</script>

<style scoped>
.left-column {
  padding: 0;
}
</style>
