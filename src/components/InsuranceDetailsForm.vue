<template>
  <div>
    <div class="large-8 medium-8 small-8 large-offset-2 medium-offset-2 small-offset-2">
      <label>
        Wählen Sie ein Fahrzeug aus:
        <select class="car-select">
          <option v-for="car in cars" :value="car.value">{{ car.display }}</option>
        </select>
      </label>
      <label class="add-car is-hidden">
        Geben Sie die Daten für das neue Fahrzeug ein:
        <div class="row add-car-form">
          <div class="large-6 column add-car-model">
            <input type="text" class="car-model" placeholder="Model">
          </div>
          <div class="large-6 column add-car-power">
            <input type="number" class="car-power" placeholder="Leistung">
          </div>
        </div>
        <div class="alert callout is-hidden car-alert" data-closable>
          <span>Alle Felder sind erforderlich!</span>
          <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </label>
      <button class="button display-car-button" type="button">Fahrzeug hinzufügen</button>
      <button class="button is-hidden add-car-button" type="button">Speichern</button>
      </div>
      <!--End of the select for the car model-->
      <!--Select for the SF-Klasse-->
      <div class="large-8 medium-8 small-8 large-offset-2 medium-offset-2 small-offset-2">
      <label>
        Wählen Sie eine SF-Klasse:
        <select class="sf-select">
          <option v-for="sfklass in sfklasses" :value="sfklass.value">{{ sfklass.display }}</option>
        </select>
      </label>
      </div>
      <!--End of the select for the SF-Klasse-->
      <!--Radio button group to select the type of the insurance-->
      <div class="large-8 medium-8 small-8 large-offset-2 medium-offset-2 small-offset-2">
      <label>
        Wählen Sie eine Versicherungsart:
        <div class="button-group">
          <input type="radio" name="insurance-type" value="vollkasko" id="vollkasko" checked><label for="vollkasko">Vollkasko</label>
          <input type="radio" name="insurance-type" value="teilkasko" id="teilkasko"><label for="teilkasko">Teilkasko</label>
        </div>
      </label>
      </div>
      <!--End of the radio button group to select the type of the insurance-->
      <div class="large-8 medium-8 small-8 large-offset-2 medium-offset-2 small-offset-2">
      <label>
        Wählen Sie einen Tarif:
        <select class="tariff-select">
          <option v-for="tariff in tariffs" :value="tariff.value">{{ tariff.display }}</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-insurance-details-form',
  data () {
    return {
      cars: [
        {
          value: 85,
          display: 'Audi A3 1.6 TDI 85 kW'
        },
        {
          value: 120,
          display: 'BMW 220D Gran Tourer 120 kW'
        },
        {
          value: 125,
          display: 'MINI Cooper 2.0 SD 125 kW'
        },
        {
          value: 183,
          display: 'BMW 530D Touring 183 kW'
        }
      ],
      sfklasses: [
        {
          value: 0.74,
          display: 'SF1/2 - 74%'
        },
        {
          value: 0.6,
          display: 'SF1 - 60%'
        },
        {
          value: 0.55,
          display: 'SF2 - 55%'
        },
        {
          value: 0.48,
          display: 'SF3 - 48%'
        }
      ],
      tariffs: [
        {
          value: 0.15,
          display: 'Basic'
        },
        {
          value: 0.35,
          display: 'Comfort'
        },
        {
          value: 0.5,
          display: 'Premium'
        }
      ]
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
