<template>
  <div class="price-parent large-12 medium-12 small-12" data-sticky-container>
    <div class="price-container sticky" data-sticky data-sticky-on="small">
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
export default {
  name: 'app-result-container',
  data () {
    return {
      car: 0,
      sfklass: 0,
      insurance: 0,
      tariff: 0
    }
  },
  computed: {
    sum () {
      return this.car + this.sfklass + this.insurance + this.tariff
    }
  }
}
</script>

<style scoped>

.sum-title {
  font-family: 'Raleway';
}

.price-parent {
  height: 100%;
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
