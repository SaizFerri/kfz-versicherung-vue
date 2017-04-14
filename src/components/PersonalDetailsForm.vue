<template>
  <div class="main-form large-8 medium-8 small-8 large-offset-2 medium-offset-2 small-offset-2">
    <label>
      Anrede:
      <select>
        <option v-for="title in titles" :value="title.value">{{ title.display }}</option>
      </select>
    </label>
    <label>
      Name:
      <input type="text" class="input-group" placeholder="Name">
    </label>
    <label>
      Vorname:
      <input type="text" class="input-group" placeholder="Vorname">
    </label>
    <label>
      Geburtsdatum:
      <input type="date">
    </label>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'app-personal-details-form',
  data () {
    return {
      titles: [
        {
          value: 'herr',
          display: 'Herr'
        },
        {
          value: 'frau',
          display: 'Frau'
        }
      ]
    }
  }
}

</script>

<style scoped>
@media screen and (max-width: 63.9375em) {
  .main-content {
    padding-top: 20px;
  }
}
</style>
