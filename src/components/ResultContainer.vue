<template>
  <div class="price-parent large-12 medium-12 small-12" data-sticky-container>
    <div class="price-container sticky is-suck" data-sticky data-sticky-on="small">
      <h5 class="sum-title">Monatliche Betrag: </h5>
      <hr>
      Automodel: <span>{{ car }}</span> €
      <br>

      SF-Klasse: <span>{{ sfklass }}</span> €
      <br>

      Versicherungsart: <span>{{ insurance }}</span> €
      <br>

      Tarif: <span>{{ tariff }}</span> €
      <hr>

      Gesamtpreis: <span>{{ sum }}</span> €
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app-result-container',
  computed: {
    ...mapState(['selectedCar', 'selectedSf', 'selectedInsurance', 'selectedTariff', 'basicPrice']),
    sum () {
      return this.car + this.sfklass + this.insurance + this.tariff
    },
    car () {
      return Math.round(((this.selectedCar.value * this.basicPrice) * 0.1) * 100) / 100
    },
    sfklass () {
      return Math.round(((this.selectedSf.value * this.basicPrice) * 0.3) * 100) / 100
    },
    insurance () {
      return Math.round(((this.selectedInsurance.value * this.basicPrice) * 0.25) * 100) / 100
    },
    tariff () {
      return Math.round(((this.selectedTariff.value * this.basicPrice) * 0.35) * 100) / 100
    }
  }
}
</script>

<style scoped>
.sum-title {
  font-family: 'Raleway';
}

.price-parent {
  min-height: 100%;
  width: 100%;
}

.price-container {
  margin-top: 0 !important;
  padding: 10px;
  min-height: 100%;
  background-color: #007ea7;
  color: white;
  bottom: auto;
  top: 0px;
  width: 100%;
}

/* Styles to fix the price container in tablets and smartphones */
@media screen and (max-width: 63.9375em) {
  .price-parent {
    padding: 0;
    margin: 0;
  }

  .price-container {
    padding: 10px;
    width: 100%;
    min-height: 0px;
  }
}
</style>
