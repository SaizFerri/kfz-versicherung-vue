<template>
  <div class="column main-content">
    <h2 class="page-title">KFZ-Versicherungsrechner</h2>
    <div class="row">
      <!--Button group to add and delete a driver-->
      <div class="large-2 small-4 small-offset-2 column">
        <button class="button add-driver" type="button">Fahrer hinzufügen</button>
      </div>
      <div class="large-2 small-4 column">
        <button class="button delete-driver" type="button">Fahrer löschen</button>
      </div>
      <!--End of the button group to add and delete a driver-->
      <!--Main form-->
      <form class="driver-formular" action="#">
        <div class="large-12 medium-12 small-12 column">
          <!--Form for the personal data of a driver-->
          <app-personal-details-form></app-personal-details-form>
          <!--End of the form for the personal data of a driver-->
          <!--Insurance form-->
          <app-insurance-details-form></app-insurance-details-form>
          <!--End of insurance form-->
        </div>
      </form>
      <!--End of the main form-->
    </div>
  </div>
</template>

<script>
import AppPersonalDetailsForm from './PersonalDetailsForm'
import AppInsuranceDetailsForm from './InsuranceDetailsForm'

export default {
  name: 'app-main-content',
  components: {
    AppPersonalDetailsForm,
    AppInsuranceDetailsForm
  },
  methods: {
    // was soll mit beiden buttons passieren!
  }
}
</script>

<style scoped>
.page-title {
  font-family: 'Raleway';
}
</style>
