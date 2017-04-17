<template>
  <div>
    <div class="large-8 medium-8 small-8 large-offset-2 medium-offset-2 small-offset-2">
      <label>
        Wählen Sie ein Fahrzeug aus:
        <select class="car-select" v-model="selectedCarId" @change="selectCar(selectedCarId)">
          <option disabled value="">Wählen Sie ein Auto</option>
          <option v-for="car in cars" :value="car.id" :selected="car.id === selectedCar.id">{{ car.display }}</option>
        </select>
      </label>
      <label v-if="displayAddCars.display == true" class="add-car">
        Geben Sie die Daten für das neue Fahrzeug ein:
        <div class="row add-car-form">
          <div class="large-6 column add-car-model">
            <input type="text" class="car-model" v-model="carName" placeholder="Model">
          </div>
          <div class="large-6 column add-car-power">
            <input type="number" class="car-power" v-model="carPower" placeholder="Leistung">
          </div>
        </div>
        <div v-if="displayAddCars.displayAlert == true" class="alert callout car-alert" data-closable>
          <span>Alle Felder sind erforderlich!</span>
          <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </label>
      <button class="button display-car-button" type="button" @click="displayAddCar">Fahrzeug hinzufügen</button>
      <button class="button add-car-button" v-if="displayAddCars.display == true" type="button" @click="addCar(carName, carPower)">Speichern</button>
      </div>
      <!--End of the select for the car model-->
      <!--Select for the SF-Klasse-->
      <div class="large-8 medium-8 small-8 large-offset-2 medium-offset-2 small-offset-2">
      <label>
        Wählen Sie eine SF-Klasse:
        <select class="sf-select" v-model="selectedSfId" @change="selectSf(selectedSfId)">
          <option disabled value="">Wählen Sie eine SF-Klasse</option>
          <option v-for="sfklass in sfklasses" :value="sfklass.id" :selected="sfklass.value === selectedSf.value">{{ sfklass.display }}</option>
        </select>
      </label>
      </div>
      <!--End of the select for the SF-Klasse-->
      <!--Radio button group to select the type of the insurance-->
      <div class="large-8 medium-8 small-8 large-offset-2 medium-offset-2 small-offset-2">
        <label>
          Wählen Sie eine Versicherungsart:
          <div class="button-group">
            <span v-for="insurance in insuranceTypes" @change="selectInsurance(insurance)">
              <input type="radio" name="insurance-type" :value="insurance.value" :checked="insurance.value === selectedInsurance.value">
              <label>{{insurance.display}}</label>
            </span>
          </div>
        </label>
      </div>
      <!--End of the radio button group to select the type of the insurance-->
      <div class="large-8 medium-8 small-8 large-offset-2 medium-offset-2 small-offset-2">
      <label>
        Wählen Sie einen Tarif:
        <select class="tariff-select" v-model="selectTariffId" @change="selectTariff(selectTariffId)">
          <option disabled value="">Wählen Sie einen Tarif</option>
          <option v-for="tariff in tariffs" :value="tariff.id" :selected="tariff.value === selectedTariff.value">{{ tariff.display }}</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app-insurance-details-form',
  data () {
    return {
      selectedCarId: '',
      selectedSfId: '',
      selectTariffId: '',
      carName: '',
      carPower: ''
    }
  },
  computed: {
    ...mapState(['cars', 'displayAddCars', 'sfklasses', 'insuranceTypes', 'tariffs', 'selectedCar', 'selectedSf', 'selectedTariff', 'selectedInsurance'])
  },
  methods: {
    selectCar (selectedCarId) {
      this.$store.commit({
        type: 'selectCar',
        carId: selectedCarId
      })
    },
    selectSf (selectedSfId) {
      this.$store.commit({
        type: 'selectSf',
        sfId: selectedSfId
      })
    },
    selectInsurance (insurance) {
      this.$store.commit({
        type: 'selectInsurance',
        insuranceId: insurance.id
      })
    },
    selectTariff (selectTariffId) {
      this.$store.commit({
        type: 'selectTariff',
        tariffId: selectTariffId
      })
    },
    displayAddCar () {
      this.$store.commit({
        type: 'displayAddCar'
      })
    },
    addCar (carName, carPower) {
      let carValue = 0
      if (carName === '' || carPower === '') {
        this.$store.commit({
          type: 'addCarShowAlert'
        })
      } else {
        if (carPower < 100) {
          carValue = 0.15
        } else if (carPower >= 100 && carPower < 150) {
          carValue = 0.35
        } else {
          carValue = 0.5
        }
        this.$store.commit({
          type: 'addCar',
          carName: carName,
          carPower: carPower,
          carValue: carValue
        })
        this.carName = ''
        this.carPower = ''
      }
    }
  }
}
</script>

<style scoped>
.add-car-form {
  padding-top: 10px;
}

.add-car-model {
  padding-left: 0;
}

.add-car-power {
  padding-right: 0;
}

/* Styles to fix the price container in tablets and smartphones */
@media screen and (max-width: 63.9375em) {
  .add-car-power {
    padding-right: 10px;
    padding-left: 0;
  }
}
</style>
