<template>
  <div>
    <div class="title-div expanded row">
      <h2 class="title large-offset-3">KFZ-Versicherungsrechner</h2>
    </div>
    <div class="expanded row main-content">
      <div class="large-2 small-12 column left-column"><!--Left column component--><app-result-container></app-result-container></div>
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
  components: {
    AppResultContainer,
    AppMainContent
  }
}
</script>

<style scoped>
.title-div {
  padding: 20px;
  background-color: #007ea7;
  color: white;
}
.title {
  font-family: 'Raleway';
}
.main-content {
  padding: 10px;
}
.left-column {
  padding: 0;
}
</style>
