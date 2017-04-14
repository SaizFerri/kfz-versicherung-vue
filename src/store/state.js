export default {
  drivers: [
    {
      id: 1
    }
  ],
  cars: [
    {
      id: 1,
      value: 0.15,
      display: 'Audi A3 1.6 TDI 85 kW'
    },
    {
      id: 2,
      value: 0.35,
      display: 'BMW 220D Gran Tourer 120 kW'
    },
    {
      id: 3,
      value: 0.35,
      display: 'MINI Cooper 2.0 SD 125 kW'
    },
    {
      id: 4,
      value: 0.5,
      display: 'BMW 530D Touring 183 kW'
    }
  ],
  sfklasses: [
    {
      id: 1,
      value: 0.74,
      display: 'SF1/2 - 74%'
    },
    {
      id: 2,
      value: 0.6,
      display: 'SF1 - 60%'
    },
    {
      id: 3,
      value: 0.55,
      display: 'SF2 - 55%'
    },
    {
      id: 4,
      value: 0.48,
      display: 'SF3 - 48%'
    }
  ],
  insuranceTypes: [
    {
      id: 1,
      value: 0.75,
      display: 'Vollkasko'
    },
    {
      id: 2,
      value: 0.25,
      display: 'Teilkasko'
    }
  ],
  tariffs: [
    {
      id: 1,
      value: 0.15,
      display: 'Basic'
    },
    {
      id: 2,
      value: 0.35,
      display: 'Comfort'
    },
    {
      id: 3,
      value: 0.5,
      display: 'Premium'
    }
  ],
  titles: [
    {
      value: 'herr',
      display: 'Herr'
    },
    {
      value: 'frau',
      display: 'Frau'
    }
  ],
  basicPrice: 100,
  selectedCar: {
    id: 0,
    value: 0
  },
  selectedSf: {
    id: 0,
    value: 0
  },
  selectedInsurance: {
    id: 1,
    value: 0.75
  },
  selectedTariff: {
    id: 0,
    value: 0
  }
}
