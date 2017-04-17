/**
 * Mutations to change the state
 */
export default {
  /**
   * Gets the selected car by the user and updates the selectedCar state
   * @param state
   * @param payload
   */
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
  /**
   * Gets the selected SF-Klasse by the user and updates the selectedSf state
   * @param state
   * @param payload
   */
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
  /**
   * Gets the selected insurance type by the user and updates the selectedInsurance state
   * @param state
   * @param payload
   */
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
  /**
   * Gets the selected tariff by the user and updates the selectedTariff state
   * @param state
   * @param payload
   */
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
  /**
   * Function to add a driver to the drivers array in the state
   * @param state
   */
  addDriver (state) {
    const driver = {
      id: state.drivers.length + 1
    }
    state.drivers.push(driver)
  },
  /**
   * Function to delete the last driver in the drivers state array
   * @param state
   */
  deleteDriver (state) {
    if (state.drivers.length === 1) {
      console.log("You can't remove the first form")
    } else {
      state.drivers.splice(state.drivers.length - 1, 1)
    }
  },
  /**
   * Function to display the form to add a new car model
   * @param {*} state
   */
  displayAddCar (state) {
    if (state.displayAddCars.display === false) {
      state.displayAddCars = {
        display: true
      }
    } else {
      state.displayAddCars = {
        display: false
      }
    }
  },
  /**
   * Function to add a new car model to the state
   * @param {*} state
   * @param {*} payload
   */
  addCar (state, payload) {
    state.cars.push({
      id: state.cars.length + 1,
      value: payload.carValue,
      display: payload.carName + ' ' + payload.carPower + ' kW'
    })
    state.displayAddCars = {
      display: false
    }
  },
  /**
   * Function to show the alert in case one of the inputs is empty
   * @param {*} state
   */
  addCarShowAlert (state) {
    state.displayAddCars = {
      display: true,
      displayAlert: true
    }
    setTimeout(() => {
      state.displayAddCars = {
        display: true,
        displayAlert: false
      }
    }, 2000)
  }
}
