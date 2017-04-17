<template>
  <div class="column main-content">
    <div class="row">
      <!--Button group to add and delete a driver-->
      <div class="large-2 small-4 small-offset-2 column">
        <button class="button add-driver" type="button" @click="addDriver">Fahrer hinzufügen</button>
      </div>
      <div class="large-2 small-4 column">
        <button class="button delete-driver" type="button" @click="deleteDriver">Fahrer löschen</button>
      </div>
      <!--End of the button group to add and delete a driver-->
      <!--Main form-->
      <form class="driver-formular" action="#">
        <div class="large-12 medium-12 small-12 column">
          <!--Form for the personal data of a driver-->
          <app-personal-details-form v-for="driver in drivers" :id="driver.id"></app-personal-details-form>
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
import { mapState } from 'vuex'
import AppPersonalDetailsForm from './PersonalDetailsForm'
import AppInsuranceDetailsForm from './InsuranceDetailsForm'

export default {
  name: 'app-main-content',
  components: {
    AppPersonalDetailsForm,
    AppInsuranceDetailsForm
  },
  computed: {
    ...mapState(['drivers'])
  },
  methods: {
    addDriver () {
      this.$store.commit({
        type: 'addDriver'
      })
    },
    deleteDriver () {
      this.$store.commit({
        type: 'deleteDriver'
      })
    }
  }
}
</script>

<style scoped>
.page-title {
  font-family: 'Raleway';
}
</style>
