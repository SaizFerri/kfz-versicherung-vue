export default {
  selectCar (state, payload) {
    const car = state.cars.find(car => {
      return car.id === payload.carId
    })
    state.selectedCar = {
      ...state.selectCar,
      id: car.id,
      value: car.value
    }
  },

  selectSf (state, payload) {
    const sfKlass = state.sfklasses.find(sf => {
      return sf.id === payload.sfId
    })
    state.selectedSf = {
      ...state.selectedSf,
      id: sfKlass.id,
      value: sfKlass.value
    }
  },

  selectInsurance (state, payload) {
    const insurance = state.insuranceTypes.find(insurance => {
      return insurance.id === payload.insuranceId
    })
    state.selectedInsurance = {
      ...state.selectedInsurance,
      id: insurance.id,
      value: insurance.value
    }
  },

  selectTariff (state, payload) {
    const tariff = state.tariffs.find(tariff => {
      return tariff.id === payload.tariffId
    })
    state.selectedTariff = {
      ...state.selectTariff,
      id: tariff.id,
      value: tariff.value
    }
  },

  addDriver (state) {
    const driver = {
      id: state.drivers.length + 1
    }
    state.drivers.push(driver)
  },

  deleteDriver (state) {
    if (state.drivers.length === 1) {
      console.log('no puedes nigga')
    } else {
      state.drivers.splice(state.drivers.length - 1, 1)
    }
  }
}
